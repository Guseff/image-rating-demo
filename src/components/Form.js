import React, { Component, PropTypes } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.newPicReq = this.newPicReq.bind(this);
  }

  newPicReq() {
    this.props.newPic();
    this.props.getImage();
  }

  render() {
    const { newPic, getImage } = this.props;

    return (<div className="ui form">
      <div className="field">
        <label>Text</label>
        <textarea></textarea>
      </div>
      <div className="ui submit button" onClick={this.newPicReq} >Submit</div>
    </div>);
  }
}

Image.propTypes = {
  newPic: PropTypes.func,
  getImage: PropTypes.func,
};