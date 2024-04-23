import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import SectionWrapper from "./home/SectionWrapper";

type Props = {};
// Nav links:
// Token Presale
// About Us
// Tokenomics
// How It Works
// The Team
// FAQ

// #1C0A27
function Header({}: Props) {
  return (
    <header className="w-full bg-transparent z-10">
      <SectionWrapper>
        <div className="flex items-center justify-between">
          <Image
            className="h-28 w-auto"
            src="/assets/logo.png"
            alt="logo"
            width={300}
            height={300}
          />
          <nav className="flex items-center space-x-6">
            <Link
              className="text-white hover:text-yellow-200/100 transition-all duration-200"
              href="/presale"
            >
              Token Presale
            </Link>
            <Link
              className="text-white hover:text-yellow-200/100 transition-all duration-200"
              href="/about"
            >
              About Us
            </Link>
            <Link
              className="text-white hover:text-yellow-200/100 transition-all duration-200"
              href="/tokenomics"
            >
              Tokenomics
            </Link>
            <Link
              className="text-white hover:text-yellow-200/100 transition-all duration-200"
              href="/how-it-works"
            >
              How It Works
            </Link>
            <Link
              className="text-white hover:text-yellow-200/100 transition-all duration-200"
              href="/team"
            >
              The Team
            </Link>
            <Link
              className="text-white hover:text-yellow-200/100 transition-all duration-200"
              href="/faq"
            >
              FAQ
            </Link>
          </nav>
          <Button variant="primary">Buy Tokens</Button>
        </div>
      </SectionWrapper>
    </header>
  );
}

export default Header;
