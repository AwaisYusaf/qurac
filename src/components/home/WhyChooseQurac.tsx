import React from "react";
import SectionWrapper from "./SectionWrapper";
import {
  HowItWorksIcon1,
  HowItWorksIcon2,
  HowItWorksIcon3,
  HowItWorksIcon4,
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
    <div className="flex flex-col items-center lg:space-y-4 space-y-2">
      {icon}
      <p className="text-white text-center font-semibold text-lg">{title}</p>
      <span className="text-center text-white/70 lg:leading-8 leading-7 w-[80%] mx-auto">
        {description}
      </span>
    </div>
  );
}

const CARD_ITEMS: CardProps[] = [
  {
    title: "Earn as You Connect",
    description: `Turn your unused bandwidth into a valuable asset. By participating in QURAC, you can earn tokens, becoming an active part of the decentralized internet revolution`,
    icon: <HowItWorksIcon1 />,
  },
  {
    title: "Privacy and Security",
    description: `Your security and privacy are our top priorities. By leveraging blockchain technology, we ensure that your data is secure and your internet experience is free from surveillance.QURAC is committed to providing a safe and private online environment.`,
    icon: <HowItWorksIcon2 />,
  },
  {
    title: "Sustainability",
    description: `Join us in promoting sustainability. QURAC encourages eco-friendly practices and aims to reduce the carbon footprint associated with internet usage. Be a part of a network that cares about the planet and its people.`,
    icon: <HowItWorksIcon3 />,
  },
];

function WhyChooseQurac({}: Props) {
  return (
    <section className="w-full py-12 bg-[url(/assets/tokenomics-bg.png)] bg-no-repeat bg-center">
      <SectionWrapper>
        <h1 className="text-white font-semibold text-4xl text-center">
          Why Choose QURAC
        </h1>

        <div className="flex flex-col mt-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-8 lg:gap-y-0 gap-y-6">
            {CARD_ITEMS.slice(0, 3).map((content, index) => (
              <Card content={content} key={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default WhyChooseQurac;
