import Link from 'next/link'

import { Button } from '../button/Button'
import { CTABanner } from '../cta/CTABanner'
import { Section } from '../layout/Section'

// const Banner = () => (
//   <Section>
//     <CTABanner
//       title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
//       subtitle="Start your Free Trial."
//       button={
//             <Link href="https://creativedesignsguru.com/category/nextjs/">
//               <a>
//                 <Button>Get Started</Button>
//               </a>
//             </Link>
//           }
//     />
//   </Section>

// );

const Banner = () => (
  <div className="flex flex-col items-center bg-blue-500 text-white" style={{padding: '10em 3em'}}>
    <div className="text-4xl mb-4 font-bold">Totalmente gratis</div>
    <div className="text-lg">Ya puedes utilizar nuestras herramientas para ver cual es tu mejor opcion</div>
    <Link href="form">
        <a>
            <button className='cursor-pointer bg-white rounded-md inline-block text-blue-500 font-extrabold text-xl py-4 px-6 hover:bg-blue-500 hover:border-1 hover:border-white hover:text-white transition-all duration-300'>Ingresa de forma gratuita a Navi</button>
        </a>
    </Link>
  </div>
);

export { Banner };
