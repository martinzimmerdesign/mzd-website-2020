import React from 'react';
import { Link } from "react-router-dom";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Button from 'Components/Buttons/Button.js';
import './FormHandler.js';
import './KontaktFormular.css';
import FormElement from './FormElement.js';

export default class Kontakt extends React.Component {
  render() {
    return (
      <form id="form" action="#" method="POST">
        <h2>Kontaktformular</h2>
        <div class="display_container">
        <div className="display_wrapper">
            <FormElement tag="input" id="name" placeholder="Name"/>
            <FormElement tag="input" id="email" placeholder="E-Mail Adresse"/>
            <FormElement tag="input" id="topic" placeholder="Betreff"/>
        </div>
        <div className="display_wrapper">
            <div className="message_wrapper">
                <textarea class="input" placeholder="Nachricht" id="message" name="message"></textarea>
            </div>
            <div className="checkbox_wrapper">
                <span class="checkbox"></span><p>Hiermit bestätige ich die <Link to="/datenschutzerklaerung"><a>Datenschutzerklärung</a></Link> gelesen zu haben und akzeptiere diese im vollen Unfang!</p>
            </div>
        </div>
        </div>
        <Button name="Senden" addClass="submit" />
      </form>
    );
  }
}
