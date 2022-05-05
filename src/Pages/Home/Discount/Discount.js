import React from "react";

const Discount = () => {
  return (
    <div>
      <div className="md:flex gap-10 p-10">
        <div className="relative md:mb-0 mb-3">
          <img src="https://i.ibb.co/9htX7Ym/iphone.webp" alt="" />
          <span className="absolute md:top-24 top-0 md:left-20 left-5 text-white ">
            <p className="font-mono py-2 md:text-xl text-xs">Holiday Deals</p>
            <h1 className="font-semibold">
              <span className="md:text-5xl text-xs block pb-2"> Up to </span>
              <span className="md:text-7xl text-xs tracking-wide">
                {" "}
                30% off
              </span>
            </h1>
            <p className="py-2 font-mono">On Every Smartphone Brands</p>
          </span>
        </div>
        <div className="relative">
          <img src="https://i.ibb.co/dPLMRtn/head-Phone.webp" alt="" />
          <span className="absolute top-0 md:top-20 md:left-20 left-5 text-white">
            <p className="font-mono py-2 md:text-xl text-xs">Just In</p>
            <h1 className="font-semibold text-xs md:text-5xl tracking-wider">
              Take Your <br />
              Sound <br />
              Anywhere
            </h1>
            <p className="py-2 font-mono">Top Headphone Brands</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Discount;
