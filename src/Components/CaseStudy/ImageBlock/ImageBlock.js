import React from 'react';
import { motion } from "framer-motion";
import './ImageBlock.css';

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

  const ImageBlock = ({ data }) => (
  <div className="image-block">
    <img className="site_image" alt={data.alt} src={data.source}></img>
    <h5 className="figure_subtitle">{data.figure_subtitle}</h5>
  </div>
);
export default ImageBlock;
