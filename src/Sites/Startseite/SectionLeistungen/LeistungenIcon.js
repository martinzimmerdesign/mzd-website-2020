import React from 'react';
import { motion } from "framer-motion";
import ease from 'Styles/Transitions.js';

class LeistungenIcon extends React.Component {
  render() {

    const variants = {
            imageContainer: {
              enter: {
                y: 0,
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: {
                  staggerChildren: 0.3,
                  },
                },
              hover: {
                scale: 1.15
                },
              tap: {
                scale: 0.8
                },
              exit: {
                y: 100,
                opacity: 0,
                scale: 0,
                rotate: -30
                }
            },
            image: {
              enter: {
                opacity: 1,
                scale: 1,
                rotate: 360,
                },
              hover: {
                scale: 1.15
                },
              tap: {
                scale: 0.8
                },
              exit: {
                opacity: 0,
                scale: 0,
                rotate: 420
                }
            },
        };

    return (
      <motion.div whileHover="hover" whileTap="tap" variants={variants.image} variants={variants.imageContainer} key={this.props.key} onClick={() => this.props.onClick()} className="icon_wrapper">
      <motion.img variants={variants.image} className="leistung_image" src={this.props.image} />
      </motion.div>
    );
  }
}
export default LeistungenIcon;
