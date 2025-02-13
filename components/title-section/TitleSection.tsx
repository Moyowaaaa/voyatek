import React from "react";
import ComponentWrapper from "../../layouts/ComponentWrapper";
import Image from "next/image";
import DiscountBar from "./components/DiscountBar";
import GetStartedButton from "./components/GetStartedButton";

type stat = { title: string; count: string; hasBorder?: boolean };

const TitleSection = () => {
  const stats: stat[] = [
    {
      title: "User Active",
      count: "3800+",
      hasBorder: true,
    },
    {
      title: "Trusted By Company",
      count: "230+",
      hasBorder: true,
    },
    {
      title: "Transactions",
      count: "$230m+",
      hasBorder: false,
    },
  ];

  return (
    <ComponentWrapper>
      <div
        className="relative text-white
      min-h-screen max-h-max
      flex flex-col justify-center
      "
        id="titleSection"
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 w-full gap-[4rem] max-w-[80rem]
      mx-auto "
        >
          <div className="flex flex-col gap-[2.5rem]  min-w-max">
            <div className=" flex flex-col gap-[0.75rem] relative">
              <DiscountBar />

              <h1
                className="largeTitleText
               min-w-[45rem] 
               max-w-[45rem]"
              >
                The Next <span className="gradientText">Generation</span>{" "}
                Payment Method.
              </h1>

              <GetStartedButton />
            </div>

            <p className="paragraphText max-w-[30rem] ">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs.
              <br /> We examine annual percentage rates, annual fees.
            </p>
          </div>

          <div className=""></div>
        </div>

        <div className="w-full bottom-0 w-full flex justify-center">
          <div
            className="w-full 
        max-w-[80rem]
        mx-auto
        h-max
       flex justify-between
absolute bottom-0 mx-auto
        "
          >
            {stats?.map((stat, index) => (
              <div
                className="flex items-center w-[25rem]
              justify-between"
                key={index}
              >
                <div className="flex items-center gap-[1.563rem] self-end">
                  <h1 className="text-[40px] font-[600]">{stat.count}</h1>
                  <p className="gradientText text-[1.25rem] min-w-max">
                    {stat.title.toUpperCase()}
                  </p>
                </div>

                {stat.hasBorder && (
                  <div className="h-[13px] self-center border-[1px] border-[rgba(255, 255, 255, 0.60)]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default TitleSection;
