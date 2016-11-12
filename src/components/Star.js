import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as inputActions from '../actions/inputActions';

class Star extends Component {
  constructor(props) {
    super(props);

    this.spanClick = this.spanClick.bind(this);
    this.spanBlur = this.spanBlur.bind(this);
    this.spanLeave = this.spanLeave.bind(this);
  }

  spanClick(e) {
    this.props.getRating(parseInt(e.target.id, 10) + 1);
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

function mapStateToProps(state) {
  return {
    rating: state.rating.rating,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRating: bindActionCreators(inputActions.getRating, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Star);


Star.propTypes = {
  onMouseOver: PropTypes.func.isRequired,
  getRating: PropTypes.func.isRequired,
  rating: PropTypes.number,
  over: PropTypes.number,
  starNo: PropTypes.number,
};