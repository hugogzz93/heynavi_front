import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Diversifica tus ahorros"
    description="Desde fondos en Bancos hasta Criptomonedas, Bienes Raíces y Bolsa, tenemos la opción que más se ajusta a tus necesidades."
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
    <VerticalFeatureRow
      title="Comparte"
      description="Entre más personas accedan a la base de datos, más nos ayuda a ofrecer herramientas de inversión de valor"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
