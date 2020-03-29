import React from 'react';
import LeistungenElement from './LeistungenElement';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

export default class LeistungenElementContainer extends React.Component {
  render() {

    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      spaceBetween: 30,
      freemode: true,
    }

    return (
      <React.Fragment>
         <Swiper {...params}>
        {this.props.itemsArray.map(item => (
          <LeistungenElement
            key={item.id}
            name={item.name}
            text={item.text}
            image={item.image}
          />
        ))}
        </Swiper>
      </React.Fragment>
    );
  }
}
