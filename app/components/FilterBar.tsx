"use client";

import { useEffect, useRef, useState } from "react";
import FilterSidebar from "./FilterSidebar";

interface FilterBarProps {
  onFilterToggle: (isVisible: boolean) => void;
}

const sortOptions = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE : HIGH TO LOW",
  "PRICE : LOW TO HIGH",
];

export default function FilterBar({
  onFilterToggle,
}: FilterBarProps) {
  const [filterVisible, setFilterVisible] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");

  const sortRef = useRef<HTMLDivElement>(null);

  /* Close sort dropdown when clicking outside */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sortRef.current &&
        !sortRef.current.contains(event.target as Node)
      ) {
        setSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /* Prevent page scrolling when mobile filter drawer is open */
  useEffect(() => {
    if (mobileFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileFilterOpen]);

  /* Desktop filter */
  const handleFilterToggle = () => {
    const newState = !filterVisible;

    setFilterVisible(newState);
    onFilterToggle(newState);
  };

  /* Mobile/tablet filter */
  const handleMobileFilterOpen = () => {
    setMobileFilterOpen(true);
  };

  const handleMobileFilterClose = () => {
    setMobileFilterOpen(false);
  };

  const handleSortSelect = (option: string) => {
    setSelectedSort(option);
    setSortOpen(false);
  };

  return (
    <>
      <div className="filter-bar">

        {/* ITEM COUNT */}
        <div className="item-count">
          <strong>3425 ITEMS</strong>
        </div>

        {/* DESKTOP SHOW / HIDE FILTER */}
        <button
          type="button"
          className="hide-filter"
          onClick={handleFilterToggle}
          aria-label={
            filterVisible ? "Hide filter" : "Show filter"
          }
        >
          <span
            className={!filterVisible ? "arrow-rotated" : ""}
          >
            <img src="/arrow-left.png" alt="Arrow" />
          </span>

          <u>
            {filterVisible ? "HIDE FILTER" : "SHOW FILTER"}
          </u>
        </button>

        {/* TABLET / MOBILE FILTER */}
        <button
          type="button"
          className="mobile-filter"
          onClick={handleMobileFilterOpen}
        >
          FILTER
        </button>

        {/* SORT */}
        <div
          className="sort-wrapper"
          ref={sortRef}
        >
          <button
            type="button"
            className="sort-button"
            onClick={() => setSortOpen((prev) => !prev)}
            aria-expanded={sortOpen}
            aria-haspopup="listbox"
          >
            {selectedSort}

            <span
              className={
                sortOpen ? "sort-arrow-open" : ""
              }
            >
              <img
                src="/arrow-left.png"
                alt="Arrow"
              />
            </span>
          </button>

          {sortOpen && (
            <div
              className="sort-dropdown"
              role="listbox"
            >
              {sortOptions.map((option) => (
                <button
                  type="button"
                  key={option}
                  className={`sort-option ${selectedSort === option
                      ? "selected"
                      : ""
                    }`}
                  onClick={() =>
                    handleSortSelect(option)
                  }
                >
                  {selectedSort === option && (
                    <span className="checkmark">
                      ✓
                    </span>
                  )}

                  <span>{option}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>


      {/* =========================
          MOBILE / TABLET FILTER DRAWER
      ========================= */}

      <div
        className={`mobile-filter-overlay ${mobileFilterOpen
            ? "mobile-filter-overlay-open"
            : ""
          }`}
        onClick={handleMobileFilterClose}
      >
        <aside
          className={`mobile-filter-drawer ${mobileFilterOpen
              ? "mobile-filter-drawer-open"
              : ""
            }`}
          onClick={(event) =>
            event.stopPropagation()
          }
        >

          <div className="mobile-filter-header">
            <h2>FILTER</h2>

            <button
              type="button"
              className="mobile-filter-close"
              onClick={handleMobileFilterClose}
              aria-label="Close filter"
            >
              ×
            </button>
          </div>

          <div className="mobile-filter-content">
            <FilterSidebar />
          </div>

        </aside>
      </div>
    </>
  );
}