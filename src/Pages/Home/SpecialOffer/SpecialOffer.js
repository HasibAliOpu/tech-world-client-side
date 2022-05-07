import React from "react";

const SpecialOffer = () => {
  return (
    <div className="my-5 relative">
      <img
        className="w-full"
        src="https://i.ibb.co/7KY24J7/c837a6-ecf32c7284d4430582fcc90f60a1b4e6-mv2.webp"
        alt=""
      />
      <div className="absolute top-5 md:top-52 left-5 md:left-36 mb-1">
        <p className="bg-red-600 rounded-full text-white inline-block py-1 px-3 md:text-base text-xs font-mono">
          Today's Special
        </p>
        <h1 className="md:text-3xl text-xs md:my-3 my-1">
          Best Arial View in Town
        </h1>
        <h1 className="font-bold md:text-9xl md:my-3 my-1 text-xl tracking-wider">
          <span className="text-indigo-500">30%</span> OFF
        </h1>
        <h3 className="md:text-2xl text-xs font-mono text-blue-600">
          on professional camera Drone
        </h3>
      </div>
    </div>
  );
};

export default SpecialOffer;
