import React from "react";
import ComponentWrapper from "../layouts/ComponentWrapper";
import Image from "next/image";

type feature = {
  name: string;
  desc: string;
  icon: string;
};

const HeroSection = () => {
  const features: feature[] = [
    {
      name: "Rewards",
      desc: "The best credit cards offer some tantalizing combinations of promotions and prizes",
      icon: "/images/rewards.svg",
    },
    {
      name: "100% Secured",
      desc: "We take proactive steps make sure your information and transactions are secure.",
      icon: "/images/secure.svg",
    },
    {
      name: "Balance Transfer",
      desc: "A balance transfer credit card can save you a lot of money in interest charges.",
      icon: "/images/transfer.svg",
    },
  ];

  return (
    <>
      <ComponentWrapper>
        <div
          className="relative text-white
      min-h-screen max-h-max
      flex flex-col justify-center
      gap-[10rem]
      py-[11.25rem]
      "
          id="section"
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2 w-full gap-[4rem] max-w-[80rem]
      mx-auto "
          >
            <div className="w-full   flex flex-col gap-[3rem]">
              <div className="flex flex-col gap-[1.5rem]">
                <h1 className="titleText">
                  You do the business,
                  <br /> we’ll handle the money.
                </h1>

                <p className="paragraphText max-w-[35rem]">
                  With the right credit card, you can improve your financial
                  life by building credit, earning rewards and saving money. But
                  with hundreds of credit cards on the market.
                </p>
              </div>
              <button>Get Started</button>
            </div>

            <div
              className="w-full items-end  flex flex-col gap-[2.5rem]
           
            "
            >
              {features?.map((feature, index) => (
                <div
                  key={index}
                  className="
  flex items-center
  gap-[1.25rem]
  rounded-[20px] bg-gradient-to-br from-[transparent] to-[#14101D] 
   p-[1.25rem] 
   w-[35rem]
  "
                >
                  <div className="relative min-h-[64px] min-w-[64px]  rounded-full">
                    <Image
                      src={`${feature?.icon}`}
                      className="h-auto w-auto cover"
                      fill
                      alt=""
                      id="logo"
                      loading="eager"
                    />
                  </div>

                  <div className="flexflex-col gap-[0.5rem]">
                    <p className="paragraphText !text-[white]">
                      {feature.name}
                    </p>
                    <p className="paragraphText !text-base max-w-[25rem]">
                      {feature?.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 w-full gap-[4rem] max-w-[80rem]
      mx-auto "
          >
            <div
              className="w-full   flex flex-col
            
            border-2 border-[red]
            gap-[3rem]"
            ></div>

            <div className="flex flex-col  gap-[1.5rem] items-end  ml-[1.25rem] ">
              <h1 className="titleText max-w-[35rem] ">
                Easily control your billing & invoicing.
              </h1>

              <p className="paragraphText max-w-[35rem]">
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                integer platea placerat.
              </p>

              <div className="mt-[1.563rem] w-full self-left max-w-[35rem] flex itesm-center gap-[2rem]">
                <Image
                  src={"/images/appStoreIcon.svg"}
                  className="h-auto w-auto cover"
                  width={32}
                  height={32}
                  alt=""
                  id="logo"
                  loading="eager"
                />

                <Image
                  src={"/images/playstoreIcon.svg"}
                  className="h-auto w-auto cover"
                  width={32}
                  height={32}
                  alt=""
                  id="logo"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </>
  );
};

export default HeroSection;
