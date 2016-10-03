import {
  GET_IMG,
  GET_RATING,
} from '../constants/constants.js';


export function getImage() {
  const param = 'https://source.unsplash.com/random';
  return (dispatch) =>
    fetch(param)
      //  .then((resp) => resp.json())
      .then((resp) => {
        dispatch({
          type: GET_IMG,
          payload: resp,
        });
      });
}

export function getRating(str) {
  console.log(str);
  const num = parseInt(str, 10);
  return (dispatch) =>
    dispatch({
      type: GET_RATING,
      payload: num,
    });
}

