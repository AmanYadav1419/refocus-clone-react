import React from "react";
import Button from "./Button";

const NavBar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
     <div className="nleft flex items-center">
     <img
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt="logo"
      />
      <div className="Links flex gap-14 ml-20">
        {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
          elem.length === 0 ? (
            <span className="w-[2px] h-7 bg-zinc-700"></span>
          ) : (
            <a
              href="#"
              className="font-regular text-sm flex items-center gap-1"
            >
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.45em #00FF19" }}
                  className="inline-block w-1 h-1 rounded-full bg-green-500"
                ></span>
              )}
              {elem}
            </a>
          )
        )}
      </div>
     </div>
     <Button/>
    </div>
  );
};

export default NavBar;
