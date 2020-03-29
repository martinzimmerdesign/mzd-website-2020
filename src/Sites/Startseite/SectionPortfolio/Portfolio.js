import React from 'react';
import { Link } from "react-router-dom";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import TitleComp from "Components/TitleComp/TitleComp.js";
import PortfolioElementContainer from './PortfolioElementContainer';
import mzd_image from "./img/sef.png";
import gb_image from "./img/ef.png";

const data = {
  title: "Portfolio",
  text: "Für Fragen, Vorschläge oder Anregungen bin ich immer offen, also schreiben Sie mir gerne unverbindlich eine Nachricht.",
};

const element_data = [
  {
    id: 0,
    name: "Martin Zimmer Design",
    category: 'Social Media',
    link: "/mzd-case-study",
    image: mzd_image
  },
  {
    id: 1,
    name: "Gefäßpraxis Bevensen",
    category: 'Cooperate Design',
    link: "/sass",
    image: mzd_image,
  },
  {
    id: 2,
    name: "Martin Zimmer Design",
    category: 'Social Media',
    link: "/mzd-case-study",
    image: gb_image
  }
]

export default class Portfolio extends React.Component {
  render() {
    return (
      <div className="section_container">
        <div className="section_content">
          <TitleComp title={data.title} text={data.text} />
                  <PortfolioElementContainer itemsArray={element_data} />
        </div>
      </div>
    );
  }
}
