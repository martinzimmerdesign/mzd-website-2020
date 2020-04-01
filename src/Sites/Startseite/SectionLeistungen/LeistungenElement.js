import React from 'react';
import './LeistungenElement.css';
import SwiperSlide from 'react-id-swiper';
import { motion } from "framer-motion";
import ease from 'Styles/Transitions.js';

export default class LeistungenElement extends React.Component {
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
              enter: { x: 0, opacity: 1 },
              exit: { x: 10, opacity: 0 }
            },
            cardTextElements: {
              enter: { y: 0, opacity: 1 },
              exit: { y: 10, opacity: 0 }
            },
        };

    return (
      <div class="swiper-slide">
      <motion.div variants={variants.cardContainer} key={this.props.key} class="leistung">
        <motion.div variants={variants.cardElements} className="icon_wrapper">
        <img class="leistung_image" src={this.props.image} />
        </motion.div>
        <motion.h1 variants={variants.cardTextElements} class="leistung_title">{this.props.name}</motion.h1>
        <motion.p variants={variants.cardTextElements} class="leistung_text">{this.props.text}</motion.p>
        <motion.span variants={variants.cardTextElements} class="leistung_index">1/4</motion.span>
      </motion.div>
      </div>
    );
  }
}
