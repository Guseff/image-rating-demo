import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as inputActions from '../actions/inputActions';

class Form extends Component {
  constructor(props) {
    super(props);

    this.newPicReq = this.newPicReq.bind(this);
    this.changeText = this.changeText.bind(this);
  }

  newPicReq() {
    this.props.newPic();
    this.props.getImage();
  }
  changeText(e) {
    this.props.changeT(e.target.value);
  }

  render() {
    const { text } = this.props;

    return (
      <div className="ui form">
        <div className="field">
          <textarea value={text} onChange={this.changeText} placeholder="Enter your comment here..." />
        </div>
        <div className="ui submit button" onClick={this.newPicReq} >Send</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.rating.text,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newPic: bindActionCreators(inputActions.newPic, dispatch),
    getImage: bindActionCreators(inputActions.getImage, dispatch),
    changeT: bindActionCreators(inputActions.changeT, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  newPic: PropTypes.func.isRequired,
  getImage: PropTypes.func.isRequired,
  changeT: PropTypes.func.isRequired,
  text: PropTypes.string,
};