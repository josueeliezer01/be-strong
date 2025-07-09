import React from 'react';
import ProductCard from '@/Components/ProductCard/ProductCard';
import { products } from '@/data/products';

export default function WellnessPage() {
  const filtered = products.filter((p) => p.wellness);

  return (
    <main className="container">
      <h1>Wellness</h1>
      <div className="products-grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
