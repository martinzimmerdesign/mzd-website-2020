import React from 'react';
import { motion } from "framer-motion";
import './ImageBlock.css';
import BlockWrapper from 'Components/CaseStudy/BlockWrapper.js';


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

  const ImageBlock = ({ data }) => (
    <BlockWrapper>
  <motion.div variants={variants.blockContainer} className="image-block">
    <motion.img variants={variants.blockChildren} className="site_image" alt={data.alt} src={data.source}></motion.img>
    <motion.h5 variants={variants.blockChildren} className="figure_subtitle">{data.figure_subtitle}</motion.h5>
  </motion.div>
</BlockWrapper>
);
export default ImageBlock;
