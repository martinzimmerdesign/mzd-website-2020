import React from 'react';
import { motion } from "framer-motion";
import ease from 'Styles/Transitions.js';
import BlockWrapper from 'Components/CaseStudy/BlockWrapper.js';
import './TextBlock.css';

const variants = {
        blockContainer: {
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
        blockChildren: {
          enter: { y: 0, opacity: 1 },
          exit: { y: 50, opacity: 0 }
    },

  };

const TextBlock = ( {title, paragraph} ) =>
  <BlockWrapper>
    <motion.div variants={variants.blockContainer} className="text-block">
        <motion.h1 variants={variants.blockChildren}>{title}</motion.h1>
        <motion.p variants={variants.blockChildren}>{paragraph}</motion.p>
    </motion.div>
  </BlockWrapper>
export default TextBlock;
