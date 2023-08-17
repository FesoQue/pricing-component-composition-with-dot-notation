import React from "react";

const Header = () => {
  return (
    <header className="text-center pt-20 mb-[110px]">
      <h1 className="text-4xl text-[#231D4F] font-bold mb-5">
        Simple, Pricing Component
      </h1>
      <p className="text-[#848199] text-xl mb-10">
        No Contracts. No Suprises fees
      </p>
      <div className="w-[220px] h-[44px] flex items-center bg-white rounded-full mx-auto overflow-hidden">
        <button className="w-1/2 h-full bg-[#5243C2] text-[#F496D1] text-sm uppercase rounded-full">
          monthly
        </button>
        <button className="w-1/2 h-full text-[#848199] text-sm uppercase rounded-full">
          yearly
        </button>
      </div>
    </header>
  );
};

export default Header;
