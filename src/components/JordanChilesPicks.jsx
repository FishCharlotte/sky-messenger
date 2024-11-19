import React from 'react';

function Button({ text, className }) {
    return (
      <button className={`overflow-hidden py-3 bg-neutral-900 rounded-[30px] ${className}`}>
        {text}
      </button>
    );
  }

function ButtonGroup() {
    const buttons = [
      { text: "Shop Jordan Chiles' Picks", className: "px-9 max-md:px-5" },
      { text: "Shop Gifts", className: "px-7 max-md:px-5" }
    ];
  
    return (
      <div className="flex gap-1.5 mt-7 max-w-full text-base text-center text-white w-[345px]">
        {buttons.map((button, index) => (
          <Button key={index} text={button.text} className={button.className} />
        ))}
      </div>
    );
  }

function JordanChilesPicks() {
  return (
    <main className="flex overflow-hidden flex-col items-center">
        <section className="flex overflow-hidden flex-col self-stretch w-full bg-neutral-100 max-md:max-w-full">
        <img 
            loading="lazy" 
            src="ad.png"
            alt="Jordan Chiles' Nike Zenvy collection"
            className="object-contain w-full aspect-[2.88] max-md:max-w-full" 
        />
        </section>
        <h1 className="mt-11 text-8xl leading-none text-center uppercase text-neutral-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
      Jordan Chiles' Picks
    </h1>
    <p className="mt-6 text-base leading-6 text-center text-neutral-900 max-md:max-w-full">
      The champion gymnast finds balance in Nike Zenvy—the perfect blend of <br /> comfort and performance.
    </p>
      <ButtonGroup />
    </main>
  );
}

export default JordanChilesPicks;