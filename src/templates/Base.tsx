import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { useRouter } from 'next/router';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';
import { Section } from '../layout/Section'
import { Button } from '../button/Button'

import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
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

const Base = () => {
    const router = useRouter()
 return ( <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
  <NavbarTwoColumns logo={<Logo xl white/>}>
    <div>Inicio</div>
    <div>Como Funciona</div>
    <div>Por que Vali?</div>
     <Button transparent>Iniciar Sesion</Button>
  </NavbarTwoColumns>
    <Hero />
    <Section>
        <div className="text-3xl text-center text-gray-900 font-semibold mb-8">
            Tenemos las mejores opciones de inversión 
            <div className="text-gray-600">y seguimos añadiendo más opciones</div>
        </div>
        <div className="flex items-center justify-between flex-wrap">
        {imgs.map(( src: string ) => (
                    <img style={{height: '3em'}} className='m-8 object-contain' src={`${router.basePath}/logos/${src}`} alt="" />
        ))}
        </div>
        
    </Section>
    <VerticalFeatures />
    <Footer />
  </div>
)
}

export { Base };
