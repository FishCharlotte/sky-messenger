import React from 'react';

function NavLinks() {
  const links = [
    "New & Featured",
    "Men",
    "Women",
    "Kids",
    "Sale",
    "SNKRS"
  ];

  return (
    <nav className="flex text-base text-neutral-900 max-md:max-w-full">
      {links.map((link, index) => (
        <a key={index} href="#" className="px-3 py-6 bg-neutral-100 max-md:pr-5">
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavLinks;
