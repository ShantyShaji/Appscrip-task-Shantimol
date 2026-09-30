"use client";

import { useState } from "react";

import FilterBar from "./FilterBar";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";
import { products } from "../data/products";

export default function Catalog() {
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <div className="catalog-container">
      <FilterBar onFilterToggle={setFilterVisible} />

      <div
        className={`catalog-content ${
          !filterVisible ? "filter-hidden" : ""
        }`}
      >
        <div className="filter-sidebar-wrapper">
          <FilterSidebar />
        </div>

        <ProductGrid products={products} />
      </div>
    </div>
  );
}