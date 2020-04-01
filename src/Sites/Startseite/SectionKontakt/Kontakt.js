import React from 'react';
import { Link } from "react-router-dom";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import TitleComp from "Components/TitleComp/TitleComp.js";
import KontaktFormular from "./KontaktFormular";
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
          <TitleComp title={data.title} text={data.text} />
          <KontaktFormular />
        </SectionContainer>
    );
  }
}
