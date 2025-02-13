import Image from "next/image";
import React from "react";
import ComponentWrapper from "../layouts/ComponentWrapper";

const FeaturesSection = () => {
  return (
    <>
      <ComponentWrapper>
        <div
          className="relative text-white
       max-h-max
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
            <div
              className="w-full min-h-[500px]  relative flex flex-col
justify-center

            "
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

          <div className="flex items-center jusitfy-start  w-full gap-[4rem] max-w-[80rem] mx-auto ">
            <div className="w-full   flex flex-col gap-[3rem]">
              <div className="flex flex-col gap-[1.5rem]">
                <h1 className="titleText max-w-[35rem]">
                  Find a better card deal in few easy steps.
                </h1>

                <p className="paragraphText max-w-[30rem]">
                  Arcu tortor, purus in mattis at sed integer faucibus. Aliquet
                  quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                </p>
              </div>
              <button>Get Started</button>
            </div>

            <div className="w-[55rem]  relative">
              <div className="h-full relative  w-[28rem] h-[28rem]">
                <Image
                  src={"/images/multipleEllipse.png"}
                  fill
                  alt=""
                  id="logo"
                  loading="eager"
                />

                {/* <div className="w-full absolute top-20 -left-16">
                  <div className="relative h-[158px] w-[191px]">
                    <Image
                      src={"/images/scan1.png"}
                      alt=""
                      fill
                      className="mx-auto object-cover"
                    />
                  </div>
                </div>

                <div className="w-full absolute top-12 -right-64">
                  <div className="relative w-[256px] h-[238px]">
                    <Image
                      src={"/images/analysis.png"}
                      alt=""
                      fill
                      className="mx-auto object-cover"
                    />
                  </div>
                </div>

                <div className="w-full absolute -bottom-10">
                  <Image
                    src={"/images/method.png"}
                    alt=""
                    height={140}
                    width={262}
                    className="mx-auto"
                  />
                </div> */}
              </div>

              {/* <div className="w-full absolute top-20 -left-16">
                <div className="relative h-[158px] w-[191px]">
                  <Image
                    src={"/images/scan1.png"}
                    alt=""
                    fill
                    className="mx-auto object-cover"
                  />
                </div>
              </div>

              <div className="w-full absolute top-12 -right-64">
                <div className="relative w-[256px] h-[238px]">
                  <Image
                    src={"/images/analysis.png"}
                    alt=""
                    fill
                    className="mx-auto object-cover"
                  />
                </div>
              </div>

              <div className="w-full absolute -bottom-10">
                <Image
                  src={"/images/method.png"}
                  alt=""
                  height={140}
                  width={262}
                  className="mx-auto"
                />
              </div> */}
            </div>

            {/* <div
              className="
            border-2 border-[red]
            w-full  relative flex flex-col gap-[2.5rem]  h-[25rem] max-w-[25rem] max-h-[25rem]   "
            >
              <div className="h-full relative  w-[23.813rem] h-[23.813rem]">
                <Image
                  src={"/images/multipleEllipse.png"}
                  fill
                  alt=""
                  id="logo"
                  loading="eager"
                />
              </div>

              <div className="w-full absolute top-20 -left-16">
                <div className="relative h-[158px] w-[191px]">
                  <Image
                    src={"/images/scan1.png"}
                    alt=""
                    fill
                    className="mx-auto object-cover"
                  />
                </div>
              </div>

              <div className="w-full absolute top-12 -right-64">
                <div className="relative w-[256px] h-[238px]">
                  <Image
                    src={"/images/analysis.png"}
                    alt=""
                    fill
                    className="mx-auto object-cover"
                  />
                </div>
              </div>

              <div className="w-full absolute -bottom-10">
                <Image
                  src={"/images/method.png"}
                  alt=""
                  height={140}
                  width={262}
                  className="mx-auto"
                />
              </div>
            </div> */}
          </div>
        </div>
      </ComponentWrapper>
    </>
  );
};

export default FeaturesSection;
