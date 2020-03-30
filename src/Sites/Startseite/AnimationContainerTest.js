import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";


function AnimationContainerTest (props) {

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
  })

  const variants = {
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1
      }
    },
    exit: {
      x: 0,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  var animateContent = inView;


  return (
    <motion.div
    ref={ref}
    variants={variants}
    initial="false"
    animate={animateContent ? "enter" : "exit"}
    exit="exit" >
      {props.children}
    </motion.div>
  );
}
export default AnimationContainerTest;
