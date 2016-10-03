import React, { Component, PropTypes } from 'react';

export default class Star extends Component {
  constructor(props) {
    super(props);

    this.spanClick = this.spanClick.bind(this);
  }

  spanClick(e) {
    this.props.getRating(e.target.dataset.rate);
  }

  render() {
    const { rating } = this.props;

    return <i className="icon" />;
  }
}

Image.propTypes = {
  getRating: PropTypes.func.isRequired,
  rating: PropTypes.number,
};