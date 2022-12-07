import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
    <section id='footer'>
    <div className="w-full flex flex-col md:flex-row items-center justify-between p-8">
        <Logo textless white/>
        <div className='mt-8 md:my-0 text-center'>
            <div className="text-white">
                <Link href='/terminosycondiciones'>
                    <div className="text-sm cursor-pointer">Términos y condiciones</div>
                </Link>
                <Link href='/avisodeprivacidad' passHref>
                    <div className="text-sm cursor-pointer">Aviso de privacidad</div>
                </Link>
            </div>
        </div>

        <div className='mb-8 md:my-0 text-center'>
            <div className="text-white">
                <Link href='/usodecookies' passHref>
                    <div className="text-sm cursor-pointer">Uso de cookies</div>
                </Link>
                <Link href='/derechosarco'>
                    <div className="text-sm cursor-pointer">Derechos ARCO</div>
                </Link>
            </div>
        </div>

        <div className='flex items-center'>
            <Link href='https://instagram.com/heyvalimx'>
                <img className='footer__img cursor-pointer' style={{transform: 'scale(1.3)'}}src='/assets/images/instagram.svg'/>
            </Link>
            <Link href='https://www.facebook.com/NavioMexico'>
                <img className='footer__img cursor-pointer' src='/assets/images/facebook.svg'/>
            </Link>
            <Link href='https://www.linkedin.com/company/89643118/admin'>
                <img className='footer__img cursor-pointer' src='/assets/images/linkedin.svg'/>
            </Link>
        </div>
    </div>
    </section>
);

export { Footer };
