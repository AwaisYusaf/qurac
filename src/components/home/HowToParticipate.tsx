import React from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import Button from "../Button";

type Props = {};

function HowToParticipate({}: Props) {
  return (
    <section className="w-full bg-[url(/assets/how-to-participate-bg.jpg)] bg-cover bg-no-repeat bg-center py-12">
      <SectionWrapper>
        <h2 className="text-[#B5C2FF] font-semibold text-3xl text-center">
          {
            "Don't miss this opportunity to be part of QURAC's decentralized revolution."
          }
        </h2>
        <p className="text-2xl font-medium text-center w-[90%] text-white/80 mx-auto leading-10 py-12">
          Secure your tokens at the exclusive presale rate of $0.10 each and
          contribute to the success of our groundbreaking project. Join us on
          the journey to redefine connectivity and be part of the future of
          decentralized WiFi and Internet Sharing. Act now, as this exclusive
          pricing is available for a limited time during our one-and-only
          presale stage.
        </p>
        <h2 className="text-white text-center text-4xl font-semibold mt-8 mb-12">
          How to Participate?
        </h2>
        <div className="grid grid-cols-4 gap-12 px-16">
          <div className="flex flex-col items-center space-y-5">
            <Image
              src="/assets/htp-icon1.png"
              alt="-"
              width={150}
              height={150}
              className="h-12 w-auto"
            />
            <p className="text-white font-semibold text-lg text-center">
              Visit The Token Shop
            </p>
            <span className="text-center text-white/70 leading-7">
              Visit our Presale Page: Navigate to our official presale page to
              access the secure token purchase portal.
            </span>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <Image
              src="/assets/htp-icon2.png"
              alt="-"
              width={150}
              height={150}
              className="h-12 w-auto"
            />
            <p className="text-white font-semibold text-lg text-center">
              Choose Desired Amount
            </p>
            <span className="text-center text-white/70 leading-7">
              Enter the Desired Amount: Specify the quantity of tokens you wish
              to purchase at the exclusive $0.10 per token rate.
            </span>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <Image
              src="/assets/htp-icon3.png"
              alt="-"
              width={150}
              height={150}
              className="h-12 w-auto"
            />
            <p className="text-white font-semibold text-lg text-center">
              Select Preferred Payment
            </p>
            <span className="text-center text-white/70 leading-7">
              Select Your Preferred Payment Method: Choose from BTC, ETH, USDT,
              USDC, or Credit Card (via Moonpay) to make your purchase.
            </span>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <Image
              src="/assets/htp-icon4.png"
              alt="-"
              width={150}
              height={150}
              className="h-12 w-auto"
            />
            <p className="text-white font-semibold text-lg text-center">
              Complete Transaction
            </p>
            <span className="text-center text-white/70 leading-7">
              Complete the Transaction: Follow the simple on-screen instructions
              to complete your purchase securely.
            </span>
          </div>
        </div>

        <div className="h-[1px] w-full bg-gray-400/30 my-8 max-w-6xl mx-auto" />

        <div className="flex flex-col items-center space-y-12 pt-8">
          <Button
            variant="primary"
            className="w-fit px-12 py-4 bg-[#D7F024] text-black hover:bg-white hover:text-black mx-auto"
          >
            Buy Tokens Now
          </Button>
          <h2 className="text-4xl font-bold text-white text-center">
            Post-Presale Token Claiming
          </h2>
          <p className="text-white/70 text-center max-w-5xl text-lg">
            Claim Your Tokens on Our Website: After the presale concludes,
            tokens will be available for claiming on our official website.
            Simply log in to your account, and you’ll find a straightforward
            process to claim your purchased tokens.
          </p>
          <p className="text-white/70 text-center text-lg">
            <span className="underline font-semibold">
              Important Information
            </span>
            <br />
            Presale Start Date: 04/01/2024
            <br />
            Presale End Date: 05/31/2024
            <br />
            Token Distribution: Claim your tokens after the presale sale end
          </p>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default HowToParticipate;
