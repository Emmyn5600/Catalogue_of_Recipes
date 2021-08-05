import { combineReducers } from 'redux';
import recipes from './recipes';
import categories from './categories';

const rootReducer = combineReducers({
  recipes, categories,
});

export default rootReducer;
