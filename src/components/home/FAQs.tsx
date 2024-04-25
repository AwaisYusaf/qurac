import React from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "../Button";

type Props = {};
type FAQs = {
  question: string;
  answer: string;
};
const FAQS_DATA: FAQs[] = [
  {
    question:
      "What makes your decentralized network different from traditional internet service providers?",
    answer:
      "Our decentralized network empowers users by eliminating the need for central control. Users contribute to the network, shaping their internet experience and promoting a more inclusive and transparent ecosystem.",
  },
  {
    question: "How can users earn rewards through staking on your platform?",
    answer:
      "Users can stake their tokens to contribute to the stability of the network and earn rewards in return. The longer the staking period, the greater the rewards, creating an incentive for long-term participation.",
  },
  {
    question: "How is user privacy ensured within your decentralized network?",
    answer:
      "Privacy is paramount. Leveraging blockchain technology, our network ensures that user data remains secure and free from surveillance, providing a private online environment for all users.",
  },
  {
    question:
      "What are the benefits of holding and using your native utility token?",
    answer:
      "Holding our token provides users with access to premium features, discounts on network fees, voting rights in governance decisions, and the opportunity to earn additional tokens through staking.",
  },
  {
    question:
      "How do you plan to encourage community participation and contributions?",
    answer:
      "We allocate a significant portion of tokens for community incentives, rewarding users for active participation, engagement, and contributions that enhance the overall health of the network.",
  },
  {
    question:
      "Can you elaborate on your approach to sustainability and reducing the carbon footprint?",
    answer:
      "We prioritize sustainability by promoting eco-friendly practices. Our network aims to reduce the carbon footprint associated with internet usage, contributing to a greener and more sustainable digital future.",
  },
  {
    question:
      "What initiative are in place to foster partnerships and collaborations within your ecosystem?",
    answer:
      "We've allocated tokens for partnerships, aiming to collaborate with businesses, organizations, and other projects to expand the ecosystem and bring added value to our users.",
  },
  {
    question:
      "How does your decentralized governance model work, and how can users get involved?",
    answer:
      "Our governance model allows token holders to vote on proposals, network upgrades, and important decisions. Users can actively participate in shaping the future of the platform through transparent and decentralized governance.",
  },
  {
    question:
      "How will your network integrate with existing internet infrastructure?",
    answer:
      "We've designed our network to seamlessly integrate with existing internet infrastructure, ensuring compatibility and a smooth transition to a decentralized model without disrupting the user experience.",
  },
  {
    question:
      "What steps have you taken to ensure a user-friendly experience within your decentralized network?",
    answer:
      "Our intuitive user interface, both on desktop and mobile devices, makes navigating the decentralized landscape easy. We've focused on creating a seamless and user-friendly experience for all participants.",
  },
  {
    question:
      "How does your network address concerns about bandwidth limitations and congestion?",
    answer:
      "Our decentralized network utilizes innovative Quality of Service (QoS) mechanisms, ensuring efficient bandwidth allocation and prioritizing critical applications to minimize congestion and enhance user experience.",
  },
  {
    question:
      "Can you provide examples of premium features accessible through your native utility token?",
    answer:
      "Premium features include faster connection speeds, priority access during peak times, enhanced security measures, and other functionalities that enhance the overall internet experience for token holders.",
  },
  {
    question:
      "What measures are in place to prevent fraud and ensure the authenticity of transactions on the network?",
    answer:
      "Transactions are secured through blockchain technology, providing transparency and immutability. Smart contracts automate verification processes, reducing the risk of fraud and ensuring the authenticity of all transactions.",
  },
  {
    question:
      "How does your network handle upgrades and improvements over time?",
    answer:
      "Decisions regarding network upgrades are made through decentralized governance. Token holders actively participate in proposing and voting on improvements, ensuring a community-driven approach to development.",
  },
  {
    question:
      "In what ways can users participate in staking, and what are the staking rewards based on?",
    answer:
      "Users can participate in staking by locking their tokens for a specified period. Staking rewards are based on the duration and amount staked, with longer staking periods and higher amounts earning greater rewards.",
  },
  {
    question:
      "How is the development fund allocated, and how does it contribute to the growth of the platform?",
    answer:
      "The development fund is allocated to ongoing innovation, maintenance, and upgrades. It ensures a sustainable and evolving platform, allowing us to stay at the forefront of technological progress.",
  },
  {
    question:
      "What strategies are in place to drive user adoption and expand the community?",
    answer:
      "Our marketing initiatives focus on raising awareness, creating engaging campaigns, and building partnerships to drive user adoption. Community incentives further encourage active participation and growth.",
  },
  {
    question:
      "How can users contribute feedback or suggestions to the development team, and how are these considered?",
    answer:
      "We encourage an open dialogue through community forums and channels where users can provide feedback and suggestions. The development team actively considers and prioritizes community input in the decision-making process.",
  },
];

function FAQs({}: Props) {
  return (
    <section className="w-full relative bg-transparent" id="faq">
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
          <h2 className="text-white font-semibold text-3xl text-center lg:mt-0 mt-10">
            Frequently Asked Questions
          </h2>

          <div className="max-w-6xl mx-auto mt-12 flex flex-col">
            <Accordion type="single" collapsible className="w-full">
              {FAQS_DATA.map((faq, index) => {
                return (
                  <AccordionItem
                    className="border-b-2 border-gray-600/20 py-3"
                    key={index}
                    value={faq.question}
                  >
                    <AccordionTrigger className="text-white text-xl lg:text-center text-start border-none divide-y-0 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 text-lg">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
            <Button
              variant="primary"
              className=" px-12 py-4 lg:my-24 my-12 bg-[#D7F024] text-black hover:bg-white hover:text-black mx-auto"
            >
              Buy Tokens Now
            </Button>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

export default FAQs;
