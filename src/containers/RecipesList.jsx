import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadRecipes } from '../actions';
import Recipe from '../components/Recipe';

class RecipesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { loadRecipes } = this.props;
    loadRecipes();
  }

  render() {
    const { recipes } = this.props;
    return (
      <div className="recipes-wrapper">
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.idMeal} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

const mapDispatchToProps = {
  loadRecipes: () => loadRecipes(),
};

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loadRecipes: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
