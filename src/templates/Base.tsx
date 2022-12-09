import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { useRouter } from 'next/router';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Section } from '../layout/Section'
import { Button } from '../button/Button'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Link from 'next/link';


import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { ImageCard } from '../components/ImageCard'
import { TestimonialBox } from '../components/TestimonialBox'
import { Logo } from './Logo';
import { useEffect } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

const imgs = [
'banorte.svg',
'Briq.svg',
'CETESDIRECTO.png',
'GBM+.png',
'Hey_Banco.svg',
'hsbc.svg',
'Logo_de_Actinver.svg',
'Logo_de_Bitso.svg.png',
'santander.svg',
'supertasas.png'

]

const scrollTo = (gsap: any, scrollTo: string) => {
    // gsap.registerPlugin(ScrollTrigger);
    gsap.to(window, {duration: 1, scrollTo});

}

const setActiveLink = (link: string) => {
    document.querySelectorAll('.nav__link.active').forEach(e => e?.classList?.remove('active'))
    document.querySelector(link)?.classList.add('active')
}

const setActiveNavbar = (active: boolean) => {
    if(active) {
        document.querySelector('#nav')?.classList.add('active')
        document.querySelector('#nav-mobile')?.classList.add('active')
    } else {
        document.querySelector('#nav')?.classList.remove('active')
        document.querySelector('#nav-mobile')?.classList.remove('active')
    }
}

const Base = () => {
    const router = useRouter()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        ScrollTrigger.create({
            trigger: '.navtrigger',
            onEnter: () => setActiveNavbar(true),
            onLeaveBack: () => setActiveNavbar(false)
        })


        ScrollTrigger.create({
            trigger: '.navtrigger',
            onEnter: () => document.querySelector('#nav')?.classList.add('active'),
            onLeaveBack: () => document.querySelector('#nav')?.classList.remove('active'),
        })


        ScrollTrigger.create({
            trigger: '#hero',
            start: 'top center',
            onEnter: () => setActiveLink('#hero-link'),
            onEnterBack: () => setActiveLink('#hero-link')
        })


        ScrollTrigger.create({
            trigger: '#como-funciona',
            start: 'top center',
            onEnter: () => setActiveLink('#como-link'),
            onEnterBack: () => setActiveLink('#como-link')
        })


        ScrollTrigger.create({
            trigger: '#porque',
            start: 'top center',
            onEnter: () => setActiveLink('#porque-link'),
            onEnterBack: () => setActiveLink('#porque-link')
        })

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        }

    })
 return ( <div className="antialiased text-gray-600">
    <Meta title={'Vali - El lugar para encontrar tu próxima inversión'} description={AppConfig.description} />

     <NavbarTwoColumns logo={() => {
          return ( <Logo/>)
     }}

     links={() => {
         return (
              <div className='flex items-center text-gray-800 font-medium'>
                <div className='nav__link text-md mx-4' id='hero-link' onClick={() => scrollTo(gsap, '#hero')} style={{marginLeft: '10em'}}>Inicio</div>
                <div className='nav__link text-md mx-4' id='como-link' onClick={() => scrollTo(gsap, '#como-funciona')}>¿Cómo funciona?</div>
                <div className='nav__link text-md mx-4' id='porque-link' onClick={() => scrollTo(gsap, '#porque')}>¿Por qué Vali?</div>
              </div>
         )
     }}
  >
  </NavbarTwoColumns>
    <Hero />
     <div className='max-w-screen mx-auto'>
        <div className="slider">
            <div className="slider-track items-center">
                {imgs.map(( src: string ) => (
                            <img key={src} style={{opacity: 0.5, filter: 'grayscale(100%)'}} className='slide h-8 md:h-12 object-contain' src={`${router.basePath}/logos/${src}`} alt="" />
                ))}
             </div>
        </div>
     </div>
        

    <section id='como-funciona' className='flex flex-col container mx-auto py-40 md:px-20'>
        <div className="text-3xl text-center font-bold" style={{marginBottom: '2em'}}>¿Cómo funciona?</div>
         <div className='flex justify-between flex-col md:flex-row px-10'>
            <ImageCard src='/assets/images/registrate.svg' title='Elegimos las mejores opciones de inversión' body='Vali filtra las mejores opciones de inversión del mercado'/>
            <ImageCard src='/assets/images/personaliza.svg' title='Explora y compara - gratis' body='Compara más de 50 opciones de inversión en pocos clicks y sin costo'/>
            <ImageCard src='/assets/images/Asesorate.svg' title='Elige sin presión' body='Cuando te sientas cómod@, te ayudamos a dar el paso hacía tu inversión'/>
         </div>
     </section>

    <section id='porque' className='py-32 flex flex-col overflow-x-visible py-32' style={{backgroundColor: '#5F3FC73A'}}>
        <div className="text-3xl text-center font-bold text-slate-800 mb-12">¿Por qué usar Vali?</div>
        <div className="overflow-x-hidden md:overflow-x-visible">
            <div className="carousel__body md:static flex flex-nowrap items-center md:justify-center" style={{scrollSnapType: 'x mandatory'}}>
                <TestimonialBox src='/assets/images/registrate.svg' title='Nombre de usuario' body='Entre más personas accedan a la base de datos, más nos ayuda a ofrecer herramientas de inversión de valor.' starCount={3}/>
                <TestimonialBox src='/assets/images/registrate.svg' title='Nombre de usuario' body='Entre más personas accedan a la base de datos, más nos ayuda a ofrecer herramientas de inversión de valor.' starCount={5}/>
                <TestimonialBox src='/assets/images/registrate.svg' title='Nombre de usuario' body='Entre más personas accedan a la base de datos, más nos ayuda a ofrecer herramientas de inversión de valor.' starCount={5}/>
             </div>
        </div>
    </section>

     <section style={{padding: '10em 5em'}}>
        <div className="container mx-auto flex flex-col md:flex-row items-center relative" >
            <div className='grow-0 w-1/2'>
                <img src="/assets/images/Img02.svg" alt="" />
            </div>
            <div className="grow flex flex-col items-center">
            <div className="text-purple-500 text-5xl font-bold md:w-2/3 text-center mb-8">
                Tenemos las mejores opciones de inversión.
            </div>

            <Link href='/form' passHref>
                 <button>
                   <Button transparent reverseHover>Buscar ahora</Button>
                 </button>
             </Link>
             </div>
         </div>


     </section>
    <Footer />
  </div>
)
}

export { Base };
