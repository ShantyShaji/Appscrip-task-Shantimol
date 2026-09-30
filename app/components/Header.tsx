"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">

      <div className="header-main">

        <div className="header-left">

          <button
            type="button"
            className="mobile-menu"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>

          <div className="brand-symbol" aria-label="Brand logo">
            <img src="/Logo.svg" alt="Brand Logo" />
          </div>

        </div>

        <div className="logo">LOGO</div>

        <div className="header-actions">

          <button type="button" aria-label="Search">
            <img src="/search-normal.svg" alt="Search" />
          </button>

          <button type="button" aria-label="Wishlist">
            <img src="/heart.svg" alt="Wishlist" />
          </button>

          <button type="button" aria-label="Bag">
            <img src="/shopping-bag.svg" alt="Bag" />
          </button>

          <button
            type="button"
            className="account-button"
            aria-label="Account"
          >
            <img src="/profile.svg" alt="Account" />
          </button>

          <button type="button" className="language">
            ENG
            <span>
              <img src="/arrow-left.png" alt="Arrow" />
            </span>
          </button>

        </div>
      </div>

      {/* DESKTOP NAVIGATION */}

      <nav className="desktop-navigation">
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </nav>


      {/* MOBILE DRAWER */}

      <div
        className={`mobile-drawer-overlay ${menuOpen ? "drawer-overlay-open" : ""
          }`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      >
        <aside
          className={`mobile-drawer ${menuOpen ? "mobile-drawer-open" : ""
            }`}
          onClick={(event) => event.stopPropagation()}
        >

          <div className="mobile-drawer-header">

            <div className="mobile-drawer-logo">
              <img src="/Logo.svg" alt="Brand Logo" />
              <span>LOGO</span>
            </div>

            <button
              type="button"
              className="drawer-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ×
            </button>

          </div>


          <nav className="mobile-navigation">

            <a href="#" onClick={closeMenu}>
              SHOP
            </a>

            <a href="#" onClick={closeMenu}>
              SKILLS
            </a>

            <a href="#" onClick={closeMenu}>
              STORIES
            </a>

            <a href="#" onClick={closeMenu}>
              ABOUT
            </a>

            <a href="#" onClick={closeMenu}>
              CONTACT US
            </a>

          </nav>


          {/* Hidden mobile-header items */}

          <div className="mobile-drawer-options">

            <button type="button">
              <img src="/profile.svg" alt="Profile" />
              <span>ACCOUNT</span>
            </button>

            <button type="button">
              <span>ENG</span>
              <img
                src="/arrow-left.png"
                alt="arrow"
                className="drawer-language-arrow"
              />
            </button>

          </div>

        </aside>
      </div>

    </header>
  );
}