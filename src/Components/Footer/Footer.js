import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import SectionContainer from 'Components/Container/SectionContainer.js';
import { motion } from "framer-motion";
import ease from 'Styles/Transitions.js';

const variants = {
        footerContainer: {
          enter: {
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.06,
            }
          },
          exit: {
            transition: {
            }
          }
        },
        footerElements: {
          enter: { y: 0, opacity: 1 },
          exit: { y: 50, opacity: 0 }
        },
        noMotion: {
          enter: {  },
          exit: {  }
        },
    };

const Footer = () =>
    <SectionContainer addClass="footer">
      <motion.div variants={variants.footerContainer}>
      <Link to="/impressum"><motion.li variants={variants.footerElements}><a>Impressum</a></motion.li></Link>
      <Link to="/datenschutzerklaerung"><motion.li variants={variants.footerElements}><a>Datenschutzerklärung</a></motion.li></Link>
      <motion.li variants={variants.footerElements} className="footer_text">Copyright © 2020 Martin Zimmer Design</motion.li>
      </motion.div>
    </SectionContainer>
export default Footer;
