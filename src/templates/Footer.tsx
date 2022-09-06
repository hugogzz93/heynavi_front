import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="#0099ff">
    <Section>
      <CenteredFooter
        logo={<Logo textless white/>}
        iconList={
            <div></div>
        }
      >
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
