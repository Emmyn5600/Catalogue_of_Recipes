import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const RecipeDetails = (props) => {
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const { match, history, recipes } = props;
  const { params } = match;
  const { id } = params;
  useEffect(() => {
    if (!id) return history.replace('/');
    const recipe = recipes.find((r) => r.idMeal === id);
    if (!recipe) return history.replace('/');
    return setSelectedRecipe(recipe);
  }, []);

  const myIngredients = [];
  Object.keys(selectedRecipe).map((key, index) => (key.startsWith('strIngredient') && selectedRecipe[key] !== ''
    ? myIngredients.push({ name: selectedRecipe[key], id: index })
    : ''));
  return (
    <div>
      <div className="image-wrapper-1">
        <img src={selectedRecipe.strMealThumb} alt="recipe" />
        <div className="recipe-details">
          <h3 className="name">{selectedRecipe.strInstructions}</h3>
        </div>
        <div className="category-list">
          <h1>Ingredient</h1>
          <ul className="category-details">
            {myIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

RecipeDetails.defaultProps = {
  history: {},
  match: {
    params: { id: '11' },
  },
};

RecipeDetails.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  history: PropTypes.objectOf(PropTypes.any),
  match: PropTypes.objectOf(PropTypes.any),
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

export default connect(mapStateToProps)(RecipeDetails);
