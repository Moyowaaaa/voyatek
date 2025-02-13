import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { useLenisScroll } from "../hooks/useLenisScroll";
import SectionThree from "../components/SectionThree";
import PageWrapper from "../layouts/PageWrapper";
import TitleSection from "../components/title-section/TitleSection";
import HeroSection from "../components/HeroSection";
import TestimonialSection from "../components/TestimonialSection";

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <TitleSection />
      <HeroSection />
      <TestimonialSection />
    </PageWrapper>
  );
};

export default Home;
