import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
