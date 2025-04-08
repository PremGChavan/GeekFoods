import React from "react";
import img from "../assets/image1.avif";

const Section2 = () => {
  return (
    <section className="w-full h-auto static overflow-hidden flex flex-col items-center p-4 
                        lg:relative lg:h-screen lg:flex-row lg:justify-end lg:px-8 lg:py-16">
      <div className="w-full h-80 mb-8 static lg:absolute lg:left-[2%] lg:top-[17%] lg:w-1/2 lg:h-[75%] lg:mb-0 z-[1]">
        <img 
          src={img} 
          alt="Descriptive Image" 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="w-full h-auto bg-[aliceblue] flex flex-col justify-center items-start p-16 -mt-8 
                      lg:w-[55%] lg:h-[120%] lg:pl-48 lg:pr-16 lg:mt-0">

        <h2 className="text-2xl mb-4 text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
        </h2>

        <p className="text-base text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
        </p>

        <button className="px-12 py-3 bg-[#3c25eb] text-white rounded-md text-base transition-colors duration-150hover:bg-white hover:text-[#3c25eb] border border-transparent hover:border-[#3c25eb]"
        >
            Get in touch
        </button>
        
      </div>
    </section>
  );
};

export default Section2;
