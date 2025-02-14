"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const TestimonialClients = () => {
  const clientsContainer = useRef<HTMLDivElement | null>(null);
  const onScreen = useIntersectionObserver(clientsContainer, 0.1);

  useEffect(() => {
    const tl = gsap.timeline();
    if (onScreen) {
      tl.from(clientsContainer.current && clientsContainer.current.children, {
        yPercent: 200,
        ease: "power3.inOut",
        duration: 1.2,
        opacity: 0,
        delay: 0.5,
      });
    }
  }, [onScreen]);

  return (
    <div className="w-full  max-h-max overflow-hidden" ref={clientsContainer}>
      <div className=" w-10/12  mx-auto flex items-center justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="193"
          height="60"
          viewBox="0 0 193 60"
          fill="none"
        >
          <path
            d="M101.731 15.0751C101.731 17.2372 99.9896 18.979 97.8275 18.979C95.6654 18.979 93.9236 17.2372 93.9236 15.0751C93.9236 12.9129 95.6053 11.1712 97.8275 11.1712C100.05 11.2312 101.731 12.973 101.731 15.0751ZM85.6355 22.9429V23.9039C85.6355 23.9039 83.7736 21.5015 79.8097 21.5015C73.2632 21.5015 68.1582 26.4865 68.1582 33.3934C68.1582 40.2402 73.2032 45.2853 79.8097 45.2853C83.8337 45.2853 85.6355 42.8228 85.6355 42.8228V43.8438C85.6355 44.3243 85.9958 44.6847 86.4763 44.6847H91.3411V22.1021H86.4763C85.9958 22.1021 85.6355 22.5225 85.6355 22.9429V22.9429ZM85.6355 37.4174C84.7346 38.7387 82.9328 39.8799 80.7707 39.8799C76.9269 39.8799 73.9839 37.4775 73.9839 33.3934C73.9839 29.3093 76.9269 26.9069 80.7707 26.9069C82.8727 26.9069 84.7946 28.1081 85.6355 29.3694V37.4174ZM94.9446 22.1021H100.71V44.6847H94.9446V22.1021ZM181.07 21.5015C177.106 21.5015 175.244 23.9039 175.244 23.9039V11.2312H169.478V44.6847H174.343C174.824 44.6847 175.184 44.2643 175.184 43.8438V42.8228C175.184 42.8228 177.046 45.2853 181.01 45.2853C187.556 45.2853 192.661 40.2402 192.661 33.3934C192.661 26.5465 187.556 21.5015 181.07 21.5015V21.5015ZM180.109 39.8198C177.887 39.8198 176.145 38.6787 175.244 37.3574V29.3093C176.145 28.1081 178.067 26.8468 180.109 26.8468C183.953 26.8468 186.896 29.2492 186.896 33.3333C186.896 37.4174 183.953 39.8198 180.109 39.8198V39.8198ZM166.475 31.2913V44.7447H160.71V31.952C160.71 28.2282 159.508 26.7267 156.265 26.7267C154.524 26.7267 152.722 27.6276 151.581 28.9489V44.6847H145.815V22.1021H150.379C150.86 22.1021 151.22 22.5225 151.22 22.9429V23.9039C152.902 22.1622 155.124 21.5015 157.346 21.5015C159.869 21.5015 161.971 22.2222 163.653 23.6637C165.695 25.3453 166.475 27.5075 166.475 31.2913V31.2913ZM131.821 21.5015C127.857 21.5015 125.995 23.9039 125.995 23.9039V11.2312H120.23V44.6847H125.094C125.575 44.6847 125.935 44.2643 125.935 43.8438V42.8228C125.935 42.8228 127.797 45.2853 131.761 45.2853C138.307 45.2853 143.413 40.2402 143.413 33.3934C143.473 26.5465 138.368 21.5015 131.821 21.5015V21.5015ZM130.86 39.8198C128.638 39.8198 126.896 38.6787 125.995 37.3574V29.3093C126.896 28.1081 128.818 26.8468 130.86 26.8468C134.704 26.8468 137.647 29.2492 137.647 33.3333C137.647 37.4174 134.704 39.8198 130.86 39.8198V39.8198ZM115.245 21.5015C116.986 21.5015 117.887 21.8018 117.887 21.8018V27.1471C117.887 27.1471 113.083 25.5255 110.08 28.9489V44.7447H104.314V22.1021H109.179C109.659 22.1021 110.02 22.5225 110.02 22.9429V23.9039C111.101 22.6426 113.443 21.5015 115.245 21.5015V21.5015ZM55.3655 42.6426C55.0653 41.9219 54.765 41.1411 54.4647 40.4805C53.9842 39.3994 53.5037 38.3784 53.0833 37.4174L53.0232 37.3574C48.8791 28.3483 44.4347 19.2192 39.7501 10.2102L39.5699 9.84985C39.0895 8.94895 38.609 7.98799 38.1285 7.02703C37.5279 5.94595 36.9273 4.8048 35.9664 3.72372C34.0445 1.32132 31.2818 0 28.3388 0C25.3359 0 22.6332 1.32132 20.6513 3.6036C19.7504 4.68468 19.0897 5.82583 18.4891 6.90691C18.0086 7.86787 17.5282 8.82883 17.0477 9.72973L16.8675 10.0901C12.2429 19.0991 7.73849 28.2282 3.5944 37.2372L3.53434 37.3574C3.11393 38.3183 2.63345 39.3393 2.15298 40.4204C1.85268 41.0811 1.55238 41.8018 1.25209 42.5826C0.471314 44.8048 0.231077 46.9069 0.531374 49.0691C1.19203 53.5736 4.19499 57.3574 8.33909 59.039C9.90063 59.6997 11.5222 60 13.2039 60C13.6844 60 14.285 59.9399 14.7654 59.8799C16.7474 59.6396 18.7894 58.979 20.7714 57.8378C23.2338 56.4565 25.5761 54.4745 28.2187 51.5916C30.8613 54.4745 33.2637 56.4565 35.6661 57.8378C37.648 58.979 39.6901 59.6396 41.672 59.8799C42.1525 59.9399 42.7531 60 43.2336 60C44.9152 60 46.5969 59.6997 48.0984 59.039C52.3025 57.3574 55.2454 53.5135 55.9061 49.0691C56.3866 46.967 56.1463 44.8649 55.3655 42.6426ZM28.2788 45.7658C25.0356 41.6817 22.9335 37.8378 22.2128 34.5946C21.9125 33.2132 21.8524 32.012 22.0326 30.9309C22.1527 29.97 22.5131 29.1291 22.9936 28.4084C24.1347 26.7868 26.0566 25.7658 28.2788 25.7658C30.501 25.7658 32.4829 26.7267 33.564 28.4084C34.0445 29.1291 34.4048 29.97 34.525 30.9309C34.7051 32.012 34.6451 33.2733 34.3448 34.5946C33.6241 37.7778 31.522 41.6216 28.2788 45.7658V45.7658ZM52.2425 48.5886C51.822 51.7117 49.72 54.4144 46.7771 55.6156C45.3356 56.2162 43.7741 56.3964 42.2126 56.2162C40.7111 56.036 39.2096 55.5556 37.648 54.6547C35.4859 53.4535 33.3238 51.5916 30.8013 48.8288C34.7652 43.964 37.1676 39.5195 38.0685 35.5556C38.4889 33.6937 38.5489 32.012 38.3688 30.4505C38.1285 28.9489 37.588 27.5676 36.7472 26.3664C34.8853 23.6637 31.7622 22.1021 28.2788 22.1021C24.7953 22.1021 21.6723 23.7237 19.8104 26.3664C18.9696 27.5676 18.4291 28.9489 18.1888 30.4505C17.9486 32.012 18.0086 33.7538 18.4891 35.5556C19.39 39.5195 21.8524 44.024 25.7563 48.8889C23.2939 51.6517 21.0717 53.5135 18.9095 54.7147C17.348 55.6156 15.8465 56.0961 14.345 56.2763C12.7234 56.4565 11.1619 56.2162 9.78051 55.6757C6.8376 54.4745 4.73553 51.7718 4.31511 48.6486C4.13493 47.1471 4.25505 45.6456 4.85565 43.964C5.03582 43.3634 5.33612 42.7628 5.63642 42.042C6.05683 41.0811 6.53731 40.0601 7.01778 39.039L7.07784 38.9189C11.2219 29.97 15.6663 20.8408 20.2909 11.952L20.4711 11.5916C20.9515 10.6907 21.432 9.72973 21.9125 8.82883C22.393 7.86787 22.9335 6.96697 23.5942 6.18619C24.8554 4.74474 26.5371 3.96396 28.3989 3.96396C30.2607 3.96396 31.9424 4.74474 33.2037 6.18619C33.8643 6.96697 34.4048 7.86787 34.8853 8.82883C35.3658 9.72973 35.8463 10.6907 36.3267 11.5916L36.5069 11.952C41.0714 20.9009 45.5158 30.03 49.6599 38.979V39.039C50.1404 40 50.5608 41.0811 51.0413 42.042C51.3416 42.7628 51.6419 43.3634 51.822 43.964C52.3025 45.5255 52.4827 47.027 52.2425 48.5886V48.5886Z"
            fill="#424147"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="193"
          height="39"
          viewBox="0 0 193 39"
          fill="none"
        >
          <path
            d="M9.3933 19.322L5.02533 23.6863L0.661133 19.322L5.02533 14.9578L9.3933 19.322ZM19.9829 8.72473L27.4617 16.2074L31.8259 11.8431L19.9829 0L8.13992 11.8431L12.5041 16.2074L19.9829 8.72473ZM34.9442 14.9578L30.58 19.322L34.9442 23.6863L39.3047 19.322L34.9442 14.9578ZM19.9829 29.9193L12.5041 22.4404L8.13992 26.8009L19.9829 38.644L31.8259 26.8009L27.4617 22.4404L19.9829 29.9193ZM19.9829 23.6863L24.3471 19.322L19.9829 14.9578L15.6187 19.322L19.9829 23.6863ZM66.041 24.1053V24.0449C66.041 21.1983 64.5309 19.775 62.0732 18.8388C63.5833 17.9893 64.8594 16.6566 64.8594 14.2669V14.2065C64.8594 10.8767 62.194 8.72473 57.8638 8.72473H48.0331V29.9193H58.113C62.8962 29.9193 66.0486 27.9826 66.0486 24.1053H66.041ZM60.2271 15.0446C60.2271 16.6189 58.9247 17.2871 56.8672 17.2871H52.5747V12.8134H57.1767C59.1436 12.8134 60.2347 13.5986 60.2347 14.9917L60.2271 15.0446ZM61.4088 23.5239C61.4088 25.0982 60.1667 25.8231 58.1054 25.8231H52.5747V21.1681H57.962C60.3555 21.1681 61.4163 22.0478 61.4163 23.4711L61.4088 23.5239ZM75.8378 29.9193V8.72473H71.1603V29.9193H75.8378ZM100.902 29.9193V8.72473H96.2846V21.776L86.3557 8.72473H82.0557V29.9193H86.6577V16.4452L96.9189 29.9193H100.902ZM126.728 29.9193L117.63 8.57371H113.33L104.25 29.9193H109.003L110.948 25.1662H119.91L121.847 29.9193H126.728ZM118.253 21.0473H112.605L115.421 14.1763L118.253 21.0473ZM148.953 29.9193V8.72473H144.336V21.776L134.403 8.72473H130.107V29.9193H134.705V16.4452L144.97 29.9193H148.953ZM173.02 26.4989L170.057 23.5013C168.392 25.0114 166.908 25.9816 164.485 25.9816C160.853 25.9816 158.339 22.9614 158.339 19.322V19.2616C158.339 15.6298 160.913 12.6624 164.485 12.6624C166.603 12.6624 168.26 13.5684 169.906 15.0521L172.862 11.6317C170.895 9.69498 168.505 8.3623 164.507 8.3623C157.999 8.3623 153.457 13.2966 153.457 19.3107V19.3711C153.457 25.4569 158.089 30.2704 164.326 30.2704C168.407 30.2817 170.827 28.8282 173.005 26.4989H173.02ZM192.916 29.9193V25.7665H181.394V21.3078H191.387V17.155H181.394V12.8738H192.75V8.72095H176.762V29.9155L192.916 29.9193Z"
            fill="#424147"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="190"
          height="42"
          viewBox="0 0 190 42"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6265 36.0705C17.0913 36.0705 18.4615 35.8028 19.753 35.283C19.753 35.3302 22.3833 39.4096 22.4305 39.4253C20.1026 40.6725 17.4955 41.3067 14.8548 41.2681C6.77502 41.2838 0.916016 35.9445 0.916016 27.4552C0.916016 18.9028 7.05852 13.595 14.8548 13.595C17.611 13.595 19.8003 14.1935 21.9895 15.359L19.4695 19.6116C18.1465 19.0918 16.792 18.8555 15.3745 18.8555C10.6023 18.8555 6.90102 21.8953 6.90102 27.4552C6.90102 32.7157 10.4763 36.0705 15.6265 36.0705ZM35.9913 13.595C43.9293 13.595 49.678 19.2178 49.678 27.4552C49.678 35.6453 43.9293 41.2681 35.9755 41.2681C28.1005 41.2681 22.3518 35.6453 22.3518 27.4552C22.3518 19.2178 28.1005 13.595 35.9913 13.595V13.595ZM35.9913 18.6665C31.5655 18.6665 28.3368 22.0843 28.3368 27.4552C28.3368 32.7787 31.5655 36.1965 35.9913 36.1965C40.5273 36.1965 43.7088 32.7787 43.7088 27.4552C43.7088 22.0843 40.5273 18.6665 35.9913 18.6665V18.6665ZM53.4423 40.6696V14.1935H59.3643V40.6538H53.4423V40.6696ZM52.6548 6.05064C52.7162 5.10868 53.1337 4.22537 53.8225 3.57996C54.5114 2.93456 55.4199 2.57542 56.3639 2.57542C57.3078 2.57542 58.2164 2.93456 58.9053 3.57996C59.5941 4.22537 60.0116 5.10868 60.073 6.05064C60.0732 7.03967 59.6858 7.98939 58.9939 8.69607C58.3019 9.40275 57.3606 9.81008 56.3718 9.83068C55.383 9.81008 54.4416 9.40275 53.7497 8.69607C53.0577 7.98939 52.6703 7.03967 52.6705 6.05064H52.6548ZM64.5303 15.863C68.4094 14.4049 72.5139 13.6373 76.6578 13.595C83.4303 13.595 87.7143 16.1623 87.7143 23.6279V40.6696H81.871V24.1791C81.871 20.3518 79.4928 18.9815 76.201 18.9815C74.1063 18.9815 72.0115 19.265 70.4523 19.7533V40.6538H64.546V15.863H64.5303ZM92.6755 0.0183105H98.5975V14.9022C99.8575 14.2407 102.299 13.595 104.63 13.595C112.284 13.595 118.017 18.4775 118.017 26.9826C118.017 35.535 112.347 41.2681 102.551 41.2681C98.7235 41.2681 95.3688 40.4806 92.6755 39.5356V0.0183105V0.0183105ZM98.5975 35.6453C99.7315 36.0075 101.228 36.1965 102.724 36.1965C108.158 36.1965 112.048 33.204 112.048 27.1086C112.048 21.9583 108.394 18.9185 103.921 18.9185C101.59 18.9185 99.7945 19.5171 98.5975 20.1786V35.6453ZM135.138 22.9191C135.138 20.0526 132.964 18.7295 130.035 18.7295C126.995 18.7295 124.601 19.6273 122.396 20.8873V15.737C125.034 14.3035 127.993 13.5663 130.995 13.595C136.791 13.595 140.918 15.989 140.918 22.6198V40.1341C138.398 40.7956 134.823 41.2051 131.83 41.2051C124.963 41.2051 119.939 39.126 119.939 33.141C119.939 27.7544 124.538 25.1241 132.192 25.1241H135.122V22.9191H135.138ZM135.138 29.0617H132.618C128.491 29.0617 125.798 30.2744 125.798 32.9677C125.798 35.7083 128.318 36.7793 131.893 36.7793C132.791 36.7793 134.051 36.669 135.122 36.4958V29.0774L135.138 29.0617ZM145.218 33.5032C147.526 35.3319 150.355 36.3798 153.297 36.4958C155.928 36.4958 157.66 35.598 157.66 33.5032C157.66 31.3455 156.101 30.5737 152.699 29.6759C147.186 28.4159 144.871 26.2109 144.871 21.5961C144.871 16.2253 148.935 13.595 154.321 13.595C157.314 13.595 159.692 14.2407 161.913 15.6268V21.0606C159.802 19.376 157.194 18.4348 154.494 18.383C151.927 18.383 150.557 19.6431 150.557 21.3756C150.557 23.1081 151.675 23.9901 154.731 24.8406C160.779 26.1479 163.393 28.4159 163.393 33.1882C163.393 38.7638 159.156 41.2681 153.423 41.2681C150.548 41.3255 147.713 40.584 145.233 39.126V33.5032H145.218ZM171.504 28.7782V28.8884C171.867 33.6135 175.914 36.1965 180.057 36.1965C183.695 36.1965 186.325 35.346 188.955 33.6135V38.811C186.561 40.4963 183.033 41.2681 179.631 41.2681C171.378 41.2681 165.771 36.0075 165.771 27.6442C165.771 19.2178 171.268 13.595 178.56 13.595C186.278 13.595 189.916 18.5563 189.916 25.7856V28.7782H171.489H171.504ZM184.356 24.9509C184.23 20.8243 182.199 18.5563 178.371 18.5563C174.969 18.5563 172.465 20.9503 171.678 24.9509H184.356Z"
            fill="#424147"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="194"
          height="38"
          viewBox="0 0 194 38"
          fill="none"
        >
          <path
            d="M23.2271 7.19242L12.0716 14.3131L23.2271 21.4337L12.0716 28.5544L0.916016 21.3744L12.0716 14.2537L0.916016 7.19242L12.0716 0.0717773L23.2271 7.19242ZM12.0122 30.8092L23.1678 23.6886L34.3233 30.8092L23.1678 37.9299L12.0122 30.8092ZM23.2271 21.3744L34.3826 14.2537L23.2271 7.19242L34.3233 0.0717773L45.4788 7.19242L34.3233 14.3131L45.4788 21.4337L34.3233 28.5544L23.2271 21.3744Z"
            fill="#424147"
          />
          <path
            d="M54.1992 7.1923H63.2186C68.9744 7.1923 73.7214 10.5153 73.7214 18.1106V19.7128C73.7214 27.3675 69.2711 30.8091 63.3966 30.8091H54.1992V7.1923ZM59.2429 11.4647V26.4774H63.0999C66.3635 26.4774 68.559 24.3412 68.559 19.5941V18.348C68.559 13.6009 66.2448 11.4647 62.9219 11.4647H59.2429ZM76.3916 11.702H80.4266L81.0793 16.1524C81.8507 13.1262 83.8089 11.524 87.3691 11.524H88.6152V16.6272H86.5384C82.4441 16.6272 81.4353 18.0513 81.4353 22.0863V30.8685H76.451V11.702H76.3916ZM89.624 21.671V21.1369C89.624 14.7283 93.7183 11.2273 99.2961 11.2273C104.993 11.2273 108.968 14.7283 108.968 21.1369V21.671C108.968 27.9609 105.111 31.3432 99.2961 31.3432C93.1249 31.2838 89.624 27.9609 89.624 21.671V21.671ZM103.865 21.6116V21.1369C103.865 17.5766 102.085 15.4404 99.2367 15.4404C96.4478 15.4404 94.6084 17.3986 94.6084 21.1369V21.6116C94.6084 25.0533 96.3885 27.0114 99.2367 27.0114C102.085 26.9521 103.865 25.0533 103.865 21.6116ZM111.579 11.702H115.733L116.207 15.3217C117.216 12.8888 119.352 11.2273 122.497 11.2273C127.363 11.2273 130.567 14.7283 130.567 21.1962V21.7303C130.567 28.0202 127.007 31.3432 122.497 31.3432C119.471 31.3432 117.394 29.9784 116.385 27.7828V37.4551H111.52L111.579 11.702ZM125.523 21.6116V21.1962C125.523 17.3986 123.565 15.4997 120.954 15.4997C118.166 15.4997 116.326 17.6359 116.326 21.1962V21.5523C116.326 24.9346 118.106 27.0708 120.895 27.0708C123.743 27.0114 125.523 25.1719 125.523 21.6116ZM137.925 27.3081L137.51 30.8091H133.237V5.29346H138.103V15.0843C139.171 12.5921 141.307 11.2273 144.334 11.2273C148.903 11.2867 152.285 14.4316 152.285 20.7809V21.3743C152.285 27.7235 149.081 31.3432 144.215 31.3432C141.011 31.2838 138.934 29.8004 137.925 27.3081V27.3081ZM147.182 21.3743V20.8995C147.182 17.3986 145.283 15.4404 142.613 15.4404C139.883 15.4404 137.984 17.6359 137.984 20.9589V21.3743C137.984 24.9346 139.824 27.0114 142.553 27.0114C145.461 27.0114 147.182 25.1719 147.182 21.3743V21.3743ZM154.421 21.671V21.1369C154.421 14.7283 158.515 11.2273 164.093 11.2273C169.79 11.2273 173.765 14.7283 173.765 21.1369V21.671C173.765 27.9609 169.849 31.3432 164.093 31.3432C157.922 31.2838 154.421 27.9609 154.421 21.671V21.671ZM168.721 21.6116V21.1369C168.721 17.5766 166.941 15.4404 164.093 15.4404C161.304 15.4404 159.465 17.3986 159.465 21.1369V21.6116C159.465 25.0533 161.245 27.0114 164.093 27.0114C166.941 26.9521 168.721 25.0533 168.721 21.6116ZM180.292 20.8995L173.587 11.702H179.343L183.2 17.4579L187.116 11.702H192.813L185.989 20.8402L193.169 30.8091H187.532L183.141 24.4599L178.868 30.8091H172.994L180.292 20.8995Z"
            fill="#424147"
          />
        </svg>
      </div>
    </div>
  );
};

export default TestimonialClients;
