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
     <div className="fixed bottom-5 right-5 bg-white rounded-full p-4 " style={{boxShadow: '0 3px 6px #000a', zIndex: '3'}}>
        <a className='text-blue-500 cursor-pointer' href="https://api.whatsapp.com/send/?phone=5218132647979&text=Hola%2C+me+podr%C3%ADan+apoyar+a+resolver+mis+dudas%3F&type=phone_number&app_absent=0">
            <svg id='whatsapp-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{height: '3em' , width: '3em'}}>
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
         </a>
     </div>
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
                <TestimonialBox src='/assets/images/registrate.svg' title='Jimena G.' body='Excelente plataforma! Me ahorraron la necesidad y el tiempo de hacer una búsqueda por mi cuenta entre Google y amigos para ver dónde invertir mis ahorros. ' starCount={5}/>
                <TestimonialBox src='/assets/images/registrate.svg' title='Luis P.' body='Muy buena experiencia en Vali, me gusta que hay de todo tipo de opciones de inversión y que puedo consultar la información sin necesidad de hablar con nadie.' starCount={5}/>
                <TestimonialBox src='/assets/images/registrate.svg' title='Maria Sara G.' body='Sin duda recomiendo Vali para las personas que no están seguros dónde invertir su dinero. Te vas a ahorrar  tiempo en estar comparando opciones de inversión por fuera.' starCount={5}/>
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
