import React from 'react';
import { motion } from "framer-motion";
import './ImageBlock.css';
import BlockWrapper from 'Components/CaseStudy/BlockWrapper.js';

export default class ImageBlock extends React.Component {
  render() {

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

  return (
    <BlockWrapper>
  <motion.div variants={variants.blockContainer} className="image-block">
    <motion.img onLoad={() => this.props.onLoad()}
    variants={variants.blockChildren} className="site_image" alt={this.props.data.alt} src={this.props.data.source}></motion.img>
    <motion.h5 variants={variants.blockChildren} className="figure_subtitle">{this.props.data.figure_subtitle}</motion.h5>
  </motion.div>
</BlockWrapper>
);
}
}
