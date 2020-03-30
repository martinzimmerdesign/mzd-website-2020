import React from 'react';
import { Link } from "react-router-dom";
import Button from 'Components/Buttons/Button.js';
import './PortfolioElement.css';
import { motion } from "framer-motion";

class PortfolioElement extends React.Component {



  render() {

    const list = {
      visible: {
        opacity: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.3,
        },
      },
      hidden: {
        opacity: 0,
        transition: {
          when: "afterChildren",
        },
      },
    }



    return (
      <motion.div initial="hidden"
    animate="visible"
    variants={list} class="swiper-slide">
      <div key={this.props.key} className="element">
      <h1 className="name">{this.props.name}</h1>
      <h3 className="category">{this.props.category}</h3>
      <Button name="Zur Case Study" addClass="button_position" link={this.props.link} />
      <div className="gradient"></div>
      <img className="image" src={this.props.image}></img>
      </div>
    </motion.div>
    );
  }
}

export default PortfolioElement;
