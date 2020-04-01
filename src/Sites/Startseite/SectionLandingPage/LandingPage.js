import React from 'react';
import './LandingPage.css';
import SectionContainer from 'Components/Container/SectionContainer.js';
import { motion } from "framer-motion";
import ease from 'Styles/Transitions.js';

export default class LandingPage extends React.Component {
  render() {

    const variants = {
            buttonContainer: {
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
            landingInfo: {
              enter: { y: 0, opacity: 1 },
              exit: { y: 10, opacity: 0 }
            },
            buttonBack: {
              enter: { y: 0, opacity: 0.25 },
              exit: { y: 10, opacity: 0 }
            },
            noMotion: {
              enter: {  },
              exit: {  }
            },
        };

    return (
        <SectionContainer addClass="landing">
          <div className="landing_content_container">
            <div className="landing_text_container">
              <h1 className="landing_text" id="martin">Martin</h1>
              <h1 className="landing_text" id="zimmer">Zimmer</h1>
              <h1 className="landing_text" id="design">Design</h1>
            </div>
            <img className="landing_logo"></img>
          </div>

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
