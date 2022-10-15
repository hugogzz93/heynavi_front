import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
    <>
      <Background color="#0099ff">
        <Section yPadding="py-6">
          <NavbarTwoColumns logo={<Logo xl white/>}>
            <div></div>
          </NavbarTwoColumns>
        </Section>

        <Section yPadding="pt-20 pb-32">
          <HeroOneButton
            title={
              <>
                <span className='font-light'>
                    {'Invertir es\n'}
                </span>
                <span className="text-white">
                  Fácil cuando puedes comparar
                </span>
              </>
            }
            description="La base de datos que tiene todas las opciones para invertir en México"
            button={
              <Link href="form">
                <a>
                    <button className='cursor-pointer bg-white rounded-md inline-block text-blue-500 font-extrabold text-xl py-4 px-6 hover:bg-blue-500 hover:border-1 hover:border-white hover:text-white transition-all duration-300'>Ingresa de forma gratuita a Navi</button>

                </a>
              </Link>
            }
          />
        </Section>
        <div className="w-full">
            <span className="material-symbols-outlined text-white text-center mx-auto block" style={{fontSize: '8em', opacity: '0.75', display: 'block'}}> expand_more </span>
        </div>
      </Background>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,160L48,160C96,160,192,160,288,176C384,192,480,224,576,240C672,256,768,256,864,224C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" data-darkreader-inline-fill=""></path></svg>
    </>
);

export { Hero };
