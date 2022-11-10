import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
    <div id='hero' className='mb-4'>
        <div id="hero-background" ></div>
        <div className="container mx-auto flex flex-col md:flex-row items-center relative">
            <div className="grow text-white font-light">
                <div className="text-5xl">
                    Invertir es fácil cuando puedes comparar
                </div>
                <div className="text-xl my-4">
                   Descubre y analiza las mejores opciones para invertir en México
                </div>
            <Button primary xl shadow>Haz la prueba Gratis</Button>
            </div>
            <div className='grow-0 w-1/2'>
                <img src="/assets/images/feature.svg" alt="" />
            </div>
        </div>
        
    </div>
);

export { Hero };
