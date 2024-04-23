import React from "react";

type Props = {
  children: React.ReactNode;
};

function SectionWrapper({ children }: Props) {
  return <div className="max-w-7xl mx-auto z-10">{children}</div>;
}

export default SectionWrapper;
