import React from 'react';
import { Link } from "react-router-dom";
import TitleComp from "Components/TitleComp/TitleComp.js";
import SectionContainer from 'Components/Container/SectionContainer.js';
import bevensenData from './BevensenCaseStudyData.js';
import 'Sites/CaseStudy.css';
import './BevensenCaseStudy.css';
import BackButton from "Components/Buttons/BackButton.js";
import Footer from 'Components/Footer/Footer.js';
import TextBlock from "Components/CaseStudy/TextBlock/TextBlock.js";
import HeaderBlock from "Components/CaseStudy/HeaderBlock/HeaderBlock.js";
import LighthouseBlock from "Components/CaseStudy/LighthouseBlock/LighthouseBlock.js";
import ImageBlock from "Components/CaseStudy/ImageBlock/ImageBlock.js";


export default class BevensenCaseStudy extends React.Component {
  render() {
    return (
      <React.Fragment>

        <SectionContainer addClass="case-study">

          <BackButton animation="true" link="/" addClass="backbutton_position" />

          <HeaderBlock title={bevensenData.title} subtitle={bevensenData.subtitle} image={bevensenData.header_image} />
          <TextBlock title="Übersicht" paragraph={bevensenData.overview} />
          <ImageBlock data={bevensenData.image} />
          <TextBlock title="Herausforderungen" paragraph={bevensenData.challenges} />

          <div className="keywords-block">
            <h2>INTUITIV</h2>
            <h2>SCHNELL</h2>
            <h2>SCHLICHT</h2>
            <h5 className="figure_subtitle">Die drei Aspekte beim erstellen der Webseite</h5>
          </div>

          <TextBlock title="Weg zum Ziel" paragraph={bevensenData.weg_zum_ziel} />
          <LighthouseBlock data={bevensenData.lighthouse} />
          <TextBlock title="Das Ergebnis" paragraph={bevensenData.result} />
        </SectionContainer>
        <Footer />
      </React.Fragment>
    );
  }
}
