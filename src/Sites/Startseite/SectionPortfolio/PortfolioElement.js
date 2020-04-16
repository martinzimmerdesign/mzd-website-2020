import React from 'react';
import { Link } from "react-router-dom";
import Button from 'Components/Buttons/Button.js';
import './PortfolioElement.css';
import { motion } from "framer-motion";

class PortfolioElement extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        isDesktop: true
      };

      this.updatePredicate = this.updatePredicate.bind(this);
    }
    componentDidMount() {
      this.updatePredicate();
      window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
      this.setState({ isDesktop: window.innerWidth > 800 });
    }

  render() {

    const variants = {
            blockContainer: {
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  when: "beforeChildren",
                  staggerChildren: 0.06,
                }
              },
              exit: {
                y: 30,
                opacity: 0,
                transition: {
                }
              },
              hover: {scale: 1.05},
              tap: {scale: 0.95 },
            },
            blockContainerMobile: {
              hover: {scale: 1},
              tap: {scale: 1 },
            },
            cardElements: {
              enter: { y: 0, opacity: 1 },
              exit: { y: 10, opacity: 0 }
            },
        };

    return (
      <motion.div variants={variants.blockContainer} class="swiper-slide">
      <motion.div variants={variants.blockContainer} whileHover={this.state.isDesktop ? variants.blockContainer.hover : variants.blockContainerMobile.hover} whileTap={this.state.isDesktop ? variants.blockContainer.tap : variants.blockContainerMobile.tap} key={this.props.key}  className="element">
      <motion.h1 variants={variants.cardElements} className="name">{this.props.name}</motion.h1>
      <motion.h3 variants={variants.cardElements} className="category">{this.props.category}</motion.h3>
      <Button animation={true} name="Zur Case Study" addClass="button_position" link={this.props.link} />
      <div className="gradient"></div>
      <img className="image" src={this.props.image}></img>
      </motion.div>
    </motion.div>
    );
  }
}

export default PortfolioElement;
