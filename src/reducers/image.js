import {
  GET_IMG,
} from '../constants/constants.js';

const initialState = {
  image: {},
};

export default function image(state = initialState, action) {
  switch (action.type) {

    case GET_IMG:
      return { ...state, image: action.payload };

    default:
      return state;

  }
}