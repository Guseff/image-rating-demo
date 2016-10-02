import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Image from '../components/Image';
import * as inputActions from '../actions/inputActions';

class App extends Component {

  render() {
    const { image } = this.props;
    const { getImage } = this.props;

    return (<div className="ui container">
      <h2 className="ui header">Title of Test 2</h2>
      <Image image={image} />
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    image: state.image.image,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getImage: bindActionCreators(inputActions.getImage, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  image: PropTypes.object.isRequired,
  getImage: PropTypes.func.isRequired,
};