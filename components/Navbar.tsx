import Image from "next/image";
import React from "react";

export const Navbar = () => {
  const routes: string[] = ["Home", "About Us", "Features", "Solution"];

  return (
    <>
      <div className="z-10 w-full fixed flex justify-center top-[2.25rem]">
        <div className="w-full max-w-[80rem] mx-auto text-white  flex items-center justify-between">
          <div className="flex items-center gap-[4px] text-[1.125rem]">
            <Image
              src={"/images/logo.svg"}
              className="h-auto w-auto cover"
              width={32}
              height={32}
              alt=""
              id="logo"
              loading="eager"
            />
            <h1>
              Hoo<span className="text-[#5CE1E6]">Bank</span>
            </h1>
          </div>
          <div className="flex items-center gap-[3.5rem] ">
            {routes?.map((route, index) => (
              <a key={index}>{route}</a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
