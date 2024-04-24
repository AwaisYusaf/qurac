import React from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

type Props = {};

function FAQs({}: Props) {
  return (
    <section className="w-full relative bg-transparent">
      <Image
        className="w-full h-auto -mt-28"
        src="/assets/faq-bg.png"
        width={1920}
        height={1080}
        layout="responsive"
        alt="FAQs Background Image"
      />
      <div className="-mt-40">
        <SectionWrapper>
          <h2 className="text-white font-semibold text-3xl text-center">
            Frequently Asked Questions
          </h2>
        </SectionWrapper>
      </div>
    </section>
  );
}

export default FAQs;
