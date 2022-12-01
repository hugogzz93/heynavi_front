import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
    <div id='hero' className='mb-4'>
        <div id="hero-background" ></div>
        <div className="container mx-auto flex flex-col md:flex-row items-center relative  text-center md:text-left">
            <div className="grow text-white font-light">
                <p className="pt-16 text-4xl md:text-6xl font-medium" >
                    Invertir es fácil cuando <br/> puedes comparar
                </p>
                <div className="text-2xl my-16 md:w-2/3">
                    Descubre y analiza las mejores opciones para invertir en México - <span className='font-bold'>gratis</span>
                </div>
                <Link href='/form' passHref>
                    <button>
                        <Button primary xl shadow>Buscar ahora</Button>
                    </button>
                </Link>
            </div>
            <div className='grow-0 md:w-1/2 pt-8'>
                <img className='hero__img' src="/assets/images/Img01.svg" alt="" />
            </div>
        </div>
        
    </div>
);

export { Hero };
