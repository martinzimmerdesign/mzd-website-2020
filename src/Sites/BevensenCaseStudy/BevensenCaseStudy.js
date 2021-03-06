import React from 'react';
import { Link } from "react-router-dom";
import TitleComp from "Components/TitleComp/TitleComp.js";
import SectionContainer from 'Components/Container/SectionContainer.js';
import bevensenData from './BevensenCaseStudyData.js';
import 'Sites/CaseStudy.css';
import './BevensenCaseStudy.css';
import BackButton from "Components/Buttons/BackButton.js";
import Footer from 'Components/Footer/Footer.js';
import TextBlock from "Components/CaseStudy/TextBlock/TextBlock.js";
import HeaderBlock from "Components/CaseStudy/HeaderBlock/HeaderBlock.js";
import LighthouseBlock from "Components/CaseStudy/LighthouseBlock/LighthouseBlock.js";
import ImageBlock from "Components/CaseStudy/ImageBlock/ImageBlock.js";
import BlockWrapper from 'Components/CaseStudy/BlockWrapper.js';
import { motion } from "framer-motion";
import ReactDOM from "react-dom";
import ScrollToTopOnMount from 'Components/ScrollToTopOnMount.js';
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default class BevensenCaseStudy extends React.Component {
  componentDidMount() {
      this.scroll = new LocomotiveScroll({
         el: document.querySelector('[data-scroll-container]'),
         smoothMobile: false,
         inertia: 1,
         smooth: true,
         getDirection: false
      });
      this.scroll.destroy()
      setTimeout(() => this.scroll.init(), 500);
  }

  componentDidUpdate(prevProps, prevState) {
    this.scroll.update();
  }

  componentWillUnmount() {
      this.scroll.destroy()
  }

  refreshLS() {
    this.scroll.destroy()
    setTimeout(() => this.scroll.init(), 500);
    console.log('refreshLS');
  }

  render() {

    const variants = {
            blockContainer: {
              enter: {
                transition: {
                  when: "beforeChildren",
                  staggerChildren: 0.1,
                }
              },
              exit: {
                transition: {
                }
              }
            },
            blockChildren: {
              enter: { y: 0, opacity: 1 },
              exit: { y: 50, opacity: 0 }
        },

      };

    return (
      <div>
        <BlockWrapper>
        <BackButton animation="true" link="/" />
        </BlockWrapper>
      <div data-scroll-container>
        <ScrollToTopOnMount />
        <SectionContainer addClass="case-study top-section">

          <HeaderBlock title={bevensenData.title} subtitle={bevensenData.subtitle} image={bevensenData.header_image} />

          <TextBlock title="Übersicht" paragraph={bevensenData.overview} />

          <ImageBlock onLoad={() => this.refreshLS()} data={bevensenData.image} />

          <TextBlock title="Herausforderungen" paragraph={bevensenData.challenges} />

          <BlockWrapper>
          <motion.div variants={variants.blockContainer} className="keywords-block">
            <motion.h2 variants={variants.blockChildren}>INTUITIV</motion.h2>
            <motion.h2 variants={variants.blockChildren}>SCHNELL</motion.h2>
            <motion.h2 variants={variants.blockChildren}>SCHLICHT</motion.h2>
            <motion.h5 variants={variants.blockChildren} className="figure_subtitle">Die drei Aspekte beim erstellen der Webseite</motion.h5>
          </motion.div>
          </BlockWrapper>

          <TextBlock title="Weg zum Ziel" paragraph={bevensenData.weg_zum_ziel} />

          <LighthouseBlock data={bevensenData.lighthouse} />

          <TextBlock title="Das Ergebnis" paragraph={bevensenData.result} />

        </SectionContainer>
        <Footer />
      </div>

          </div>
    );
  }
}
