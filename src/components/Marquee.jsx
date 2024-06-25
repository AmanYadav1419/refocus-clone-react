import React from "react";

const Marquee = ({ imgUrls }) => {
  return (
    <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
      {imgUrls.map((url) => (
        <img src={url} className="w-[6vw] flex-shrink-0" />
      ))}
      {imgUrls.map((url) => (
        <img src={url} className="flex-shrink-0" />
      ))}
    </div>
  );
};

export default Marquee;
