import React from 'react';
import { motion } from "framer-motion";
import './LighthouseBlock.css';

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

  const LighthouseBlock = ({ data }) => (
  <div className="lighthouse-block">
      {data.stats.map(({ score, category }, i) => (
        <div className="circle_wrapper">
          <div className="circle">
            <h2>{score}</h2>
          </div>
          <h2>{category}</h2>
        </div>
      ))}
    <h5 className="figure_subtitle">{data.figure_subtitle}</h5>
  </div>
);
export default LighthouseBlock;
