import React from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

type Props = {};

type TeamMember = {
  name: string;
  role: string;
  imgUrl: string;
  description: string;
};

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={member.imgUrl}
        className="h-32 w-auto rounded-lg"
        alt="-"
        width={200}
        height={200}
      />
      <h2 className="text-white font-semibold text-3xl mt-5">{member.name}</h2>
      <h3 className="text-[#D7F024] uppercase leading-7 mt-2 text-center">
        {member.role}
      </h3>
      <p className="text-center text-white leading-7 text-sm mt-4 lg:w-[90%] mx-auto">
        {member.description}
      </p>
    </div>
  );
}

const TEAM_DATA: TeamMember[] = [
  {
    imgUrl: "/assets/team/member1.png",
    name: "Mr.Q",
    role: "CHIEF ARCHITECT AND BLOCKCHAIN MAESTRO",
    description:
      "The driving force behind QURAC, MR.Q brings a wealth of experience in blockchain technology. As the Chief Architect,Mr.Q envisions a world where connectivity is decentralized, placing control back into the hands of users. With a deep passion for innovation and an unwavering commitment to privacy, Mr.Q leads the charge towards a more secure and accessible digital future.",
  },
  {
    imgUrl: "/assets/team/member2.png",
    name: "Mr.M",
    role: "TECH GURU AND INNOVATION EVANGELIST",
    description:
      "Meet MR.M, our Tech Guru and fearless leader of the innovation front. With a proven track record in harnessing the latest technological advancements, Mr.M ensures that QURAC remains at the forefront of decentralized connectivity. Always on the lookout for the next big thing, Mr.M turns ideas into reality, one innovative solution at a time.",
  },
  {
    imgUrl: "/assets/team/member3.png",
    name: "Mr.Walker",
    role: "EXPERIENCE ARCHITECT AND DESIGN VIRTUOSO",
    description:
      "Meet Mr. Walker, our Experience Architect who adds the aesthetic touch to our revolutionary project. Through intuitive design and user-centric interfaces, Mr. Walker ensures that your journey with QURAC is not only functional but also visually stunning. The bridge between technology and user experience,Mr. Walker shapes the face of decentralized connectivity.",
  },
  {
    imgUrl: "/assets/team/member4.png",
    name: "Mr.Sky",
    role: "CODE WHISPERER AND BLOCKCHAIN WIZARD",
    description:
      "As our Code Whisperer, Mr.Sky crafts the intricate lines of code that power QURAC. With a passion for blockchain and an eye for detail, Mr.Sky transforms concepts into reality, ensuring the stability and functionality of our decentralized network. If code is poetry, Mr.Sky is the bard.",
  },
  {
    imgUrl: "/assets/team/member5.png",
    name: "Mr.Borg",
    role: "CONNECTOR AND ADVOCATE",
    description:
      "As our Community Manager, Mr Borg, bridges the gap between QURAC and our vibrant community. With a knack for fostering engagement, Mr. Borg ensures that your voice is heard and that our community continues to grow and thrive. Join him in building a network that belongs to its users.",
  },
  {
    imgUrl: "/assets/team/member6.png",
    name: "Mr.Stu",
    role: "STORYTELLER AND BRAND ARCHITECT",
    description:
      "Meet Mr. Stu, our Marketing Guru,Storyteller and Brand Architect. Through captivating narratives and strategic campaigns, Mr. Stu communicates the essence of QURAC to the world. As we redefine connectivity, Mr. Stu ensures that our story resonates with those who share our vision for a decentralized future.",
  },
];

function Team({}: Props) {
  return (
    <section className="w-full pt-20 pb-40 bg-[url(/assets/team-bg.jpg)] bg-no-repeat bg-center">
      <SectionWrapper>
        <h2 className="text-white font-semibold text-3xl text-center">
          The Team
        </h2>
        <p className="text-white font-medium text-2xl text-center mt-4 mb-12">
          Meet the Visionaries
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-12 lg:px-8 px-2">
          {TEAM_DATA.map((team_member, index) => (
            <TeamMemberCard key={index} member={team_member} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}

export default Team;
