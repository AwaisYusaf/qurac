import React from "react";
import Header from "../Header";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import Button from "../Button";

type Props = {};

function Timer() {
  return (
    <div className="flex justify-evenly">
      <div className=" flex flex-col items-center space-y-2">
        <p className="px-2 py-4 bg-white/5 font-medium lg:text-4xl text-2xl text-white rounded-xl">
          38
        </p>
        <span className="text-white/60 font-medium lg:text-base text-xs">
          Days
        </span>
      </div>
      <p className="text-white lg:text-4xl text-2xl font-bold mt-2">:</p>
      <div className=" flex flex-col items-center space-y-2">
        <p className="px-2 py-4 bg-white/5 font-medium lg:text-4xl text-2xl text-white rounded-xl">
          22
        </p>
        <span className="text-white/60 font-medium lg:text-base text-xs">
          Hours
        </span>
      </div>
      <p className="text-white lg:text-4xl text-2xl font-bold mt-2">:</p>
      <div className=" flex flex-col items-center space-y-2">
        <p className="px-2 py-4 bg-white/5 font-medium lg:text-4xl text-2xl text-white rounded-xl">
          07
        </p>
        <span className="text-white/60 font-medium lg:text-base text-xs">
          Minutes
        </span>
      </div>
      <p className="text-white lg:text-4xl text-2xl font-bold mt-2">:</p>
      <div className=" flex flex-col items-center space-y-2">
        <p className="px-2 py-4 bg-white/5 font-medium lg:text-4xl text-2xl text-white rounded-xl">
          20
        </p>
        <span className="text-white/60 font-medium lg:text-base text-xs">
          Seconds
        </span>
      </div>
    </div>
  );
}

function TokenPresalePanel() {
  return (
    <div className="bg-[url(/assets/hero-panel-bg.jpg)] h-fit bg-no-repeat bg-center bg-cover lg:p-10 p-5 rounded-3xl flex flex-col space-y-8 lg:mx-8 mx-0 lg:mt-0 mt-6">
      <h1 className="text-white lg:text-4xl text-3xl font-medium text-center">
        Token Presale is Live! $0.10 Tokens End In:
      </h1>
      <Timer />
      <Button
        variant="primary"
        className="w-fit lg:px-12 px-6 lg:py-4 py-2 lg:text-base text-sm bg-[#D7F024] text-black hover:bg-white hover:text-black mx-auto"
      >
        Buy Tokens Now
      </Button>
      <div>
        <p className="text-right text-white/70">Hard Cap</p>
        <div className="w-full h-3 bg-pink-300/20 rounded-full overflow-hidden mt-5">
          <div className="w-[30%] h-full bg-[#BB04FF]"></div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-white/70 text-sm">
            Raised: <span className="font-semibold ">$5,556.80</span>
          </p>
          <p className="text-white/70 font-semibold text-sm">$60,000,000</p>
        </div>
      </div>
      <div>
        <h2 className="text-white text-center text-xl font-medium">
          We Accept:
        </h2>
        <div className="grid grid-cols-4 gap-x-4 mt-4">
          <div className="bg-white/5 rounded-lg py-2 flex items-center justify-center">
            <Image
              src="/assets/btc-icon.png"
              alt="-"
              className="h-6 w-auto"
              width={300}
              height={200}
            />
          </div>
          <div className="bg-white/5 rounded-lg py-2 flex items-center justify-center">
            <Image
              src="/assets/eth-icon.png"
              alt="-"
              className="h-6 w-auto"
              width={300}
              height={200}
            />
          </div>
          <div className="bg-white/5 rounded-lg py-2 flex items-center justify-center">
            <Image
              src="/assets/mastercard-icon.png"
              alt="-"
              className="h-5 w-auto"
              width={300}
              height={200}
            />
          </div>
          <div className="bg-white/5 rounded-lg py-2 flex items-center justify-center">
            <Image
              src="/assets/ripple-icon.png"
              alt="-"
              className="h-6 w-auto"
              width={300}
              height={200}
            />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-white/50 lg:text-sm text-xs text-center leading-6">
            Diverse Payment Options: We accept major cryptocurrencies (BTC, ETH,
            USDT, USDC) for seamless transactions.
            <br />
            Additionally, you can conveniently purchase tokens using your Credit
            Card through Moonpay services.
          </p>
        </div>
      </div>
    </div>
  );
}
function Hero({}: Props) {
  return (
    <section className="w-full relative flex flex-col">
      <div className="bg-[url(/assets/hero-gradient.png)] bg- bg-no-repeat bg-center bg-cover w-full h-full absolute top-0 z-0">
        <Image
          src="/assets/hero-bg.png"
          alt="-"
          width={1600}
          height={1200}
          className="w-full h-auto mt-10"
        />
      </div>
      <Header />
      <SectionWrapper>
        <main className="z-20 grid lg:grid-cols-2 grid-cols-1 py-8 px-5 gap-x-28">
          <div className="flex flex-col space-y-8">
            <h1 className="text-[#B5C2FF] font-bold text-4xl">
              Welcome to QURAC
            </h1>
            <h2 className="text-2xl text-[#F5D1FF] font-semibold">
              Empowering Connectivity for a Decentralized Tomorrow!
            </h2>
            <p className="text-lg text-[#FFFFFF99]">
              Decentralized WiFi and Internet Sharing Network Sharing Bytes,
              Decentralized WiFi, Your Network, Your Power, Our Future.
            </p>

            <p className="text-lg text-[#FFFFFF99]">
              Decentralized WiFi and internet sharing network that allows users
              to share their excess bandwidth with others in the network.
            </p>

            <p className="text-lg text-[#FFFFFF99]">
              Utilizing blockchain, users can securely share their internet
              connection while earning tokens as incentives.
            </p>
            <Button
              variant="primary"
              className="bg-[#BB04FF] hover:bg-white text-white hover:text-[#1C0A27] font-medium capitalize w-fit px-16 py-4 transition-all duration-200 lg:mx-0 mx-auto"
            >
              How It Works
            </Button>
            <h2 className="lg:text-xl text-3xl lg:text-start text-center text-[#F5D1FF] font-semibold">
              Why Participate in Our Presale?
            </h2>
            <p className="text-lg text-[#FFFFFF99] lg:text-start text-center">
              Exclusive Pricing: Acquire QURAC tokens at a special presale price
              of $0.10 per token – a limited-time offer available only during
              this presale stage.
            </p>
            <p className="text-lg text-[#FFFFFF99] lg:text-start text-center">
              Token Burning Mechanism: We are committed to token value
              appreciation. If any, unsold tokens at the end of the presale will
              be permanently burned, reducing the total supply.
            </p>
          </div>
          <TokenPresalePanel />
        </main>
      </SectionWrapper>
    </section>
  );
}

export default Hero;
