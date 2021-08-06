import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = (props) => {
  const { categories } = props;
  return (
    <div className="filter-book d-flex flex-center">
      <select
        name="filter"
        id="filter"
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
};

export default CategoryFilter;
