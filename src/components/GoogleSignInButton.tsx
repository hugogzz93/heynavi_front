import Image from "next/image"
import { signIn } from 'next-auth/react'

const GoogleSignInButton = ({tiny}: {tiny: boolean}) => {
    if(tiny) {
        return (
            <button className='p-2 flex items-center bg-white rounded-full overflow-hidden' onClick={() => signIn('google')}>
                <Image src='/assets/images/Google__G__Logo.svg' width={30} height={30}/>
            </button>
        )
    }

    return (
        <button className='bg-white cursor-pointer px-6 py-4 flex items-center border border-1 border-slate-200 rounded-md' onClick={() => signIn('google')}>
            <Image src='/assets/images/Google__G__Logo.svg' width={30} height={30}/>
            <div className="ml-4 text-blue-500 font-bold text-lg">Sign In with Google</div>
        </button>
    )

}

export default GoogleSignInButton;
