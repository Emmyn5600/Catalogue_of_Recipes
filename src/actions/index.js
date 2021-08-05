const endPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const LOAD_RECIPES_SUCCESS = 'LOAD_RECIPES_SUCCESS';
export const LOAD_RECIPES_ERROR = 'LOAD_RECIPES_ERROR';

export const loadRecipes = () => async (dispatch) => {
  console.log('loadRecipes');
  try {
    const res = await fetch(endPoint);
    const data = await res.json();
    dispatch({ type: LOAD_RECIPES_SUCCESS, payload: data.meals });
  } catch (error) {
    dispatch({ type: LOAD_RECIPES_ERROR, payload: error.message});
  }
};
