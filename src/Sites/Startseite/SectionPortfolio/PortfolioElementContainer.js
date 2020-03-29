import React from 'react';
import PortfolioElement from './PortfolioElement';

export default class PortfolioElementContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.itemsArray.map(item => (
          <PortfolioElement
            key={item.id}
            name={item.name}
            category={item.category}
            link={item.link}
            image={item.image}
          />
        ))}
      </React.Fragment>
    );
  }
}
;
