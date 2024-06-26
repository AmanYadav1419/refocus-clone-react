import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h1 className="mb-10 text-zinc-500 capitalize">social</h1>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, key) => (
              <a key={key} className="block mt-2 capitalize text-zinc-600 ">
                {item}
              </a>
            ))}
          </div>

          <div className="basis-1/3">
            <h1 className="mb-10 text-zinc-500 capitalize">sitemao</h1>
            {["home", "work", "careers", "contacts"].map((item, key) => (
              <a key={key} className="block mt-2 capitalize text-zinc-600 ">
                {item}
              </a>
            ))}
          </div>

          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right font-medium">
              refokus is a pionerring digital agency driven by design and
              empowered by technology.
              <img
                src="https://assets_global.website_files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg"
                className="w-32 mt-10"
                alt=""
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
