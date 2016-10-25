import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Image from '../components/Image';
import Rating from '../components/Rating';
import Form from '../components/Form';
import * as inputActions from '../actions/inputActions';

class App extends Component {

  render() {
    const { image, rating, over } = this.props;
    const { getRating, getOver, newPic, getImage } = this.props;

    return (<div className="ui container">
      <h2 className="ui header">Title of Test 3</h2>
      <Image image={image} />
      <Rating rating={rating} over={over} getRating={getRating} getOver={getOver} />
      <Form newPic={newPic} getImage={getImage} />
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
    newPic: bindActionCreators(inputActions.newPic, dispatch),
    getImage: bindActionCreators(inputActions.getImage, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  image: PropTypes.object,
  rating: PropTypes.number,
  over: PropTypes.number,
  getRating: PropTypes.func.isRequired,
  getOver: PropTypes.func.isRequired,
  newPic: PropTypes.func.isRequired,
  getImage: PropTypes.func.isRequired,
};