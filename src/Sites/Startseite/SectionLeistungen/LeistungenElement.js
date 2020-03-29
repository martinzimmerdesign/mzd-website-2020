import React from 'react';
import './LeistungenElement.css';
import SwiperSlide from 'react-id-swiper';

export default class LeistungenElement extends React.Component {
  render() {
    return (
      <div class="swiper-slide">
      <div key={this.props.key} class="leistung">
        <div className="icon_wrapper">
        <img class="leistung_image" src={this.props.image} />
        </div>
        <h1 class="leistung_title">{this.props.name}</h1>
        <p class="leistung_text">{this.props.text}</p>
        <span class="leistung_index">1/4</span>
      </div>
      </div>
    );
  }
}
