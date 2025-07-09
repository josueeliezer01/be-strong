import React from 'react';
import ProductCard from '@/Components/ProductCard/ProductCard';
import { products } from '@/data/products';

export default function PetNutritionPage() {
  const filtered = products.filter((p) => p.petNutrition);

  return (
    <main className="container">
      <h1>Pet Nutrition</h1>
      <div className="products-grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
