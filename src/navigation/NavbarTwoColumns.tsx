import Link from 'next/link';
import { ReactNode, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { useSession, signIn, signOut } from 'next-auth/react'
import GoogleSignInButton from 'components/GoogleSignInButton'


type INavbarProps = {
  logo: ReactElement;
  links: ReactElement;
  children: ReactNode;
  active?: boolean;
};

const NavbarTwoColumns = (props: INavbarProps) => {
    const { data: session } = useSession();

    return (
        <>
            <div id='nav' className={` hidden md:block w-full fixed top-0 left-1/2 ${props.active ? 'active' : ''}`}>
                <div className="container mx-auto">
                  <div className="flex flex-wrap justify-between items-center py-2">
                    <Link href='/' passHref>
                        <div>
                            {props.logo()}
                        </div>
                    </Link>
                    {props.links()}

                    <nav>
                      <ul className="navbar flex items-center font-medium text-xl text-gray-800">
                        {props.children}
                      </ul>
                    </nav>


        {session?.user && <div id='g_account' className='g_id_signout flex items-center cursor-pointer' data-tip='Log Out' onClick={signOut}>
                        <div className="rounded-full overflow-hidden w-14 border border-purple-500 mr-4 " style={{borderWidth: '4px'}}>
                            <div className="rounded-full border border-white overflow-hidden" style={{borderWidth: '2px'}}>
                                    <picture>
                                        <img src={session.user.image} alt=""/>
                                    </picture>
                            </div>
                        </div>
                        <div className="text-xl text-slate-900 font-bold">{props.user?.name}</div>
                        <ReactTooltip/>
                    </div>}

        {!session?.user && (
              <GoogleSignInButton tiny/>
        )}

                    <style jsx>
                      {`
                        .navbar :global(li:not(:first-child)) {
                          @apply mt-0;
                        }

                        .navbar :global(li:not(:last-child)) {
                          @apply mr-5;
                        }
                      `}
                    </style>
                  </div>
                </div>
            </div>

            <div id='nav-mobile' className={` md:hidden w-full fixed top-0 px-6 ${props.active ? 'active' : ''}`}>
                <div className="container mx-auto">
                  <div className="flex flex-wrap justify-between items-center py-2">
                    <Link href='/' passHref>
                        <div>
                            {props.logo()}
                        </div>
                    </Link>

        {session?.user && <div id='g_account' className='g_id_signout flex items-center cursor-pointer' data-tip='Log Out' onClick={signOut}>
                        <div className="rounded-full overflow-hidden w-14 border border-purple-500 mr-4 " style={{borderWidth: '4px'}}>
                            <div className="rounded-full border border-white overflow-hidden" style={{borderWidth: '2px'}}>
                                    <picture>
                                        <img src={session.user.image} alt=""/>
                                    </picture>
                            </div>
                        </div>
                        <div className="text-xl text-slate-900 font-bold">{props.user?.name}</div>
                        <ReactTooltip/>
                    </div>}

        {!session?.user && (
              <GoogleSignInButton tiny/>
        )}

                    <style jsx>
                      {`
                        .navbar :global(li:not(:first-child)) {
                          @apply mt-0;
                        }

                        .navbar :global(li:not(:last-child)) {
                          @apply mr-5;
                        }
                      `}
                    </style>
                  </div>
                </div>
            </div>
        </>
    )
};

export { NavbarTwoColumns };
