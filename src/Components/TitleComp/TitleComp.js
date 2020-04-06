import React from 'react';
import './TitleComp.css';
import { motion } from "framer-motion";
import ease from 'Styles/Transitions.js';

const variants = {
        container: {
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
        title: {
          enter: { y: 0, opacity: 1 },
          exit: { y: 100, opacity: 0 }
        },
        test: {
          enter: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                type: "spring",
                damping: 16,
                stiffness: 200,
            },
          }),
          exit: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 16,
                stiffness: 200,
            },
          }
        },
        line: {
          enter: { y: 0, opacity: 1, width: "100%" },
          exit: { y: 0, opacity: 1, width: "0%" }
        },
        text: {
          enter: { x: 0, opacity: 1, scale: 1 },
          exit: { x: -100, opacity: 0, scale: 0.5 }
        },
    };

const TitleComp = ( data ) =>
  <motion.div variants={variants.container} className="title_comp_container">
    {(Array.from(data.title)).map((item, i) => (
  <motion.li className="title_comp_title title_anim"
    custom={i}
    variants={variants.test}
  >{item}</motion.li>
))}
    {/* <motion.h1 variants={variants.title} className="title_comp_title">{data.title}</motion.h1> */}
    <motion.div variants={variants.line} className="title_comp_line"></motion.div>
    <motion.p variants={variants.text} className="title_comp_text">{data.text}</motion.p>
  </motion.div>
export default TitleComp;
