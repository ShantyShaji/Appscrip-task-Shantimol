"use client";

import { useState } from "react";

const filters = [
  {
    name: "IDEAL FOR",
    options: ["Men", "Women", "Baby & Kids"],
  },
  {
    name: "OCCASION",
    options: ["Casual", "Formal", "Party"],
  },
  {
    name: "WORK",
    options: ["Office", "Outdoor", "Daily Wear"],
  },
  {
    name: "FABRIC",
    options: ["Cotton", "Silk", "Linen"],
  },
  {
    name: "SEGMENT",
    options: ["Women", "Men", "Kids"],
  },
  {
    name: "SUITABLE FOR",
    options: ["All", "Adults", "Kids"],
  },
  {
    name: "RAW MATERIALS",
    options: ["Cotton", "Wool", "Leather"],
  },
  {
    name: "PATTERN",
    options: ["Solid", "Printed", "Striped"],
  },
];

export default function FilterSidebar() {
  const [openFilters, setOpenFilters] = useState<string[]>([
    "IDEAL FOR",
  ]);

  // Store selected checkboxes for each filter
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string[]>
  >({});

  const toggleFilter = (filterName: string) => {
    setOpenFilters((prev) =>
      prev.includes(filterName)
        ? prev.filter((item) => item !== filterName)
        : [...prev, filterName]
    );
  };

  // Handle checkbox selection
  const handleCheckboxChange = (
    filterName: string,
    option: string
  ) => {
    setSelectedOptions((prev) => {
      const currentOptions = prev[filterName] || [];

      const isSelected = currentOptions.includes(option);

      return {
        ...prev,
        [filterName]: isSelected
          ? currentOptions.filter((item) => item !== option)
          : [...currentOptions, option],
      };
    });
  };

  const handleSelectAll = (
    filterName: string,
    options: string[]
  ) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [filterName]: options,
    }));
  };

  // Unselect all options for only this filter
  const handleUnselectAll = (filterName: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [filterName]: [],
    }));
  };

  return (
    <aside className="filter-sidebar">

      {/* CUSTOMIZABLE */}
      <label className="customizable">
        <input type="checkbox" />
        <span>CUSTOMIZABLE</span>
      </label>

      {/* FILTERS */}
      {filters.map((filter) => {
        const isOpen = openFilters.includes(filter.name);

        const selected = selectedOptions[filter.name] || [];

        return (
          <div className="filter-group" key={filter.name}>

            {/* FILTER TITLE */}
            <button
              type="button"
              className="filter-title"
              onClick={() => toggleFilter(filter.name)}
              aria-expanded={isOpen}
            >
              <span>{filter.name}</span>

              <span
                className={`filter-arrow ${isOpen ? "filter-arrow-open" : ""
                  }`}
              >
                <img src="/arrow-left.png" alt="Arrow" />
              </span>
            </button>

            {/* ALWAYS VISIBLE */}
            <button
              type="button"
              className="filter-value"
              aria-label={`Select all ${filter.name} options`}
              onClick={() =>
                handleSelectAll(filter.name, filter.options)
              }
            >
              All
            </button>

            {/* COLLAPSIBLE OPTIONS */}
            <div
              className={`filter-extra ${isOpen ? "filter-extra-open" : ""
                }`}
            >
              <div className="filter-extra-inner">

                {/* UNSELECT ALL */}
                <button
                  type="button"
                  className="unselect-all"
                  onClick={() =>
                    handleUnselectAll(filter.name)
                  }
                >
                  Unselect all
                </button>

                {/* CHECKBOXES */}
                <div className="checkbox-options">
                  {filter.options.map((option) => (
                    <label
                      className="filter-checkbox"
                      key={option}
                    >
                      <input
                        type="checkbox"
                        value={option}
                        checked={selected.includes(option)}
                        onChange={() =>
                          handleCheckboxChange(
                            filter.name,
                            option
                          )
                        }
                      />

                      <span>{option}</span>
                    </label>
                  ))}
                </div>

              </div>
            </div>

          </div>
        );
      })}
    </aside>
  );
}