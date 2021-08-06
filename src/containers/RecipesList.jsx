import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadCategoriesAsync, loadRecipes } from '../actions';
import Recipe from '../components/Recipe';
import CategoryFilter from '../components/CategoryFilter';

class RecipesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { loadRecipes, loadCategories } = this.props;
    loadRecipes();
    loadCategories();
  }

  render() {
    const { recipes, categories } = this.props;
    return (
      <div className="recipes-wrapper">
        <CategoryFilter categories={categories} />
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.idMeal} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  categories: state.categories.list,
});

const mapDispatchToProps = {
  loadRecipes: () => loadRecipes(),
  loadCategories: () => loadCategoriesAsync(),
};

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loadRecipes: PropTypes.func.isRequired,
  loadCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
