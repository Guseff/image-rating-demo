import { combineReducers } from 'redux';

import image from './image';
import rating from './rating';
import text from './textarea';

export default combineReducers({
  image,
  rating,
  text,
});

