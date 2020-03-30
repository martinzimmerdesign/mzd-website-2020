import React from 'react';
import LeistungenElement from './LeistungenElement';
import LeistungenDesktop from './LeistungenDesktop';
import LeistungenElementContainer from './LeistungenElementContainer';
import TitleComp from "Components/TitleComp/TitleComp.js";
import leistungenData from './LeistungenData.js';

const data = {
  title: "Leistungen",
  text: "Für Fragen, Vorschläge oder Anregungen bin ich immer offen, also schreiben Sie mir gerne unverbindlich eine Nachricht.",
};

export default class Leistungen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        isDesktop: false
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
                <LeistungenElementContainer itemsArray={leistungenData} />
              )}
            </div>

        </div>
      </div>
    );
  }
}
