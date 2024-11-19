import React from 'react';

function Hero() {
  return (
    <section className="self-center my-36 ml-2.5 max-w-full w-[999px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[71%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start text-xl text-zinc-900 max-md:mt-10 max-md:max-w-full">
            <h1 className="text-5xl font-bold leading-tight">Nike 品質保證。</h1>
            <p className="self-stretch mt-3 tracking-wide leading-7 max-md:max-w-full">
            購買認證的翻新產品，享受一年保固服務以及 Nike 認證的翻新產品
            <br />
            卓越品質承諾。
            </p>
            <a href="#" className="mt-3 tracking-wide leading-none text-sky-600">進一步了解</a>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-base text-center text-white max-md:mt-10">
            <button className="overflow-hidden px-16 py-3 bg-neutral-900 rounded-[30px] max-md:px-5">Buy Now</button>
            <button className="overflow-hidden px-16 py-3 mt-5 bg-neutral-900 rounded-[30px] max-md:px-5">Recycle Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
