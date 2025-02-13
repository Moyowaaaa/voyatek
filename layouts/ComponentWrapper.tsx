import React from "react";

const ComponentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className=" top-0
    w-full 
    h-max
    "
    >
      {children}
    </div>
  );
};

export default ComponentWrapper;
