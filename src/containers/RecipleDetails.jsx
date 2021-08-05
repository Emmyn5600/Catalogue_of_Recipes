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
  return (<h1>{selectedRecipe.strMeal}</h1>);
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
