import React from 'react';
import './Button.css';
import { Link } from "react-router-dom";
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
          }
        },
        buttonMain: {
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

const Button = ( {name, addClass, link, animation} ) =>
<Link to={link}>
<motion.div variants={animation ? variants.buttonContainer : variants.noMotion} className={"button " + addClass}>
    <motion.h1 variants={animation ? variants.buttonMain : variants.noMotion} className="button-text">{name}</motion.h1>
    <motion.span variants={animation ? variants.buttonBack : variants.noMotion} className="button-panel button-back"></motion.span>
    <motion.span variants={animation ? variants.buttonMain : variants.noMotion} className="button-panel button-front"></motion.span>
</motion.div>
</Link>
export default Button;
