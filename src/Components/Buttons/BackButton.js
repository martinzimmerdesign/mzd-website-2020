import React from 'react';
import './BackButton.css';
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

const BackButton = ( {addClass, link, animation} ) =>
<Link to={link}>
  <div className={"backbutton " + addClass}>

      <img  className="backbutton-icon"></img>

<h1 className="backbutton-text">Zurück</h1>

  </div>
</Link>
export default BackButton;
