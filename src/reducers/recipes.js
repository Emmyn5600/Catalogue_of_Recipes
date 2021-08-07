import { LOAD_RECIPES_SUCCESS } from '../actions';

const recipes = (state = [], action) => {
  switch (action.type) {
    case LOAD_RECIPES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default recipes;
