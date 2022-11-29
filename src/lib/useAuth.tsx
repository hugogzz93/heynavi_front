import { useEffect, useState } from "react"
import jwtDecode from 'jwt-decode';


type IAuthHookProps = {
    targetId?: string,
}

const isExpired = (timestamp: number): boolean => {
    if(!timestamp)
        return false
    const expirationDate = new Date(timestamp * 1000)
    return new Date() < expirationDate;
}


const useAuth = (props: IAuthHookProps) => {
    const S_KEY = 'gid'

    const [user, setUser] = useState<any | null>(null)


    const handleCredentialResponse = (response: any) => {
        const user = jwtDecode(response.credential);
        console.log(response.credential)
        localStorage.setItem(S_KEY, JSON.stringify(user))
        setUser(user)
    }


    useEffect(() => {
        /* global google */
        const jwt = localStorage.getItem(S_KEY)
        try {
            if(!user && jwt) {
                let user = JSON.parse(jwt)
                if(!isExpired(user.exp)) {
                    setUser(user)
                    return 
                }
            } 
        }catch(e) {
            console.error(e)
        }

            window.onload = function () {
              google.accounts.id.initialize({
                client_id: "33263397151-ppg6sjg98m3dm6btng52hsc0n5i1gbgk.apps.googleusercontent.com",
                callback: handleCredentialResponse
              });
              google.accounts.id.renderButton(
                document.getElementById(props.targetId),
                { theme: "outline", size: "large" }  // customization attributes
              );
              google.accounts.id.prompt(); // also display the One Tap dialog
            }
    }, [])

    return {user, logOut: () => {
        google.accounts.id.disableAutoSelect();
        localStorage.removeItem(S_KEY)
        setUser(null)
        window.location.href = '/'
    }};


}
export { useAuth }
