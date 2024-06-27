// this component is a combine of all products component in a single component of Products.
import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

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

  const [position, setPosition] = useState(0);

  // function to update position value by 23
  const mover = (value) => {
    setPosition(value * 23);
  };
  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product  key={index} count={index} val={val} mover={mover} />
      ))}

      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[23rem] bg-white left-[44%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-100"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-300"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-400"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-500"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-600"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
