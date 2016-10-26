import {
  GET_RATING,
  GET_OVER,
  NEW_PIC,
  TEXT_CHANGE,
} from '../constants/constants.js';

const initialState = {
  rating: 5,
  over: 0,
  text: '',
};

export default function rating(state = initialState, action) {
  switch (action.type) {

    case GET_RATING:
      return { ...state, rating: action.payload };

    case GET_OVER:
      return { ...state, over: action.payload };

    case TEXT_CHANGE:
      return { ...state, text: action.payload };

    case NEW_PIC:
      return { ...state, over: 0, rating: 5, text: '' };

    default:
      return state;
  }
}