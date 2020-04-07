import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

function SectionContainer (props) {

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.4, /* FÜR HANDY AENDERN!!!!! */
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
    className={"section_container " + props.addClass}
    ref={ref}
    variants={variants}
    initial="false"
    animate={inView ? "enter" : "exit"}
    exit="exit" >
    <div className="section_content">
      {props.children}
      </div>
    </motion.div>
  );
}
export default SectionContainer;
