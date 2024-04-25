import React from "react";
import SectionWrapper from "./home/SectionWrapper";
import Link from "next/link";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-[#2F0F42]">
      <SectionWrapper>
        <div className="flex items-center justify-between lg:flex-row flex-col lg:space-y-0 space-y-3 max-w-6xl py-16 mx-auto">
          <h2 className="text-white/60">© 2024 QURAC – All rights reserved.</h2>
          <nav className="flex items-center space-x-6">
            <Link
              className="font-medium hover:text-white transition-all duration-200 text-white/60"
              href="#"
            >
              Cart
            </Link>
            <Link
              className="font-medium hover:text-white transition-all duration-200 text-white/60"
              href="#"
            >
              Checkout
            </Link>
            <Link
              className="font-medium hover:text-white transition-all duration-200 text-white/60"
              href="#"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </SectionWrapper>
    </footer>
  );
}

export default Footer;
