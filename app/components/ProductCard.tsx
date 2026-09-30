"use client";

import { useState } from "react";
import Image from "next/image";

import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleWishlist = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="product-image"
        />
      </div>

      <div className="product-info">
        <div className="product-title-row">
          <h2>{product.title}</h2>
        </div>

        <div className="product-description">
          <p>
            <u>Sign in</u> or Create an account to see pricing
          </p>

          <button
            type="button"
            className={`wishlist ${isLiked ? "wishlist-active" : ""}`}
            onClick={handleWishlist}
            aria-label={
              isLiked
                ? `Remove ${product.title} from wishlist`
                : `Add ${product.title} to wishlist`
            }
          >
            <img
              src={isLiked ? "/redheart.svg" : "/heart.svg"}
              alt="wishlist"
            />
          </button>
        </div>
      </div>
    </article>
  );
}