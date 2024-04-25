import Image from "next/image";
import React from "react";
import SectionWrapper from "./SectionWrapper";
import { TPIcon1, TPIcon2, TPIcon3, TPIcon4, TPIcon5 } from "./TPIcons";

type Props = {};

function TokenPreSale({}: Props) {
  return (
    <section className="w-full">
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-y-0 gap-y-10 mt-12">
          <div className="flex items-center lg:ml-10 lg:mx-0 mx-auto">
            <Image
              src="/assets/featured-img.png"
              alt="-"
              width={800}
              height={800}
              className="w-auto h-auto"
            />
          </div>
          <div className="flex flex-col space-y-6 justify-center lg:px-0 px-2">
            <h2 className="text-[#B5C2FF] font-bold text-4xl">Token Presale</h2>
            <div className="flex items-center space-x-6">
              <TPIcon1 />
              <p className="text-white/70 text-lg">Token Price: $0.10</p>
            </div>
            <div className="flex items-center space-x-6">
              <TPIcon2 />
              <p className="text-white/70 text-lg">
                Total Tokens Offered: 600,000,000
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <TPIcon3 />
              <p className="text-white/70 text-lg">
                Presale Stage: One and Only
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <TPIcon4 />
              <p className="text-white/70 text-lg">
                Payment Options: BTC, ETH, USDT, USDC, Credit Card (via Moonpay)
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <TPIcon5 />
              <p className="text-white/70 text-lg">
                Unsold Tokens: Burned after Presale Concludes
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default TokenPreSale;
