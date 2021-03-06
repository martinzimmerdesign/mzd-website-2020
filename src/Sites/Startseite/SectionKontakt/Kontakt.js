import React from 'react';
import { Link } from "react-router-dom";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import TitleComp from "Components/TitleComp/TitleComp.js";
import Formular from "./Formular.js";
import './Kontakt.css'
import SectionContainer from 'Components/Container/SectionContainer.js';

const data = {
  title: "Kontakt",
  text: "Für Fragen, Vorschläge oder Anregungen bin ich immer offen, also schreiben Sie mir gerne unverbindlich eine Nachricht.",
};

export default class Kontakt extends React.Component {
  render() {
    return (
      <SectionContainer>
        <h1 className="hallo-background hallo1">Hallo</h1>
        <h1 className="hallo-background hallo2">Hallo</h1>
          <TitleComp title={data.title} text={data.text} />
          <Formular />
        </SectionContainer>
    );
  }
}
