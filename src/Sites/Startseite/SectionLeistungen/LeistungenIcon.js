import React from 'react';

class LeistungenIcon extends React.Component {
  render() {
    return (
      <div key={this.props.key} onClick={() => this.props.onClick()} className="icon_wrapper">
      <img className="leistung_image" src={this.props.image} />
      </div>
    );
  }
}
export default LeistungenIcon;
