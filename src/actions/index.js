const endPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const LOAD_RECIPES_SUCCESS = 'LOAD_RECIPES_SUCCESS';

export const loadRecipes = () => async (dispatch) => {
  try {
    const res = await fetch(endPoint);
    const data = await res.json();
    console.log(data);
    dispatch({ type: LOAD_RECIPES_SUCCESS });
  } catch (error) {
    console.log(error);
  }
};
