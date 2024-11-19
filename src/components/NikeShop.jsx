import React from 'react';
import Header from './Header';
import Hero from './Hero';
import ProductGrid from './ProductGrid';
import JordanChilesPicks from './JordanChilesPicks';
import Footer from './Footer';

function NikeShop() {
  return (
    <div className="flex z-0 flex-col items-center pb-20 w-full bg-neutral-100 max-md:max-w-full">
        <div className="flex overflow-hidden z-10 flex-col items-center self-stretch px-20 pb-28 mt-0 bg-neutral-100 max-md:px-5 max-md:pb-24 max-md:mt-0 max-md:-mr-1 max-md:max-w-full">
            <div className="flex flex-col mb-0 max-w-full w-[1491px] max-md:mb-2.5">
                <Header />
                <Hero />
                <JordanChilesPicks />
                <h2 className="mt-48 text-3xl font-bold tracking-normal leading-none text-center text-zinc-900 max-md:mt-10">選購翻新產品</h2>
                <ProductGrid />
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default NikeShop;
