import React from 'react';

function Legordulo({ categories, onCategoryChange }) {
  return (
    <select onChange={onCategoryChange}>
      <option value="">Válaszz kategóriát</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>{category.kategorianev}</option>
      ))}
    </select>
  );
}

export default Legordulo;
