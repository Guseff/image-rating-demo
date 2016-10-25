import {
  GET_RATING,
  GET_OVER,
  NEW_PIC,
} from '../constants/constants.js';

const initialState = {
  rating: 3,
  over: 0,
};

export default function rating(state = initialState, action) {
  switch (action.type) {

    case GET_RATING:
      return { ...state, rating: action.payload };

    case GET_OVER:
      return { ...state, over: action.payload };

    case NEW_PIC:
      return { ...state, over: 0, rating: 3 };

    default:
      return state;
  }
}