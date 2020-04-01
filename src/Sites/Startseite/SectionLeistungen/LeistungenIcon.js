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
              }
            },
        };

    return (
      <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.8 }} variants={variants.imageContainer} key={this.props.key} onClick={() => this.props.onClick()} className="icon_wrapper">
      <motion.img whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.8 }} variants={variants.image} className="leistung_image" src={this.props.image} />
      </motion.div>
    );
  }
}
export default LeistungenIcon;
