"use client";

import { useState } from "react";

const companyLinks = [
  "About Us",
  "Stories",
  "Artisans",
  "Boutiques",
  "Contact Us",
  "EU Compliances Docs",
];

const quickLinks = [
  "Orders & Shipping",
  "Join/Login as a Seller",
  "Payment & Pricing",
  "Return & Refunds",
  "FAQs",
  "Privacy Policy",
  "Terms & Conditions",
];

const paymentMethods = [
  {
    name: "Google Pay",
    img: "/Gpay.svg",
  },
  {
    name: "Mastercard",
    img: "/master.svg",
  },
  {
    name: "PayPal",
    img: "/pp.svg",
  },
  {
    name: "American Express",
    img: "/AMEX.svg",
  },
  {
    name: "Apple Pay",
    img: "/Apay.svg",
  },
  {
    name: "Shop Pay",
    img: "/Qpay.svg",
  },
];

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="footer-links-section">
      <button
        type="button"
        className="footer-section-heading"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className={`footer-chevron ${isOpen ? "footer-chevron-open" : ""}`}>
          <img src="/arrow-white.svg" alt="Arrow" />
        </span>
      </button>

      <ul className={`footer-links ${isOpen ? "is-open" : ""}`}>
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [followOpen, setFollowOpen] = useState(false);

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Demo only: connect to a subscription API for production.
    if (email.trim()) {
      setSubscribed(true);
    }
  }

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Newsletter and contact */}
        <div className="footer-top">
          <section className="footer-newsletter">
            <h2>BE THE FIRST TO KNOW</h2>
            <p>Sign up for updates from mettā muse.</p>

            <form
              className="newsletter-form"
              onSubmit={handleSubscribe}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>

              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your e-mail..."
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSubscribed(false);
                }}
                required
              />

              <button type="submit">SUBSCRIBE</button>
            </form>

            {subscribed && (
              <p className="newsletter-message" role="status">
                Demo submission received. No subscription was created.
              </p>
            )}
          </section>

          <div className="footer-contact">
            <section className="contact-section">
              <h2 className="desktop-contact-title">CONTACT US</h2>
              <h2 className="mobile-contact-title">CALL US</h2>

              <div className="contact-details">
                <a href="tel:+442211335360">
                  +44 221 133 5360
                </a>
                <span className="contact-separator">◆</span>
                <a href="mailto:customercare@mettamuse.com">
                  customercare@mettamuse.com
                </a>
              </div>
            </section>

            <section className="currency-section">
              <h2>CURRENCY</h2>
              <p className="currency-value">
                <span aria-hidden="true">
                  <img
                    className="usa"
                    src="/USA.svg"
                    alt="USA flag"
                  />
                </span>

                <img
                  src="/Star1.svg"
                  alt="star image"
                />

                USD
              </p>
              <p className="currency-note">
                Transactions will be completed in Euros and a currency
                reference is available on hover.
              </p>
            </section>
          </div>
        </div>

        {/* Navigation and payments */}
        <div className="footer-bottom">
          <FooterLinks
            title="mettā muse"
            links={companyLinks}
          />

          <FooterLinks
            title="QUICK LINKS"
            links={quickLinks}
          />

          <div className="footer-social-payment">
            <section className="footer-social">
              <button
                type="button"
                className="footer-section-heading"
                onClick={() => setFollowOpen(!followOpen)}
                aria-expanded={followOpen}
              >
                <span>FOLLOW US</span>

                <span className={`footer-chevron ${followOpen ? "footer-chevron-open" : ""}`}>
                  <img src="/arrow-white.svg" alt="Arrow" />
                </span>
              </button>

              <div
                className={`social-icons ${followOpen ? "is-open" : ""
                  }`}
              >
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <img src="/Insta.svg" alt="Instagram" />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src="/linkedin.svg" alt="LinkedIn" />
                </a>
              </div>
            </section>

            <section className="footer-payments">
              <h2>mettā muse ACCEPTS</h2>

              <div className="payment-methods">
                {paymentMethods.map((payment) => (
                  <span
                    key={payment.name}
                    className="payment-badge"
                    role="img"
                    aria-label={payment.name}
                  >
                    <img
                      src={payment.img}
                      alt={payment.name}
                    />
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>

        <p className="footer-copyright">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}