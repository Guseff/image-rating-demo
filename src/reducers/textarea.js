import {
  GET_TEXT,
} from '../constants/constants.js';

const initialState = {
  text: '',
};

export default function text(state = initialState, action) {
  switch (action.type) {

    case GET_TEXT:
      return { ...state, text: action.payload };

    default:
      return state;

  }
}