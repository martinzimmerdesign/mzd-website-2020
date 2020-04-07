import React from 'react';
import { motion } from "framer-motion";
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
          exit: { y: 10, opacity: 0 }
    },

  };

const TextBlock = ( {title, paragraph} ) =>
  <motion.div className="text-block">
      <motion.h1>{title}</motion.h1>
      <motion.p>{paragraph}</motion.p>
  </motion.div>
export default TextBlock;
