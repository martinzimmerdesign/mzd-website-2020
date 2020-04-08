import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

function BlockWrapper (props) {

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  })

  const variants = {
    initial: {

    },
    enter: {

    },
    exit: {

    }
  };

  return (
    <motion.div
    ref={ref}
    variants={variants}
    initial="false"
    animate={inView ? "enter" : "exit"}
    exit="exit" >
      {props.children}
    </motion.div>
  );
}
export default BlockWrapper;
