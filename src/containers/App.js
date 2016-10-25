import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Image from '../components/Image';
import Rating from '../components/Rating';
import * as inputActions from '../actions/inputActions';

class App extends Component {

  render() {
    const { image, rating, over } = this.props;
    const { getRating, getOver } = this.props;

    return (<div className="ui container">
      <h2 className="ui header">Title of Test 3</h2>
      <Image image={image} />
      <Rating rating={rating} over={over} getRating={getRating} getOver={getOver} />
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    image: state.image.image,
    rating: state.rating.rating,
    over: state.rating.over,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRating: bindActionCreators(inputActions.getRating, dispatch),
    getOver: bindActionCreators(inputActions.getOver, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  image: PropTypes.object,
  rating: PropTypes.number,
  over: PropTypes.number,
  getRating: PropTypes.func.isRequired,
  getOver: PropTypes.func.isRequired,
};