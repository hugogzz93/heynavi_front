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


import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { useAuth } from 'lib/useAuth'
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
    const {user, logOut} = useAuth({targetId: "google__signin" })
    console.log("user", user)

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
            onEnter: () => setActiveLink('#hero-link'),
            onEnterBack: () => setActiveLink('#hero-link')
        })


        ScrollTrigger.create({
            trigger: '#como-funciona',
            onEnter: () => setActiveLink('#como-link'),
            onEnterBack: () => setActiveLink('#como-link')
        })


        ScrollTrigger.create({
            trigger: '#porque',
            onEnter: () => setActiveLink('#porque-link'),
            onEnterBack: () => setActiveLink('#porque-link')
        })
    })
 return ( <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />

     <NavbarTwoColumns logo={() => {
          return ( <Logo/>)
     }}

    user={user}
    logOut={logOut}
     links={() => {
         return (
              <div className='flex items-center text-gray-800 font-medium'>
                <div className='nav__link text-md mx-4' id='hero-link' onClick={() => scrollTo(gsap, '#hero')} style={{marginLeft: '10em'}}>Inicio</div>
                <div className='nav__link text-md mx-4' id='como-link' onClick={() => scrollTo(gsap, '#como-funciona')}>¿Como Funciona</div>
                <div className='nav__link text-md mx-4' id='porque-link' onClick={() => scrollTo(gsap, '#porque')}>¿Por que Vali?</div>
              </div>
         )
     }}
  >
  </NavbarTwoColumns>
    <Hero />
    <Section>
        <div className="navtrigger text-3xl text-center text-gray-900 font-semibold mb-8">
            Tenemos las mejores opciones de inversión 
            <div className="text-gray-600">y seguimos añadiendo más opciones</div>
        </div>
        <div className="carousel__wrapper">
            <div className="carousel__body flex flex-nowrap items-center">
                {imgs.map(( src: string ) => (
                            <img key={src} style={{opacity: 0.5, filter: 'grayscale(100%)'}} className='carousel__item h-8 md:h-12 my-3 md:m-8 object-contain' src={`${router.basePath}/logos/${src}`} alt="" />
                ))}
             </div>
        </div>
        
    </Section>

    <section id='como-funciona' className='flex flex-col container mx-auto py-40 md:px-20'>
        <div className="text-3xl text-center font-bold" style={{marginBottom: '5em'}}>¿Como Funciona?</div>
         <div className='flex justify-between flex-col md:flex-row px-10'>
            <ImageCard src='/assets/images/registrate.svg' title='Registrate' body='Crea una cuenta para comenzar a utilizar la plataforma'/>
            <ImageCard src='/assets/images/personaliza.svg' title='Registrate' body='Crea una cuenta para comenzar a utilizar la plataforma'/>
            <ImageCard src='/assets/images/Asesorate.svg' title='Registrate' body='Crea una cuenta para comenzar a utilizar la plataforma'/>
         </div>
     </section>

    <section id='porque' className='border border-1 border-green-500 py-32 flex flex-col overflow-x-visible py-32' style={{backgroundColor: '#5F3FC73A'}}>
        <div className="text-3xl text-center font-bold text-slate-800 mb-12">¿Por qué elegir Vali?</div>
        <div className="flex overflow-x-hidden border border-1 border-red-500 container mx-auto">
            <TestimonialBox src='/assets/images/registrate.svg' title='Nombre de usuario' body='Entre más personas accedan a la base de datos, más nos ayuda a ofrecer herramientas de inversión de valor.' starCount={3}/>
            <TestimonialBox focused={true} src='/assets/images/registrate.svg' title='Nombre de usuario' body='Entre más personas accedan a la base de datos, más nos ayuda a ofrecer herramientas de inversión de valor.' starCount={5}/>
            <TestimonialBox src='/assets/images/registrate.svg' title='Nombre de usuario' body='Entre más personas accedan a la base de datos, más nos ayuda a ofrecer herramientas de inversión de valor.' starCount={5}/>
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

            <Button transparent reverseHover>Haz la prueba Gratis</Button>
             </div>
         </div>


     </section>
    <Footer />
  </div>
)
}

export { Base };
