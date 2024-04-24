import React from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

type Props = {};

type Content = {
  title: string;
  percentage: string;
  amount: string;
};

function Card({ content }: { content: Content }) {
  return (
    <div className="flex flex-col items-center lg:my-0 my-4">
      <h3 className="text-5xl text-white font-semibold">
        {content.percentage}
      </h3>
      <p className="text-[#D7F024] mt-2">{content.amount}</p>
      <span className="text-white font-medium text-lg mt-4">
        {content.title}{" "}
      </span>
    </div>
  );
}

function Tokenomics({}: Props) {
  const tokenomics = [
    {
      title: "Presale Allocation",
      percentage: "60%",
      amount: "600,000,000",
    },
    {
      title: "Staking Rewards",
      percentage: "12%",
      amount: "120,000,000",
    },
    {
      title: "Community Incentives",
      percentage: "6%",
      amount: "60,000,000",
    },
    {
      title: "Listings Liquidity",
      percentage: "9%",
      amount: "90,000,000",
    },
  ];
  return (
    <section className="w-full py-12 bg-[url(/assets/tokenomics-bg2.png)] bg-no-repeat bg-center bg-cover">
      <SectionWrapper>
        <div className="flex flex-col">
          <h1 className="text-white font-semibold text-4xl text-center mt-8">
            Tokenomics Overview
          </h1>
          <div className="flex items-center justify-evenly mt-12 flex-wrap">
            {tokenomics.map((item, index) => (
              <Card key={index} content={item} />
            ))}
          </div>

          <div className="h-[1px] w-full bg-gray-400/10 my-8 max-w-6xl mx-auto" />

          <div className="grid grid-cols-2 justify-between">
            <div className="flex justify-center items-center">
              <Image
                src="/assets/pie-chart.png"
                alt="-"
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="min-w-[400px] flex flex-col space-y-4">
                <h2 className="text-white text-2xl font-semibold">
                  Token Distribution
                </h2>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-600 w-3 h-3 rounded-full" />
                  <p className="flex-1 text-white text-lg">
                    Presale Allocation
                  </p>
                  <span className="text-white text-lg">60%</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-300 w-3 h-3 rounded-full" />
                  <p className="flex-1 text-white text-lg">Staking Rewards</p>
                  <span className="text-white text-lg">12%</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-cyan-600 w-3 h-3 rounded-full" />
                  <p className="flex-1 text-white text-lg">
                    Community Incentives
                  </p>
                  <span className="text-white text-lg">6%</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-600 w-3 h-3 rounded-full" />
                  <p className="flex-1 text-white text-lg">Development Fund</p>
                  <span className="text-white text-lg">4%</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 w-3 h-3 rounded-full" />
                  <p className="flex-1 text-white text-lg">
                    Partnerships & Collaborations
                  </p>
                  <span className="text-white text-lg">3%</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-red-600 w-3 h-3 rounded-full" />
                  <p className="flex-1 text-white text-lg">
                    Marketing & Outreach
                  </p>
                  <span className="text-white text-lg">2%</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-red-300 w-3 h-3 rounded-full" />
                  <p className="flex-1 text-white text-lg">Team and Advisors</p>
                  <span className="text-white text-lg">4%</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-cyan-300 w-3 h-3 rounded-full" />
                  <p className="flex-1 text-white text-lg">
                    Listings Liquidity
                  </p>
                  <span className="text-white text-lg">9%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-6 px-8 mt-12 bg-[url(/assets/tokenomics-bg.png)] bg-center bg-no-repeat bg-contain">
            <div className="flex flex-col space-y-1">
              <h3 className="text-white/60 font-bold text-lg">
                Presale Allocation (60%)
              </h3>
              <p className="text-white/60 text-lg">
                600,000,000 tokens will be available during the presale,
                providing early contributors with an opportunity to support the
                project.
              </p>
            </div>

            <div className="flex flex-col space-y-1">
              <h3 className="text-white/60 font-bold text-lg">
                Staking Rewards (12%)
              </h3>
              <p className="text-white/60 text-lg">
                120,000,000 tokens will be reserved for staking rewards to
                incentivize users to lock and stake their tokens, contributing
                to the security and stability of the network.
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <h3 className="text-white/60 font-bold text-lg">
                Community Incentives (6%)
              </h3>
              <p className="text-white/60 text-lg">
                60,000,000 tokens will be allocated to community incentives,
                encouraging active participation, engagement, and contributions
                within the decentralized network.
              </p>
            </div>

            <div className="flex flex-col space-y-1">
              <h3 className="text-white/60 font-bold text-lg">
                Development Fund (4%)
              </h3>
              <p className="text-white/60 text-lg">
                40,000,000 tokens will be allocated to the development fund to
                ensure ongoing innovation, maintenance, and upgrades to the
                decentralized platform.
              </p>
            </div>

            <div className="flex flex-col space-y-1">
              <h3 className="text-white/60 font-bold text-lg">
                Partnerships and Collaborations (3%)
              </h3>
              <p className="text-white/60 text-lg">
                30,000,000 tokens will be reserved for forming strategic
                partnerships and collaborations, facilitating the growth and
                expansion of the ecosystem.
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <h3 className="text-white/60 font-bold text-lg">
                Marketing and Outreach (2%)
              </h3>
              <p className="text-white/60 text-lg">
                20,000,000 tokens will be allocated to marketing and outreach
                efforts to promote awareness, drive user adoption, and expand
                the community.
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <h3 className="text-white/60 font-bold text-lg">
                Team and Advisors (4%)
              </h3>
              <p className="text-white/60 text-lg">
                40,000,000 tokens will be allocated to the team and advisors,
                vesting over a specified period to align interests with the
                long-term success of the project.
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <h3 className="text-white/60 font-bold text-lg">
                Listings Liquidity (9%)
              </h3>
              <p className="text-white/60 text-lg">
                90,000,000 tokens will be allocated for exchange listings.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default Tokenomics;
