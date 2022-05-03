import React from "react";

const Discount = () => {
  return (
    <div>
      <div className="flex gap-10 p-10">
        <div className="relative">
          <img src="https://i.ibb.co/9htX7Ym/iphone.webp" alt="" />
          <span className="absolute top-24 left-20 text-white ">
            <p className="font-mono py-2 text-xl">Holiday Deals</p>
            <h1 className="font-semibold">
              <span className="text-5xl block pb-2"> Up to </span>
              <span className="text-7xl"> 30% off</span>
            </h1>
            <p className="py-2 font-mono">On Every Smartphone Brands</p>
          </span>
        </div>
        <div className="relative">
          <img src="https://i.ibb.co/dPLMRtn/head-Phone.webp" alt="" />
          <span className="absolute top-20 left-20 text-white">
            <p className="font-mono py-2 text-xl">Just In</p>
            <h1 className="font-semibold text-5xl">
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
