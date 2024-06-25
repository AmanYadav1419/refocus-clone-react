// this component is a combine of all products component in a single component of Products.
import React from "react";
import Product from "./Product";

const Products = () => {
  const products = [
    {
      title: "Arquite",
      description:
        "Its is an executive program for students to help students learning technical skills like web dev ,ai-ml, IOT",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Its is an executive program for students to help students learning technical skills like web dev ,ai-ml, IOT",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Its is an executive program for students to help students learning technical skills like web dev ,ai-ml, IOT",
      live: true,
      case: true,
    },
    {
      title: "YAHOO",
      description:
        "Its is an executive program for students to help students learning technical skills like web dev ,ai-ml, IOT",
      live: true,
      case: true,
    },
  ];

  return (
    <div className="mt-32">
      {products.map((val, index) => (
        <Product key={index} val={val} />
      ))}
    </div>
  );
};

export default Products;
