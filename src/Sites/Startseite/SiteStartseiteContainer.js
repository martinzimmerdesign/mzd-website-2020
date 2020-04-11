import React from 'react';
import LandingPage from './SectionLandingPage/LandingPage';
import Leistungen from './SectionLeistungen/Leistungen';
import Portfolio from './SectionPortfolio/Portfolio';
import Kontakt from './SectionKontakt/Kontakt';
import Footer from 'Components/Footer/Footer.js';
import ScrollToTopOnMount from 'Components/ScrollToTopOnMount.js';
import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/dist/locomotive-scroll.css";

export default class SiteStartseiteContainer extends React.Component {

  componentDidMount() {
      this.scroll = new LocomotiveScroll({
         el: document.querySelector('[data-scroll-container]'),
         smoothMobile: false,
         inertia: 1,
         smooth: true,
         getDirection: false
      });

      this.scroll.destroy()
      setTimeout(() => this.scroll.init(), 100);

  }

  componentDidUpdate(prevProps, prevState) {
    this.scroll.update();
  }

  componentWillUnmount() {
      this.scroll.destroy()
  }


render() {
    return (
      <div data-scroll-container>
          <ScrollToTopOnMount />
          <LandingPage />
          <Leistungen />
          <Portfolio />
          <Kontakt />
          <Footer />
      </div>
    );
  }
}
