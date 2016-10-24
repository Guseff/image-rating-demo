import React, { Component, PropTypes } from 'react';

export default class Star extends Component {
  constructor(props) {
    super(props);

    this.spanClick = this.spanClick.bind(this);
  }

  spanClick(e) {
    this.props.onClick(e.target.id);
  }

  render() {
    const { rating, starNo } = this.props;

    const cl = rating >= starNo ? 'icon active' : 'icon';

    return <i onClick={this.spanClick} className={cl} id={starNo} />;
  }
}

Image.propTypes = {
  getRating: PropTypes.func.isRequired,
  rating: PropTypes.number,
  starNo: PropTypes.number,
};