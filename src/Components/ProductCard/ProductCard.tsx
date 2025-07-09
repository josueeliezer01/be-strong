'use client';

import React from 'react';
import './ProductCard.css';
import { Product } from '@/data/products';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    image,
    name,
    description,
    price,
    stock,
    sportNutrition,
    healthyEating,
    wellness,
    weightLoss,
    sexualHealth,
    beautyCare,
    activewear,
    sportAccessories,
    techHome,
    petNutrition,
  } = product;

  // Monta uma lista de tags com base nos booleanos
  const tags = [
    sportNutrition && 'Sport Nutrition',
    healthyEating && 'Healthy Eating',
    wellness && 'Wellness',
    weightLoss && 'Weight Loss',
    sexualHealth && 'Sexual Health',
    beautyCare && 'Beauty & Care',
    activewear && 'Activewear',
    sportAccessories && 'Sport Accessories',
    techHome && 'Tech & Home',
    petNutrition && 'Pet Nutrition',
  ].filter(Boolean) as string[];

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>

        <div className="product-tags">
          {tags.map((tag) => (
            <span key={tag} className="product-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="product-footer">
          <span className="product-price">€{price.toFixed(2)}</span>
          <span
            className={`product-stock ${stock > 0 ? 'in-stock' : 'out-stock'}`}
          >
            {stock > 0 ? `${stock} in stock` : 'Out of stock'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
