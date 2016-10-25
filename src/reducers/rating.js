import {
  GET_RATING,
  GET_OVER,
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

    default:
      return state;
  }
}