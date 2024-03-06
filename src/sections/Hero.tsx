import React from "react";

const Hero = () => {
  return (
    <section className="h-screen hero flex items-center pl-[9.75rem]">
      <div className="flex flex-col gap-6 text-white mt-[2rem] max-w-2xl">
        <h1 className="text-4xl font-[400] uppercase">
          welcome to our marketplace
        </h1>
        <p className="text-[#ccd0d7] text-[1rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi
          metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu
          lacus ...
        </p>
        <div className="flex gap-4 items-center mt-1">
          <button className="w-[7.8rem] h-11 text-[0.875rem] hover:bg-primary-color hover:border-none text-white uppercase border-2 rounded transition-all duration-300 ease-in">
            view more
          </button>
          <button className="w-[7.85rem] h-11 text-[0.875rem] hover:bg-primary-color hover:border-none text-white uppercase border-2 rounded transition-all duration-300 ease-in">
            video tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
