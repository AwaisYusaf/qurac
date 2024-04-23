import React from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

type Props = {};

function HowItWorksIcon1({}: Props) {
  return (
    <svg
      width={50}
      height={50}
      fill="#A66EE4"
      aria-hidden="true"
      className="e-font-icon-svg e-fas-network-wired text-purple-600"
      viewBox="0 0 640 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z"></path>
    </svg>
  );
}

function HowItWorks({}: Props) {
  return (
    <section className="w-full py-12 bg-[url(/assets/tokenomics-bg2.png)] bg-no-repeat bg-center bg-cover">
      <SectionWrapper>
        <h1 className="text-white font-bold text-4xl text-center">
          How It Works
        </h1>
        <p className="text-white font-medium text-2xl text-center mx-auto w-[90%] leading-10 my-12">
          Welcome to the heart of QURAC, where decentralized connectivity
          becomes a reality. {"Here's"} a step-by-step guide on how our
          innovative platform transforms the way you connect to the internet.
        </p>
        <h2 className="text-white font-semibold text-3xl text-center">
          A Peek Behind the Curtain
        </h2>
        <div className="flex flex-col divide-y-[1px] divide-gray-300/20">
          <div className="grid grid-cols-3 py-8">
            <div className="flex flex-col items-center space-y-4">
              <HowItWorksIcon1 />
              <p className="text-white text-center font-semibold text-lg">
                Decentralized Network Architecture
              </p>
              <span className="text-center text-white/70 leading-8 w-[80%] mx-auto">
                QURAC operates on a decentralized network, a web of
                interconnected nodes where each user serves as both a consumer
                and provider of internet services. This unique architecture
                eliminates the need for traditional internet service providers,
                giving you the power to shape your online experience.
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <HowItWorksIcon1 />
              <p className="text-white text-center font-semibold text-lg">
                Decentralized Network Architecture
              </p>
              <span className="text-center text-white/70 leading-8 w-[80%] mx-auto">
                QURAC operates on a decentralized network, a web of
                interconnected nodes where each user serves as both a consumer
                and provider of internet services. This unique architecture
                eliminates the need for traditional internet service providers,
                giving you the power to shape your online experience.
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <HowItWorksIcon1 />
              <p className="text-white text-center font-semibold text-lg">
                Decentralized Network Architecture
              </p>
              <span className="text-center text-white/70 leading-8 w-[80%] mx-auto">
                QURAC operates on a decentralized network, a web of
                interconnected nodes where each user serves as both a consumer
                and provider of internet services. This unique architecture
                eliminates the need for traditional internet service providers,
                giving you the power to shape your online experience.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 py-8">
            <div className="flex flex-col items-center space-y-4">
              <HowItWorksIcon1 />
              <p className="text-white text-center font-semibold text-lg">
                Decentralized Network Architecture
              </p>
              <span className="text-center text-white/70 leading-8 w-[80%] mx-auto">
                QURAC operates on a decentralized network, a web of
                interconnected nodes where each user serves as both a consumer
                and provider of internet services. This unique architecture
                eliminates the need for traditional internet service providers,
                giving you the power to shape your online experience.
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <HowItWorksIcon1 />
              <p className="text-white text-center font-semibold text-lg">
                Decentralized Network Architecture
              </p>
              <span className="text-center text-white/70 leading-8 w-[80%] mx-auto">
                QURAC operates on a decentralized network, a web of
                interconnected nodes where each user serves as both a consumer
                and provider of internet services. This unique architecture
                eliminates the need for traditional internet service providers,
                giving you the power to shape your online experience.
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <HowItWorksIcon1 />
              <p className="text-white text-center font-semibold text-lg">
                Decentralized Network Architecture
              </p>
              <span className="text-center text-white/70 leading-8 w-[80%] mx-auto">
                QURAC operates on a decentralized network, a web of
                interconnected nodes where each user serves as both a consumer
                and provider of internet services. This unique architecture
                eliminates the need for traditional internet service providers,
                giving you the power to shape your online experience.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 py-8">
            <div className="flex flex-col items-center space-y-4">
              <HowItWorksIcon1 />
              <p className="text-white text-center font-semibold text-lg">
                Decentralized Network Architecture
              </p>
              <span className="text-center text-white/70 leading-8 w-[80%] mx-auto">
                QURAC operates on a decentralized network, a web of
                interconnected nodes where each user serves as both a consumer
                and provider of internet services. This unique architecture
                eliminates the need for traditional internet service providers,
                giving you the power to shape your online experience.
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <HowItWorksIcon1 />
              <p className="text-white text-center font-semibold text-lg">
                Decentralized Network Architecture
              </p>
              <span className="text-center text-white/70 leading-8 w-[80%] mx-auto">
                QURAC operates on a decentralized network, a web of
                interconnected nodes where each user serves as both a consumer
                and provider of internet services. This unique architecture
                eliminates the need for traditional internet service providers,
                giving you the power to shape your online experience.
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <HowItWorksIcon1 />
              <p className="text-white text-center font-semibold text-lg">
                Decentralized Network Architecture
              </p>
              <span className="text-center text-white/70 leading-8 w-[80%] mx-auto">
                QURAC operates on a decentralized network, a web of
                interconnected nodes where each user serves as both a consumer
                and provider of internet services. This unique architecture
                eliminates the need for traditional internet service providers,
                giving you the power to shape your online experience.
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default HowItWorks;
