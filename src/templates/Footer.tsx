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
                <div className="text-sm">Terminos y condiciones</div>
                <div className="text-sm">Aviso de privacidad</div>
            </div>
        </div>

        <div className='mb-8 md:my-0 text-center'>
            <div className="text-white">
                <div className="text-sm">Uso de cookies</div>
                <div className="text-sm">Derechos ARCO</div>
            </div>
        </div>

        <div className='flex items-center'>
            <img className='footer__img' src='/assets/images/instagram.svg'/>
            <img className='footer__img' src='/assets/images/facebook.svg'/>
            <img className='footer__img' src='/assets/images/linkedin.svg'/>
        </div>
    </div>
    </section>
);

export { Footer };
