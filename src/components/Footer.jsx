import React from 'react';

function Footer() {
  return (
    <footer className="flex z-0 flex-col justify-center items-center px-20 py-20 w-full text-base leading-loose text-center bg-white text-neutral-900 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col ml-8 w-full max-w-[1920px] max-md:max-w-full">
        <img loading="lazy" src="footer-logo.png" alt="Nike footer logo" className="object-contain w-full aspect-[47.62] max-md:max-w-full" />
        <div className="flex flex-col justify-center py-0.5 bg-white max-md:max-w-full">
          <div className="flex flex-col px-12 bg-white max-md:px-5 max-md:max-w-full">
            <nav className="flex flex-col justify-center items-center px-16 py-10 w-full bg-white max-md:px-5 max-md:max-w-full">
              <div className="flex gap-8 max-w-full w-[328px]">
                <a href="#">Find a Store</a>
                <a href="#">Help</a>
                <a href="#">Join Us</a>
                <a href="#">Sign In</a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
