import React from "react";

const Stripe = ({ val }) => {
  return (
    // why width 16.66 because 100 percent width divide by 6 images answer is 16.66so each will 16.66%
    <div className="w-[16.66%] px-10 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] bg-zinc-600 flex justify-between items-center">
      <img src={val.url} alt="" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
};

export default Stripe;
