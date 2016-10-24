import React, { Component, PropTypes } from 'react';


import Star from './Star';

export default class Rating extends Component {
  constructor(props) {
    super(props);

    this.spanClick = this.spanClick.bind(this);
  }

  spanClick(starNo) {
    this.props.getRating(starNo);
  }

  render() {
    const { rating, getRating } = this.props;
    const arr = [1, 2, 3, 4, 5, 6, 7];

    return (<div className="ui">
      <h3 className="ui header">Please, rate this picture:</h3>
      <form className="ui form">
        <div className="ui huge star rating">
          {arr.map(
            (elem, index) =>
              <Star key={index} starNo={index} rating={rating} onClick={this.spanClick} />
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
