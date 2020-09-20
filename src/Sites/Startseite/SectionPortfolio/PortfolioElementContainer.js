import React from 'react';
import PortfolioElement from './PortfolioElement';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { motion } from "framer-motion";
import ease from 'Styles/Transitions.js';

export default class PortfolioElementContainer extends React.Component {
  render() {


    const variants = {
            blockContainer: {
              enter: {
                transition: {
                  when: "beforeChildren",
                  staggerChildren: 0.2,
                }
              },
              exit: {
                transition: {
                }
              }
            }
      };

    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      spaceBetween: 30,
      freemode: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    900: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1320: {
      slidesPerView: 3,
      spaceBetween: 0,
      watchOverflow: true,
      setWrapperSize: true,
    }
  }
    }

    return (
      <React.Fragment>
        <motion.div variants={variants.blockContainer}>
         <Swiper {...params}>
        {this.props.itemsArray.map(item => (
          <PortfolioElement
            key={item.id}
            name={item.name}
            category={item.category}
            link={item.link}
            image={item.image}
            imageWp={item.imageWp}
            index={item.index}
          />
        ))}
        </Swiper>
        </motion.div>
      </React.Fragment>
    );
  }
}
;
