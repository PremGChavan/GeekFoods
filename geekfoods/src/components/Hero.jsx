import React from 'react';
import bgImage from '../assets/image2.jpeg'; // adjust path as needed

const Hero = () => {
  return (

    <section
      className="relative bg-cover bg-l bg-no-repeat h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
    <div className="relative z-10 max-w-4xl px-4 text-white">
      <h1 className="text-4xl md:text-6xl font-bold">
        Let us find your <br />
        <span className="text-pink-600">Forever Food.</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Nesciunt illo tenetur fuga ducimus numquam ea!
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <button className="bg-pink-600 text-white px-6 py-3 rounded-md font-semibold">
          Search Now
        </button>
        <button className="bg-white text-black px-6 py-3 rounded-md font-semibold">
          Know more
        </button>
      </div>
    </div>
  </section>
  
  );
};

export default Hero;
