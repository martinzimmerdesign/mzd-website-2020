import React from 'react';
import './LandingPage.css';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="section_container landing">
        <div className="section_content">
          <div className="landing_content_container">
            <div className="landing_text_container">
              <h1 className="landing_text" id="martin">Martin</h1>
              <h1 className="landing_text" id="zimmer">Zimmer</h1>
              <h1 className="landing_text" id="design">Design</h1>
            </div>
            <img className="landing_logo"></img>
          </div>
        </div>
          <div className="landing_info">
            <div>
          <h3 className="landing_info_text">Scroll runter</h3>
          <img className="landing_info_icon"></img>
            </div>
          </div>
      </div>
    );
  }
}
