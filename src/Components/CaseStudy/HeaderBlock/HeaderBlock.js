import React from 'react';
import { motion } from "framer-motion";
import './HeaderBlock.css';
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
          exit: { y: 10, opacity: 0 }
    },

  };

const HeaderBlock = ( {title, subtitle, image} ) =>
<BlockWrapper>
<div className="header">
  <div className="header_content">
    <h1>{title}</h1>
    <h3>{subtitle}</h3>
  </div>
  <img className="header_image" src={image} />
</div>
</BlockWrapper>
export default HeaderBlock;
