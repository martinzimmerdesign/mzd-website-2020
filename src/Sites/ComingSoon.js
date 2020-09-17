import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import Footer from 'Components/Footer/Footer.js';
import SectionContainer from 'Components/Container/SectionContainer.js';
import Button from 'Components/Buttons/Button.js';
import BackButton from "Components/Buttons/BackButton.js";
import ScrollToTopOnMount from 'Components/ScrollToTopOnMount.js';
import BlockWrapper from 'Components/CaseStudy/BlockWrapper.js';
import TitleComp from "Components/TitleComp/TitleComp.js";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const data = {
  title: "Sorry!",
  text: "Diese Seite ist aktuell noch in Arbeit.",
};

export default class ComingSoon extends React.Component {

  componentDidMount() {
      this.scroll = new LocomotiveScroll({
         el: document.querySelector('[data-scroll-container]'),
         smoothMobile: false,
         inertia: 1,
         smooth: true,
         getDirection: false
      });
  }

  componentWillUnmount() {
      this.scroll.destroy()
  }

  render() {
    return (
      <div style={{wordBreak: "break-word"}}>
        <BlockWrapper>
        <BackButton animation="true" link="/" />
        </BlockWrapper>
      <div data-scroll-container style={{display: "flex", flexDirection: "column"}}>
        <ScrollToTopOnMount />
      <SectionContainer>
      <div style={{minHeight: "50vh"}}>
        <div className="center_div_vertically">
        <TitleComp title={data.title} text={data.text} />
        </div>
      </div>
    </SectionContainer>
      <Footer />
      </div>
      </div>
    );
  }
}
