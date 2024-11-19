import React from 'react';
import SearchBar from './SearchBar';
import NavLinks from './NavLinks';

function Header() {
  return (
    <header className="flex gap-5 justify-between items-start px-11 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
      <img loading="lazy" src="logo.svg" alt="Nike logo" className="object-contain shrink-0 self-stretch aspect-[1.16] w-[79px]" />
      <NavLinks />
      <SearchBar />
      <div className="flex gap-1 mt-2.5">
        <img loading="lazy" src="like.svg" alt="User profile icon" className="object-contain shrink-0 w-9 aspect-square rounded-[30px]" />
        <img loading="lazy" src="cart.svg" alt="Shopping bag icon" className="object-contain shrink-0 w-9 aspect-square rounded-[30px]" />
      </div>
    </header>
  );
}

export default Header;
