import Image from "next/image";
import React from "react";
const DiscountBar = () => {
  return (
    <div
      className="
rounded-[10px] bg-gradient-to-br from-[#272727] to-[#11101D]
w-max py-[7px] px-[10px] flex items-center gap-[0.813rem]"
    >
      <Image
        src={"/images/discount.svg"}
        className="h-auto w-auto cover"
        width={32}
        height={32}
        alt=""
        id="logo"
        loading="eager"
      />

      <h1 className="paragraphText">
        <span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT
      </h1>
    </div>
  );
};

export default DiscountBar;
