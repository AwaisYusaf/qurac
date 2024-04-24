import React from "react";
import SectionWrapper from "./SectionWrapper";
import {
  HowItWorksIcon1,
  HowItWorksIcon2,
  HowItWorksIcon3,
  HowItWorksIcon4,
  HowItWorksIcon5,
  HowItWorksIcon6,
  HowItWorksIcon7,
  HowItWorksIcon8,
  HowItWorksIcon9,
} from "./HowItWorkIcon";

type Props = {};

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function Card({
  content: { icon, title, description },
}: {
  content: CardProps;
}) {
  return (
    <div className="flex flex-col items-center space-y-4">
      {icon}
      <p className="text-white text-center font-semibold text-lg">{title}</p>
      <span className="text-center text-white/70 leading-8 w-[80%] mx-auto">
        {description}
      </span>
    </div>
  );
}

const CARD_ITEMS: CardProps[] = [
  {
    title: "Decentralized Network Architecture",
    description: `QURAC operates on a decentralized network, a web of interconnected nodes where each user serves as both a consumer and provider of internet services. This unique architecture eliminates the need for traditional internet service providers, giving you the power to shape your online experience.`,
    icon: <HowItWorksIcon1 />,
  },
  {
    title: "Token Incentives",
    description: `Joining the decentralized revolution comes with perks. As you share your excess bandwidth with the network, you earn native utility tokens. These tokens not only represent your contribution but can be used within the ecosystem for purchasing additional services or exchanged for goods and services.`,
    icon: <HowItWorksIcon2 />,
  },
  {
    title: "Smart Contracts for Transparency",
    description: `The backbone of QURAC lies in smart contracts – self-executing contracts with terms directly coded into the blockchain. These contracts automate various processes, from incentivizing users to validating transactions, ensuring transparency and security.`,
    icon: <HowItWorksIcon3 />,
  },
  {
    title: "Privacy and Security",
    description: `Your privacy is paramount. Leveraging advanced blockchain technology, QURAC guarantees the security of your data and activities. Enjoy the internet without worrying about intrusive surveillance or data breaches.`,
    icon: <HowItWorksIcon4 />,
  },
  {
    title: "Quality of Service (QoS) Mechanisms",
    description: `To enhance your internet experience, QURAC incorporates Quality of Service (QoS) mechanisms. Smart contracts facilitate agreements between users, prioritizing certain types of traffic and ensuring a reliable and efficient network.`,
    icon: <HowItWorksIcon5 />,
  },
  {
    title: "Governance by the Community",
    description: `QURAC is more than just a network; it's a community-driven ecosystem. Participate in shaping the future through decentralized governance. Vote on network upgrades, propose changes, and actively contribute to the evolution of the platform.`,
    icon: <HowItWorksIcon6 />,
  },
  {
    title: "Seamless Integration",
    description: `Transitioning to a decentralized network should be seamless.QURAC is designed to integrate seamlessly with existing internet infrastructure. Compatibility features ensure a smooth experience as you embark on this revolutionary journey.`,
    icon: <HowItWorksIcon7 />,
  },
  {
    title: "User-Friendly Interface",
    description: `Navigating the decentralized landscape is made easy with our intuitive user interface. Whether on your desktop or mobile device, managing your contributions, exploring the network, and staying engaged with the community is just a click away.`,
    icon: <HowItWorksIcon8 />,
  },
  {
    title: "Ready to Join the Decentralized Revolution?",
    description: `Now that you have a glimpse of how QURAC operates, it's time to experience decentralized connectivity firsthand. Sign up today, become an active participant, and be a part of reshaping the future of the internet. Connect with us and let's redefine connectivity together!`,
    icon: <HowItWorksIcon9 />,
  },
];

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
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-8">
            {CARD_ITEMS.slice(0, 3).map((content, index) => (
              <Card content={content} key={index} />
            ))}
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-8">
            {CARD_ITEMS.slice(3, 6).map((content, index) => (
              <Card content={content} key={index} />
            ))}
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-8">
            {CARD_ITEMS.slice(6, 9).map((content, index) => (
              <Card content={content} key={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default HowItWorks;
