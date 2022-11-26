import { useEffect, useState } from "react"
import jwtDecode from 'jwt-decode';


type IAuthHookProps = {
    targetId?: string,
}


const useAuth = (props: IAuthHookProps) => {
    const S_KEY = 'gid'

    const [user, setUser] = useState<any | null>(null)


    const handleCredentialResponse = (response: any) => {
        const user = jwtDecode(response.credential);
        console.log(response.credential)
        localStorage.setItem(S_KEY, JSON.stringify(user))
        debugger
        setUser(user)
    }


    useEffect(() => {
        /* global google */
        const jwt = localStorage.getItem(S_KEY)
        try {
            debugger
            if(!user && jwt) {
                let user = JSON.parse(jwt)
                setUser(user)
                return 
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
