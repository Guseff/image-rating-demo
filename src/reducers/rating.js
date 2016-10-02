import {
  GET_RATING,
} from '../constants/constants.js';

const initialState = {
  rating: 0,
};

export default function rating(state = initialState, action) {
  switch (action.type) {

    case GET_RATING:
      return { ...state, rating: action.payload };

    default:
      return state;
  }
}