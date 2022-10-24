import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Diversifica tus inversiones"
    description="En Navi podrás comparar desde fondos en Bancos hasta Criptomonedas, Bienes Raíces y Bolsa, para que elijas la opción que más te conviene."
  >
    <VerticalFeatureRow
      title="Nuevas opciones cada día"
      description="Nuestro equipo filtra y agrega nuevas herramientas de inversión todos los días para que tú puedas seguir explorando"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Invierte seguro"
      description="Las opciones que mostramos son filtradas por nuestro equipo de analistas"
      image="/assets/images/feature2.svg"
      imageAlt="diversifica tus ahorros"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
