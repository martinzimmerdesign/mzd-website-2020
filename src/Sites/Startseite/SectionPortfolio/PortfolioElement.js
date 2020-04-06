import React from 'react';
import { Link } from "react-router-dom";
import Button from 'Components/Buttons/Button.js';
import './PortfolioElement.css';
import { motion } from "framer-motion";

class PortfolioElement extends React.Component {
  render() {

    const variants = {
            cardContainer: {
              enter: {
                x: 0,
                opacity: 1,
                transition: {
                  when: "beforeChildren",
                  staggerChildren: 0.2,
                }
              },
              exit: {
                x: 100,
                opacity: 0,
                transition: {
                }
              }
            },
            cardElements: {
              enter: { y: 0, opacity: 1 },
              exit: { y: 10, opacity: 0 }
            },
        };

    return (
      <div class="swiper-slide">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} variants={variants.cardContainer} key={this.props.key}  className="element">
      <motion.h1 variants={variants.cardElements} className="name">{this.props.name}</motion.h1>
      <motion.h3 variants={variants.cardElements} className="category">{this.props.category}</motion.h3>
      <Button animation={true} name="Zur Case Study" addClass="button_position" link={this.props.link} />
      <div className="gradient"></div>
      <img className="image" src={this.props.image}></img>
      </motion.div>
    </div>
    );
  }
}

export default PortfolioElement;
