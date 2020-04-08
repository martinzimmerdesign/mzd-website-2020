import React from 'react';
import { motion } from "framer-motion";
import './LighthouseBlock.css';
import Swiper from 'react-id-swiper';
import BlockWrapper from 'Components/CaseStudy/BlockWrapper.js';
import 'swiper/css/swiper.css';

const variants = {
        blockContainer: {
          enter: {
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.1,
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

  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    spaceBetween: 30,
    freemode: true,
// Responsive breakpoints
breakpoints: {
  // when window width is >= 320px
  0: {
    slidesPerView: 1,
  },
  // when window width is >= 480px
  630: {
    slidesPerView: 4,
  },
  // when window width is >= 640px
  1320: {
    slidesPerView: 4,
    spaceBetween: 0,
    watchOverflow: true,
    setWrapperSize: true,
  }
}
  }

  const LighthouseBlock = ({ data }) => (
    <BlockWrapper>
  <motion.div variants={variants.blockContainer} className="lighthouse-block">
    <Swiper {...params}>
      {data.stats.map(({ score, category }, i) => (
        <motion.div variants={variants.blockChildren} className="swiper-slide">
        <motion.div variants={variants.blockContainer} className="circle_wrapper">
          <motion.div variants={variants.blockChildren} className="circle">
            <motion.h2>{score}</motion.h2>
          </motion.div>
          <motion.h2 variants={variants.blockChildren}>{category}</motion.h2>
        </motion.div>
      </motion.div>
      ))}
        </Swiper>
    <motion.h5 variants={variants.blockChildren} className="figure_subtitle">{data.figure_subtitle}</motion.h5>
  </motion.div>
</BlockWrapper>
);
export default LighthouseBlock;
