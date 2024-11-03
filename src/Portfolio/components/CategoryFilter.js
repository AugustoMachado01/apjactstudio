import React from "react";
import styles from "./styles/CategoryFilter.module.css";

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
  // Mapeamento de nomes para exibição em português
  const categories = [
    { label: "Todos", value: "All" },
    { label: "Casamento", value: "Wedding" },
    { label: "Produto", value: "Product" },
    { label: "Comida", value: "Food" },
    { label: "Moda", value: "Fashion" },
  ];

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <span
          key={category.value}
          onClick={() => onSelectCategory(category.value)}
          className={selectedCategory === category.value ? styles.active : ""}
        >
          {category.label}
        </span>
      ))}
    </div>
  );
};

export default CategoryFilter;
