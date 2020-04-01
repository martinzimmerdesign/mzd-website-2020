import React from 'react';
import LandingPage from './SectionLandingPage/LandingPage';
import Leistungen from './SectionLeistungen/Leistungen';
import Portfolio from './SectionPortfolio/Portfolio';
import Kontakt from './SectionKontakt/Kontakt';
import Footer from 'Components/Footer/Footer.js';


export default class SiteStartseiteContainer extends React.Component {
  render() {
    return (
      <div>
        <LandingPage />
        <Leistungen />
        <Portfolio />
        <Kontakt />
        <Footer />
      </div>
    );
  }
}
