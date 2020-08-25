import React from 'react';
import './BackButton.css';
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import ease from 'Styles/Transitions.js';

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
          },
          hover: { scale: 1.05 },
          tap: { scale: 0.95 },
        },
        buttonText: {
          enter: { y: 0, opacity: 1 },
          exit: { y: 10, opacity: 0 },
          hover: { scale: 0.90 },
        },
        buttonIcon: {
          enter: { y: 0, opacity: 1, rotate: 90 },
          exit: { y: 10, opacity: 0 },
          hover: { y: 0, opacity: 1, x: -5 },
        },
        noMotion: {
          enter: {  },
          exit: {  }
        },
    };

function BackButton( {addClass, link, animation} ) {
  let history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <Link to={link}>
      <motion.div onClick={handleClick} whileHover="hover" whileTap="tap" variants={variants.buttonContainer} className={"backbutton " + addClass}>

          <motion.img variants={variants.buttonIcon} className="backbutton-icon"></motion.img>

    <motion.h1 variants={variants.buttonText} className="backbutton-text">Zurück</motion.h1>

      </motion.div>
    </Link>
  );
}
export default BackButton;
