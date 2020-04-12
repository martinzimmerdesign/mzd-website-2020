import React from 'react';
import './LandingPage.css';
import SectionContainer from 'Components/Container/SectionContainer.js';
import { motion } from "framer-motion";
import ease from 'Styles/Transitions.js';
import Lottie from 'react-lottie';
import designJson from './img/design.json';
import codeJson from './img/code.json';
import shape1 from './img/blob-shape.svg';

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
            container: {
              enter: {
                transition: {
                  when: "beforeChildren",
                  staggerChildren: 0.06,
                }
              },
              exit: {
                transition: {
                }
              }
            },
            lottie: {
              enter: { x: 0, opacity: 1},
              exit: { x: "50vw", opacity: 0 }
            },
            titleText: {
              enter: { y: 0, opacity: 1 },
              exit: { y: 40, opacity: 0 }
            },
            subtitleText: {
              enter: { y: 0, opacity: 1 },
              exit: { y: 40, opacity: 0 }
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

    return (
        <SectionContainer addClass="landing">
          <div className="landing_content_container">

            <motion.div variants={variants.container} className="landing_text_container">
              <motion.h1 variants={variants.titleText} className="landing_header">Design und Entwicklung.</motion.h1>
              <motion.h3 variants={variants.subtitleText} className="landing_text">Hi, mein Name ist Martin Zimmer.</motion.h3>
            </motion.div>

            <motion.div variants={variants.container} className="lottie_container">
              <motion.div onDragEnd={() => this.changeZIndex()} style={{zIndex: this.state.zIndexValue ? "100" : "400"}} drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} variants={variants.lottie} className="lottie_wrapper" id="lottie_design">
              <Lottie options={designOptions} />
              </motion.div>
              <motion.div onDragEnd={() => this.changeZIndex()} style={{zIndex: this.state.zIndexValue ? "400" : "100"}} drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} variants={variants.lottie} className="lottie_wrapper" id="lottie_code">
              <Lottie options={codeOptions} />
              </motion.div>
            </motion.div>

          </div>

          <img className="landing_logo"></img>
          <img className="landing_shape" src={shape1}></img>
          <div className="landing_info">
                <div>
                    <h3 className="landing_info_text">Scroll runter</h3>
                    <img className="landing_info_icon"></img>
                </div>
          </div>

          </SectionContainer>
    );
  }
}
