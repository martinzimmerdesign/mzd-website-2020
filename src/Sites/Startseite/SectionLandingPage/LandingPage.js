import React from 'react';
import './LandingPage.css';
import SectionContainer from 'Components/Container/SectionContainer.js';
import { motion } from "framer-motion";
import ease from 'Styles/Transitions.js';
import Lottie from 'react-lottie';
import designJson from './img/design.json';
import codeJson from './img/code.json';
import scrollJson from './img/scroll.json';
import shape1 from './img/blob-shape.svg';

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty('--vh', `${vh}px`);


export default class LandingPage extends React.Component {
  constructor() {
     super();
     this.state = {
        zIndexValue: false,
     };
  }

    changeZIndex = () => {
      this.setState(prevState => ({
       zIndexValue: !prevState.zIndexValue
      }));
    };

  render() {



    const variants = {
            textContainer: {
              enter: {
                transition: {
                  when: "beforeChildren",
                  staggerChildren: 0.6,
                  delayChildren: 0.5,
                }
              },
            },
            lottieContainer: {
              enter: {
                transition: {
                  when: "beforeChildren",
                  staggerChildren: 0.6,
                  delayChildren: 1,
                }
              },
            },
            lottie: {
              enter: { x: 0, opacity: 1},
              exit: { x: "15vw", opacity: 0 }
            },
            text: {
              enter: { y: 0, opacity: 1 },
              exit: { y: 50, opacity: 0 }
            },
            absElements: {
              enter: { opacity: 1},
              exit: { opacity: 0 }
            },
        };

        const designOptions = {
              loop: true,
              autoplay: true,
              animationData: designJson,
            };
        const codeOptions = {
              loop: true,
              autoplay: true,
              animationData: codeJson,
            };
        const scrollIconOptions = {
              loop: true,
              autoplay: true,
              animationData: scrollJson,
            };

    return (
        <SectionContainer addClass="landing">
          <div className="landing_content_container">

            <motion.div variants={variants.textContainer} className="landing_text_container">
              <motion.h1 variants={variants.text} className="landing_header">Design und Entwicklung.</motion.h1>
              <motion.h3 variants={variants.text} className="landing_text">Hi, mein Name ist Martin Zimmer.</motion.h3>
            </motion.div>

            <motion.div variants={variants.lottieContainer} className="lottie_container">
              <motion.div onDragEnd={() => this.changeZIndex()} style={{zIndex: this.state.zIndexValue ? "100" : "400"}} drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} variants={variants.lottie} className="lottie_wrapper" id="lottie_design">
              <Lottie options={designOptions} />
              </motion.div>
              <motion.div onDragEnd={() => this.changeZIndex()} style={{zIndex: this.state.zIndexValue ? "400" : "100"}} drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} variants={variants.lottie} className="lottie_wrapper" id="lottie_code">
              <Lottie options={codeOptions} />
              </motion.div>
            </motion.div>

          </div>
<img className="landing_shape" src={shape1}></img>
          <motion.div variants={variants.lottieContainer}>
            <motion.img variants={variants.absElements} className="landing_logo"></motion.img>

            <motion.div variants={variants.absElements} className="landing_info">
                      <div className="landing_info_icon">
                      <Lottie options={scrollIconOptions} />
                    </div>
            </motion.div>
          </motion.div>
          </SectionContainer>
    );
  }
}
