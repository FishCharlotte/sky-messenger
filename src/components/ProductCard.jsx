import React from 'react';

function ProductCard({ image, name, category, colors, price, isBestseller }) {
  return (
    <article className="flex flex-col max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-start text-base text-neutral-900 max-md:mt-4 max-md:max-w-full">
        <img loading="lazy" src={image} alt={name} className="object-contain self-stretch w-full aspect-square max-md:max-w-full" />
        {isBestseller && <div className="mt-5 text-orange-800">Bestseller</div>}
        <h3 className="mt-4 leading-6">
          {name}
          <br />
          <span className="text-neutral-500">{category}</span>
        </h3>
        <div className="mt-3.5 text-center text-neutral-500 max-md:ml-2.5">
          {colors} {colors === 1 ? 'Colour' : 'Colours'}
        </div>
        <div className="mt-5">{price}</div>
      </div>
    </article>
  );
}

export default ProductCard;
