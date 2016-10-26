import React, { Component, PropTypes } from 'react';

export default class Star extends Component {
  constructor(props) {
    super(props);

    this.spanClick = this.spanClick.bind(this);
    this.spanBlur = this.spanBlur.bind(this);
    this.spanLeave = this.spanLeave.bind(this);
  }

  spanClick(e) {
    this.props.onClick(parseInt(e.target.id, 10) + 1);
  }
  spanBlur(e) {
    this.props.onMouseOver(parseInt(e.target.id, 10) + 1);
  }
  spanLeave() {
    this.props.onMouseOver(0);
  }

  render() {
    const { rating, over, starNo } = this.props;
    let cl = rating > starNo ? 'icon active' : 'icon';
    cl = over > starNo ? cl.concat(' selected') : cl;

    return (<i
      onClick={this.spanClick} onMouseOver={this.spanBlur} onMouseLeave={this.spanLeave}
      className={cl} id={starNo}
    />);
  }
}

Image.propTypes = {
  getRating: PropTypes.func.isRequired,
  getOver: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  rating: PropTypes.number,
  over: PropTypes.number,
  starNo: PropTypes.number,
};