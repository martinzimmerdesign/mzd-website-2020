import React from 'react';
import { motion } from "framer-motion";
import './LighthouseBlock.css';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

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
  <div className="lighthouse-block">
    <Swiper {...params}>
      {data.stats.map(({ score, category }, i) => (
        <div class="swiper-slide">
        <div className="circle_wrapper">
          <div className="circle">
            <h2>{score}</h2>
          </div>
          <h2>{category}</h2>
        </div>
        </div>
      ))}
        </Swiper>
    <h5 className="figure_subtitle">{data.figure_subtitle}</h5>
  </div>
);
export default LighthouseBlock;
