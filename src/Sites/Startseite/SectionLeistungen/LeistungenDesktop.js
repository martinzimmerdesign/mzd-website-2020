import React, { useState } from 'react';
import './LeistungenElement.css';
import pen_icon from "./img/pen_icon.png";
import dev_icon from "./img/dev_icon.png";
import ui_icon from "./img/ui_icon.png";
import wartung_icon from "./img/wartung_icon.png";
import { Link } from "react-router-dom";
import Button from 'Components/Buttons/Button.js';
import LeistungenIcon from './LeistungenIcon.js';
import { motion } from "framer-motion";

const element_data = [
  {
    id: 0,
    name: "Webdesign",
    text: "Ein modernes Webdesign spricht den Nutzer an und vermittelt die gewünschte Nachricht. Der Erfolg hängt von der richtigen Nutzererfahrung und einem intuitiven Design ab.",
    image: pen_icon,
    link: "/qwewq7888e"
  },
  {
    id: 1,
    name: "Webentwicklung",
    text: "Ein modernes Design braucht eine zeitgemäße technische Umsetzung. Neuste Standards der Programmierung und die Betrachtung aller Gerätegrößen spielen eine sehr wichtige Rolle.",
    image: dev_icon,
    link: "/qwe333wqe"
  },
  {
    id: 2,
    name: "Wartung & Verwaltung",
    text: "Ein erfolgreicher Webauftritt ist ein Prozess, welcher Aktualisierung, Optimierung und Wartung nach der Veröffentlichung voraussetzt.",
    image: ui_icon,
    link: "/qwe444qe"
  },
  {
    id: 3,
    name: "UX/UI Design",
    text: "Erfolgreiche Menüs und Oberflächen stellen den Nutzer in den Mittelpunkt und leiten ihn geschickt und einfach durch jeden Prozess. Probleme werden gelöst und der Nutzer bereichert.",
    image: wartung_icon,
    link: "/qweq6666we"
  }
]

export default class LeistungenDesktop extends React.Component {
  constructor() {
     super();
     this.state = {
        title: element_data[0].name,
        text: element_data[0].text,
        link: element_data[0].link,
     };
  }

  changeContent = (id) => {
     this.setState({ title: element_data[id].name });
     this.setState({ text: element_data[id].text });
     this.setState({ link: element_data[id].link });
  };

  render() {
    return (
      <div>
          <div className="image_wrapper">
                  {element_data.map(item => (
                    <LeistungenIcon
                      key={item.id} image={item.image} onClick={() => this.changeContent(item.id)}
                      /> ))}
              <div className="leistung_line"></div>
          </div>
          <div className="leistung">
              <h1 className="leistung_title">{this.state.title}</h1>
              <p className="leistung_text">{this.state.text}</p>
              <Link to={this.state.link}>
                <Button name="Beispiel anzeigen" addClass="leistungen_button_position"/>
              </Link>
              <div className="gradient_leistungen"></div>
         </div>

      </div>
    );
  }
}
