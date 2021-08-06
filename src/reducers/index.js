import { combineReducers } from 'redux';
import recipes from './recipes';
import categories from './categories';
import filter from './filter';

const rootReducer = combineReducers({
  recipes, categories, filter,
});

export default rootReducer;
