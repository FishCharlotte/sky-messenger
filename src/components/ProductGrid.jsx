import React from 'react';
import ProductCard from './ProductCard';

function ProductGrid() {
    const products = [
        { id: 1, image: "shoe1.png", tag: "Bestseller", name: "Nike Air Force 1 '07", category: "Men's Shoes", colors: 2, price: "HK$165" },
        { id: 2, image: "shoe2.png", tag: "Bestseller", name: "Nike Air Force 1 '07 Fresh", category: "Men's Shoes", colors: 1, price: "HK$219" },
        { id: 3, image: "shoe3.png", tag: "Bestseller", name: "Nike Air Force 1 '07", category: "Women's Shoes", colors: 3, price: "HK$165" },
        { id: 4, image: "shoe4.png", name: "Nike Air Force 1 '07 EasyOn", category: "Shoes", colors: 1, price: "HK$189" },
        { id: 5, image: "shoe5.png", name: "Nike Air Force 1 '07", category: "Men's Shoes", colors: 4, price: "HK$189" },
        { id: 6, image: "shoe6.png", name: "Nike Air Force 1 '07", category: "Men's Shoe", colors: 1, price: "HK$165" },
        { id: 7, image: "shoe7.png", name: "Nike Air Force 1 '07 Essential", category: "Women's Shoes", colors: 1, price: "HK$189" },
        { id: 8, image: "shoe8.png", name: "Nike Air Force 1 LE", category: "Older Kids' Shoes", colors: 2, price: "HK$129" },
        { id: 9, image: "shoe9.png", name: "Nike Air Force 1", category: "Older Kids' Shoes", colors: 4, price: "HK$129" },
      ];

  return (
    <section className="mt-14 max-w-full w-[1556px] max-md:mt-10">
      <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
