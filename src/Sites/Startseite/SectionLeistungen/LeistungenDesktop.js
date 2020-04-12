import React, { useState, useRef } from 'react';
import './LeistungenElement.css';
import Button from 'Components/Buttons/Button.js';
import LeistungenIcon from './LeistungenIcon.js';
import { motion, AnimatePresence } from "framer-motion";
import ease from 'Styles/Transitions.js';
import leistungenData from './LeistungenData.js';

export default class LeistungenDesktop extends React.Component {
  constructor() {
     super();
     this.state = {
        id: leistungenData[0].id,
     };
  }

  changeContent = (id) => {
     this.setState({ id: leistungenData[id].id });
  };

  render() {

    const variants = {
            iconContainer: {
              enter: {
                transition: {
                  staggerChildren: 0.06,
                }
              },
              exit: {
                transition: {
                }
              }
            },
            line: {
              enter: { y: 0, opacity: 1, width: "150vw", transition: {
                delay: 1,
              } },
              exit: { y: 0, opacity: 0, width: "0vw" }
            },
            contentContainer: {
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  when: "beforeChildren",
                  staggerChildren: 0.06,
                  delay: 0.6,
                }
              },
              exit: {
                y: 20,
                opacity: 0,
                transition: {
                }
              }
            },
            text: {
              enter: { y: 0, opacity: 1 },
              exit: { y: 20, opacity: 0 }
            },
        };
        const titles = leistungenData.map(item => (<>
          <motion.h1 key={item.id} className="leistung_title">{item.name}</motion.h1>
            <motion.p className="leistung_text">{item.text}</motion.p>
            <Button animation={false} name="Beispiel anzeigen" addClass="leistungen_button_position" link={item.link} />
         </>));

    return (
      <div>
          <motion.div variants={variants.iconContainer} className="image_wrapper">
            <motion.div variants={variants.line} className="leistung_line"></motion.div>
                  {leistungenData.map(item => (
                    <LeistungenIcon
                      key={item.id} image={item.image} onClick={() => this.changeContent(item.id)}
                      /> ))}
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} variants={variants.contentContainer} className="leistung">



            <AnimatePresence exitBeforeEnter initial={true}>
                    <motion.div
                      key={this.state.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y:0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      {titles[this.state.id]}
                    </motion.div>
                  </AnimatePresence>

              <div className="gradient_leistungen"></div>
         </motion.div>

      </div>
    );
  }
}
