import React from 'react';
import { Link } from "react-router-dom";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import TitleComp from "Components/TitleComp/TitleComp.js";
import PortfolioElementContainer from './PortfolioElementContainer';
import portfolioData from './PortfolioData.js';

const data = {
  title: "Portfolio",
  text: "Für Fragen, Vorschläge oder Anregungen bin ich immer offen, also schreiben Sie mir gerne unverbindlich eine Nachricht.",
};

export default class Portfolio extends React.Component {
  render() {
    return (
      <div className="section_container">
        <div className="section_content">
          <TitleComp variants= title={data.title} text={data.text} />
                  <PortfolioElementContainer itemsArray={portfolioData} />
        </div>
      </div>
    );
  }
}
