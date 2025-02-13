"use client";

import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export const Navbar = () => {
  const routes: string[] = ["Home", "About Us", "Features", "Solution"];
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (navbarRef.current) {
      const tl = gsap.timeline();

      gsap.set(
        [
          navbarRef.current.children[0].children,
          navbarRef.current.children[1].children,
        ],
        { opacity: 0 }
      );

      tl.fromTo(
        [
          navbarRef.current.children[0].children,
          navbarRef.current.children[1].children,
        ],
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          ease: "power3.inOut",
          stagger: 0.1,
          delay: 0.5,
          duration: 1,
          opacity: 1,
        },
        "-=0.5"
      );
    }
  });

  return (
    <>
      <nav className="z-10 w-full fixed flex justify-center top-[2.25rem]">
        <div
          className="w-full
          max-h-max overflow-hidden
          max-w-[80rem] mx-auto text-white  flex items-center justify-between"
          ref={navbarRef}
        >
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
          <div className=" flex items-center gap-[3.5rem] ">
            {routes?.map((route, index) => (
              <a key={index}>{route}</a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};
