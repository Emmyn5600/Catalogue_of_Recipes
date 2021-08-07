import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = (props) => {
  const { categories, currentFilter, onChangeFilter } = props;
  return (
    <div className="filter-recipes d-flex flex-center">
      <select
        name="filter"
        id="filter"
        value={currentFilter}
        onChange={onChangeFilter}
        required
      >
        <option value="All">All</option>
        {categories.map((categ) => (
          <option value={categ.strCategory} key={categ.idCategory}>
            {categ.strCategory}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  currentFilter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
