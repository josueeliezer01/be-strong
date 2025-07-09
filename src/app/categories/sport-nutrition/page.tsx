import React from 'react';
import ProductCard from '@/Components/ProductCard/ProductCard';
import { products } from '@/data/products';

export default function SportNutritionPage() {
  const filtered = products.filter((p) => p.sportNutrition);

  return (
    <main className="container">
      <h1>Sport Nutrition</h1>
      <div className="products-grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
