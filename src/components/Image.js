import React, { Component, PropTypes } from 'react';

export default class Image extends Component {

  render() {
    const { image } = this.props;

    return (<div className="ui">
      <div className="">
        <img src={image.url} />
      </div>
    </div>);
  }
}

Image.propTypes = {
  image: PropTypes.object.isRequired,
};