import React, { useEffect } from "react";
import { useLenisScroll } from "../hooks/useLenisScroll";
import { Navbar } from "../components/Navbar";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    useLenisScroll();
  }, []);

  return (
    <div className=" page-wrapper py-[2.25rem]" id="page scroll-container">
      <Navbar />
      <div className="page-content">{children}</div>
    </div>
  );
};

export default PageWrapper;
