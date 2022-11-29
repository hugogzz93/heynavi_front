import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
  white?: boolean;
  textless?: boolean;
};

const Logo = (props: ILogoProps) => {

    let logo = 'Vali_01.svg'
    if(props.textless) {
        if(props.white) {
            logo = 'Vali_08.svg'
        } else {
            logo = 'Vali_07.svg'
        }
    }
    logo = '/logos/' + logo

  return (
      <Image alt="logo" src={logo} width="100px" height='50px'/>
  );
};

export { Logo };
