import { useSession, signIn, signOut } from 'next-auth/react'


const Login = () => {
    const { data: session } = useSession()

    if(session) {
        return <div>
                <div>Welcome, {session.user.email}</div>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
    } else {
        return (
            <button onClick={() => signIn()}>Sign In</button>
        )
    }

}

export default Login
