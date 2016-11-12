import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Form from '../components/Form';
import Image from '../components/Image';
import Rating from '../components/Rating';
import * as inputActions from '../actions/inputActions';

class App extends Component {

  render() {
    const { image, rating, over } = this.props;
    const { getRating, getOver } = this.props;

    return (
      <div className="ui two column centered grid container">
        <div className="column">
          <div className="ui segment">
            <h2 className="ui header">Title of Test 3</h2>
          </div>
          {Image(image)}
          <div className="ui segment">
            <Rating rating={rating} over={over} getRating={getRating} getOver={getOver} />
            <Form />
          </div>
        </div>
      </div>
    );
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