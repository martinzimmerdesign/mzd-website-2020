import React from 'react';
import { Link } from "react-router-dom";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Button from 'Components/Buttons/Button.js';
import './FormHandler.js';
import './KontaktFormular.css';
import FormElement from './FormElement.js';
import { motion } from "framer-motion";
import ease from 'Styles/Transitions.js';

export default class Kontakt extends React.Component {
  render() {

    const variants = {
            formContainer: {
              enter: {
                transition: {
                  staggerChildren: 0.4,
                }
              },
              exit: {
                transition: {
                }
              }
            },
            formElements: {
              enter: {
                y: 0,
                opacity: 1,
            },
              exit: { y: 50, opacity: 0 }
            },
        };

    return (
      <motion.form variants={variants.formContainer} id="form" action="#" method="POST">
        <motion.h2 variants={variants.formElements} >Kontaktformular</motion.h2>
        <motion.div variants={variants.formElements} class="display_container">
        <motion.div variants={variants.formElements} className="display_wrapper">
            <FormElement tag="input" id="name" placeholder="Name"/>
            <FormElement tag="input" id="email" placeholder="E-Mail Adresse"/>
            <FormElement tag="input" id="topic" placeholder="Betreff"/>
        </motion.div>
        <motion.div variants={variants.formElements} className="display_wrapper">
            <div className="message_wrapper">
                <textarea class="input" placeholder="Nachricht" id="message" name="message"></textarea>
            </div>
            <div  className="checkbox_wrapper">
                <span class="checkbox"></span>
                <p>Hiermit bestätige ich die <Link to="/datenschutzerklaerung"><a>Datenschutzerklärung</a></Link> gelesen zu haben und akzeptiere diese im vollen Unfang!</p>
            </div>
        </motion.div>
        </motion.div>
        <Button animation={true} name="Senden" addClass="submit"/>
      </motion.form>
    );
  }
}
