import React from "react";
import Marquee from "./Marquee";

const Marquees = () => {
  const images = [
    [
      "https://assets_global.website_files.com/6334198f239547d0f9cd84b3/633576760319d7600c72bdc3_yahoo-white.svg",
      "https://assets_global.website_files.com/6334198f239547d0f9cd84b3/63357676fe5516782a900fd_spotify.svg",
      "https://assets_global.website_files.com/6334198f239547d0f9cd84b3/633576761f08ef9cb13e81f2_mural.svg",
      "https://assets_global.website_files.com/6334198f239547d0f9cd84b3/63357676b5110b6f1d82849_haufe.svg",
      "https://assets_global.website_files.com/6334198f239547d0f9cd84b3/63dd9fbede080fcfb8cab925_singularity.svg",
      "https://assets_global.website_files.com/6334198f239547d0f9cd84b3/63357676fe5516782a900fd_spotify.svg",
    ],
    [
      "https://assets_global.website_files.com/6334198f239547d0f9cd84b3/633576760319d7600c72bdc3_yahoo-white.svg",
      "https://assets_global.website_files.com/6334198f239547d0f9cd84b3/63357676fe5516782a900fd_spotify.svg",
      "https://assets_global.website_files.com/6334198f239547d0f9cd84b3/633576761f08ef9cb13e81f2_mural.svg",
      "https://assets_global.website_files.com/6334198f239547d0f9cd84b3/63357676b5110b6f1d82849_haufe.svg",
      "https://assets_global.website_files.com/6334198f239547d0f9cd84b3/63dd9fbede080fcfb8cab925_singularity.svg",
      "https://assets_global.website_files.com/6334198f239547d0f9cd84b3/63357676fe5516782a900fd_spotify.svg",
    ],
  ];

  return (
    <div className="py-20 mt-32">
      {images.map((item, index) => (
        <Marquee imgUrls={item} key={index} />
      ))}
    </div>
  );
};

export default Marquees;
