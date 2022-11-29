import { getProviders, signIn } from "next-auth/react"
import GoogleSignInButton from 'components/GoogleSignInButton'

export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <GoogleSignInButton/>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
