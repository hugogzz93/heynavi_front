import { ReactNode, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { useAuth } from 'lib/useAuth'


type INavbarProps = {
  logo: ReactElement;
  links: ReactElement;
  children: ReactNode;
  user: any,
  logOut: () => unknown;
  active?: boolean;
};

const NavbarTwoColumns = (props: INavbarProps) => {

    return (
        <>
            <div id='nav' className={` hidden md:block w-full fixed top-0 left-1/2 ${props.active ? 'active' : ''}`}>
                <div className="container mx-auto">
                  <div className="flex flex-wrap justify-between items-center py-2">
                    {props.logo()}
                    {props.links()}

                    <nav>
                      <ul className="navbar flex items-center font-medium text-xl text-gray-800">
                        {props.children}
                      </ul>
                    </nav>


        {props.user && <div id='g_account' className='g_id_signout flex items-center cursor-pointer' data-tip='Log Out' onClick={props.user ? props.logOut : () => {}}>
                        <div className="rounded-full overflow-hidden w-12 border border-1 border-white mr-4">
                            <picture>
                                <img src={props.user?.picture} alt=""/>
                            </picture>
                        </div>
                        <div className="text-xl text-slate-900 font-bold">{props.user?.name}</div>
                        {props.user && <ReactTooltip/>}
        
                    </div>}

        {!props.user && <div id='google__signin'></div>}

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
                    {props.logo()}

                    <span className="material-symbols-outlined text-4xl text-slate-900 font-bold"> menu </span>

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
