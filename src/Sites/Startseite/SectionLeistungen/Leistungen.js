import React from 'react';
import './Leistungen.css';
import LeistungenElement from './LeistungenElement';
import LeistungenDesktop from './LeistungenDesktop';
import LeistungenElementContainer from './LeistungenElementContainer';
import TitleComp from "Components/TitleComp/TitleComp.js";
import pen_icon from "./img/pen_icon.png";
import dev_icon from "./img/dev_icon.png";
import ui_icon from "./img/ui_icon.png";
import wartung_icon from "./img/wartung_icon.png";

const data = {
  title: "Leistungen",
  text: "Für Fragen, Vorschläge oder Anregungen bin ich immer offen, also schreiben Sie mir gerne unverbindlich eine Nachricht.",
};

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


export default class Leistungen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        isDesktop: false //This is where I am having problems
      };

      this.updatePredicate = this.updatePredicate.bind(this);
    }
    componentDidMount() {
      this.updatePredicate();
      window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
      this.setState({ isDesktop: window.innerWidth > 800 });
    }

    changeContent = () => {

    };

  render() {

    const isDesktop = this.state.isDesktop;

    return (
      <div className="section_container">
        <div className="section_content">
        <TitleComp title={data.title} text={data.text} />

                <div>
              {isDesktop ? (
                <LeistungenDesktop />
              ) : (
                <LeistungenElementContainer itemsArray={element_data} />
              )}
            </div>

        </div>
      </div>
    );
  }
}
