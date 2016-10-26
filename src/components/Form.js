import React, { Component, PropTypes } from 'react';

export default class Form extends Component {
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

    return (<div className="ui form">
      <div className="field">
        <textarea value={text} onChange={this.changeText} placeholder="Enter your comment here..." />
      </div>
      <div className="ui submit button" onClick={this.newPicReq} >Send</div>
    </div>);
  }
}

Form.propTypes = {
  newPic: PropTypes.func.isRequired,
  getImage: PropTypes.func.isRequired,
  changeT: PropTypes.func.isRequired,
  text: PropTypes.string,
};