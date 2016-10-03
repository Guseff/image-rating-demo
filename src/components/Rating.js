import React, { Component, PropTypes } from 'react';


import Star from './Star';

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
    const arr = [1, 2, 3, 4, 5, 6, 7];

    return (<div className="ui">
      <h3 className="ui header">Please, rate this picture:</h3>
      <form className="ui form">
        <div className="ui huge star rating" data-rating="3">
          {arr.map(
            (elem, index) =>
              <Star key={index} />
          )}
        </div>
      </form>
    </div>);
  }
}

Image.propTypes = {
  getRating: PropTypes.func.isRequired,
  rating: PropTypes.number,
};