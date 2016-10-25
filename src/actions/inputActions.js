import {
  GET_IMG,
  GET_RATING,
  GET_OVER,
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

export function getRating(num) {
  return (dispatch) =>
    dispatch({
      type: GET_RATING,
      payload: num,
    });
}

export function getOver(num) {
  return (dispatch) =>
    dispatch({
      type: GET_OVER,
      payload: num,
    });
}

