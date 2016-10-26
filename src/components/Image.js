import React from 'react';

export default function Image(image) {
  return (<div className="ui segment">
    <div className="">
      <img alt="" src={image.url} />
    </div>
  </div>);
}

// Image.propTypes = {
//   image: PropTypes.object,
// };