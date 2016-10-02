import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Image from '../components/Image';
import Rating from '../components/Rating';
import * as inputActions from '../actions/inputActions';

class App extends Component {

  render() {
    const { image, rating } = this.props;
    const { getRating } = this.props;

    return (<div className="ui container">
      <h2 className="ui header">Title of Test 3</h2>
      <Image image={image} />
      <Rating rating={rating} getRating={getRating} />
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    image: state.image.image,
    rating: state.rating.rating,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRating: bindActionCreators(inputActions.getRating, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  image: PropTypes.object,
  rating: PropTypes.number,
  getRating: PropTypes.func.isRequired,
};