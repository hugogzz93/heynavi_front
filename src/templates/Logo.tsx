import Image from 'next/image';

import { AppConfig } from '../utils/AppConfig';
// import LogoNavio from '.
// import NavioLogo from '/public/assets/images/logo_navio.png'

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <Image alt="logo" src="/logo_navio.png" width="50px" height="50px" />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
