import React, { Component, PropTypes } from 'react';

export default class Image extends Component {
  constructor(props) {
    super(props);

    this.spanClick = this.spanClick.bind(this);
  }

  spanClick(e) {
    // this.props.doReposesSearch(e.target.value);
    this.props.getRating(e.target.value);
  }

  render() {
    const { rating } = this.props;

    return (<div className="ui">
      <h3 className="ui header">Please, rate this picture:</h3>
      <div className="rating">
        <div className="change">
          <span value="1" onClick={this.spanClick} >&#9734;</span>
          <span value="2" onClick={this.spanClick} >&#9734;</span>
          <span value="3" onClick={this.spanClick} >&#9734;</span>
          <span value="4" onClick={this.spanClick} >&#9734;</span>
          <span value="5" onClick={this.spanClick} >&#9734;</span>
        </div>
      </div>
    </div>);
  }
}

Image.propTypes = {
  getRating: PropTypes.func.isRequired,
  rating: PropTypes.number,
};