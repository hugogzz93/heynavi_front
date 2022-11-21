import { useEffect, useState } from "react"
import jwtDecode from 'jwt-decode';


type IAuthHookProps = {
    targetId: string,
}

const useAuth = (props: IAuthHookProps) => {

    const [user, setUser] = useState<any>({})


    const handleCredentialResponse = (response: any) => {
        const user = jwtDecode(response.credential);
        console.log(response.credential)
        setUser(user)
    }

    useEffect(() => {
        /* global google */
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

    return user;


}
export { useAuth }
