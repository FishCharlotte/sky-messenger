import React from 'react';

function SearchBar() {
  return (
    <div className="flex pr-2 mt-2.5 text-base whitespace-nowrap rounded-3xl bg-neutral-100 text-neutral-500">
      <img loading="lazy" src="search-icon.svg" alt="Search icon" className="object-contain shrink-0 w-9 aspect-square rounded-[30px]" />
      <div className="flex overflow-hidden flex-col justify-center px-0.5 py-1.5 rounded-3xl bg-neutral-100">
        <input type="text" placeholder="Search" className="overflow-hidden py-1.5 bg-neutral-100 max-md:pr-5" aria-label="Search Nike products" />
      </div>
    </div>
  );
}

export default SearchBar;
