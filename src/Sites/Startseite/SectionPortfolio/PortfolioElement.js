import React from 'react';
import { Link } from "react-router-dom";
import Button from 'Components/Buttons/Button.js';
import './PortfolioElement.css';

class PortfolioElement extends React.Component {
  render() {
    return (
      <div key={this.props.key} className="element swiper-slide">
      <h1 className="name">{this.props.name}</h1>
      <h3 className="category">{this.props.category}</h3>

      <Link to={this.props.link}>
      <Button name="Zur Case Study" addClass="button_position"/>
      </Link>

      <div className="gradient"></div>
      <img className="image" src={this.props.image}></img>
      </div>
    );
  }
}

export default PortfolioElement;
