import { ReactNode, useEffect } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactElement;
  links: ReactElement;
  children: ReactNode;
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
