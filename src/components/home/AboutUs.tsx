import React from "react";
import SectionWrapper from "./SectionWrapper";

type Props = {};

function AboutUs({}: Props) {
  return (
    <section className="w-full mt-6">
      <SectionWrapper>
        <h1 className="text-[#B5C2FF] font-bold text-4xl text-center">
          About Us
        </h1>
        <h2 className="text-center leading-loose font-medium text-2xl text-white/80 py-10">
          Welcome to QURAC
          <br /> Empowering Connectivity for a Decentralized Tomorrow!
        </h2>
      </SectionWrapper>
    </section>
  );
}

export default AboutUs;
