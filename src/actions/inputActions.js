import {
  GET_IMG,
} from '../constants/constants.js';


export function getImage() {
  const param = 'https://source.unsplash.com/random';
  return (dispatch) =>
    fetch(param)
      //  .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        dispatch({
          type: GET_IMG,
          payload: resp,
        });
      });
}

