import React, { useState, useRef } from 'react';
import './LeistungenElement.css';
import Button from 'Components/Buttons/Button.js';
import LeistungenIcon from './LeistungenIcon.js';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import leistungenData from './LeistungenData.js';

export default class LeistungenDesktop extends React.Component {
  constructor() {
     super();
     this.state = {
        title: leistungenData[0].name,
        text: leistungenData[0].text,
        link: leistungenData[0].link,
     };
  }

  changeContent = (id) => {
     this.setState({ title: leistungenData[id].name });
     this.setState({ text: leistungenData[id].text });
     this.setState({ link: leistungenData[id].link });
  };

  render() {
    return (
      <div>
          <div className="image_wrapper">
                  {leistungenData.map(item => (
                    <LeistungenIcon
                      key={item.id} image={item.image} onClick={() => this.changeContent(item.id)}
                      /> ))}
              <div className="leistung_line"></div>
          </div>
          <div className="leistung">
              <h1 className="leistung_title">{this.state.title}</h1>
              <p className="leistung_text">{this.state.text}</p>
                <Button name="Beispiel anzeigen" addClass="leistungen_button_position" link={this.state.link} />
              <div className="gradient_leistungen"></div>
         </div>

      </div>
    );
  }
}
