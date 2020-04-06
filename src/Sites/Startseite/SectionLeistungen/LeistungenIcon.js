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
                transition: { when: "beforeChildren" }
                },
              exit: {
                y: 100,
                opacity: 0,
                scale: 0,
                rotate: -30
              },
              hover: {
                scale: 1.15
              },
              tap: {
                scale: 0.8
              }
            },
            image: {
              enter: {
                opacity: 1,
                scale: 1,
                rotate: 360,

              },
              exit: {
                opacity: 0,
                scale: 0,
                rotate: 420
              },
              hover: {
                scale: 1.15
              },
              tap: {
                scale: 0.8
              }
            },
        };

    return (
      <motion.div whileHover="hover" whileTap="tap" variants={variants.imageContainer} key={this.props.key} onClick={() => this.props.onClick()} className="icon_wrapper">
      <motion.img variants={variants.image} className="leistung_image" src={this.props.image} />
      </motion.div>
    );
  }
}
export default LeistungenIcon;
