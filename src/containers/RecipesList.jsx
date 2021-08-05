import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadRecipes } from '../actions';

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
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>Pizza</li>
        ))}
      </ul>
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
