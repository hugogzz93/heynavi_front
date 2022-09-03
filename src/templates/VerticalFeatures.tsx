import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Diversifica tus ahorros"
    description="Desde fondos en Bancos hasta Criptomonedas, Bienes Raices y Bolsa, tenemos la opcion que mas se ajusta a tus necesidades."
  >
    <VerticalFeatureRow
      title="Nuevas Opciones cada dia"
      description="Nuestro equipo filtra y agrega nuevas herramientas de inversion todos los dias para que tu puedas seguir explorando"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
