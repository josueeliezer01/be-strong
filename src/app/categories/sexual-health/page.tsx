import React from 'react';
import ProductCard from '@/Components/ProductCard/ProductCard';
import { products } from '@/data/products';

export default function SexualHealthPage() {
  const filtered = products.filter((p) => p.sexualHealth);

  return (
    <main className="container">
      <h1>Sexual Health</h1>
      <div className="products-grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
