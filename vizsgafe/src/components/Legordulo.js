import React from 'react';
import '../styles.css';

function Legordulo({ categories, onCategoryChange }) {
  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <select onChange={onCategoryChange}>
          <option value="">Select Category</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.kategorianev}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Legordulo;
