import React, { Component, PropTypes } from 'react';

export default class Image extends Component {
  constructor(props) {
    super(props);

    this.spanClick = this.spanClick.bind(this);
  }

  spanClick(e) {
    // this.props.doReposesSearch(e.target.value);
    this.props.getRating(e.target.dataset.rate);
  }

  render() {
    const { rating } = this.props;

    return (<div className="ui">
      <h3 className="ui header">Please, rate this picture:</h3>
      <form className="ui form">
        <div className="ui heart rating" data-rating="3" data-max-rating="5"></div>
      </form>
    </div>);
  }
}

Image.propTypes = {
  getRating: PropTypes.func.isRequired,
  rating: PropTypes.number,
};