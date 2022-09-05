import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <div></div>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Invertir es\n'}
            <span className="text-primary-500">
              Facil cuando puedes comparar
            </span>
          </>
        }
        description="La base de datos que tiene todas las opciones para invertir en Mexico"
        button={
          <Link href="form">
            <a>
              <Button xl>Ingresa de forma gratuita a Navio</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
