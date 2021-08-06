import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter, loadCategoriesAsync, loadRecipes } from '../actions';
import Recipe from '../components/Recipe';
import CategoryFilter from '../components/CategoryFilter';

class RecipesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 'All',
    };
  }

  componentDidMount() {
    const { loadRecipes, loadCategories } = this.props;
    loadRecipes();
    loadCategories();
  }

  handleChangeFilter = (e) => {
    const { changeFilter } = this.props;
    this.setState({ currentFilter: e.target.value });
    changeFilter(e.target.value);
  };

  renderFilteredRecipes = (recipes, filter) => {
    if (filter === 'All') return recipes;
    return recipes.filter((recipe) => recipe.strCategory.includes(filter));
  };

  render() {
    const { currentFilter } = this.state;
    const { recipes, categories, filter } = this.props;
    const allRecipes = this.renderFilteredRecipes(recipes, filter);
    return (
      <div className="recipes-wrapper">
        <CategoryFilter
          categories={categories}
          currentFilter={currentFilter}
          onChangeFilter={this.handleChangeFilter}
        />
        {allRecipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.idMeal} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  categories: state.categories.list,
  filter: state.filter,
});

const mapDispatchToProps = {
  loadRecipes: () => loadRecipes(),
  loadCategories: () => loadCategoriesAsync(),
  changeFilter: (filter) => changeFilter(filter),
};

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loadRecipes: PropTypes.func.isRequired,
  loadCategories: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
