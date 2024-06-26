"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import SectionWrapper from "./home/SectionWrapper";

type Props = {};

function MobileLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 357 103"
      fill="none"
      data-arp-injected="true"
    >
      <path
        d="M48.019 67.5421L22.153 54.1558L22.8225 67.1605L48.5211 80.7453L80.6406 60.7955L80.9601 68.0306L48.6885 88.1635L16.4473 71.0986L13.8911 17.9501L5.99439 23.0024C4.13964 24.1825 2.62828 25.8328 1.61306 27.7867C0.597842 29.7405 0.114741 31.9285 0.212584 34.1297L1.88626 72.8844C1.98171 75.085 2.65362 77.2214 3.83429 79.0784C5.01496 80.9355 6.66268 82.4475 8.61142 83.4622L42.8914 101.382C44.8392 102.403 47.0207 102.891 49.2163 102.798C51.412 102.704 53.5443 102.031 55.3984 100.848L88.02 80.0126C89.8682 78.8257 91.3744 77.174 92.3888 75.2218C93.4032 73.2696 93.8903 71.085 93.8018 68.8853L92.4628 38.1593L48.019 67.5421Z"
        fill="#d7f024"
      />
      <path
        d="M61.4541 7.02122L51.1077 1.61784C49.1587 0.598965 46.9764 0.113304 44.7807 0.209771C42.5851 0.306239 40.4535 0.981428 38.6007 2.16734L20.175 13.9357L21.1336 33.6718L61.4541 7.02122Z"
        fill="#d7f024"
      />
      <path
        d="M21.7574 46.6613L47.6234 60.0171L92.1433 30.6038V30.1306C92.0539 27.9537 91.399 25.838 90.2433 23.9933C89.0877 22.1486 87.4716 20.6389 85.5551 19.6138L46.7561 45.257L39.8484 41.8532L78.906 16.149L68.0271 10.4556L21.4988 41.2121L21.7574 46.6613Z"
        fill="#d7f024"
      />
      <path
        d="M151.98 54.14H130.62C130.78 57.54 131.7 60.12 133.38 61.88C135.06 63.6 137.44 64.46 140.52 64.46C143.92 64.46 147.04 63.3 149.88 60.98L151.5 64.52C150.22 65.72 148.58 66.68 146.58 67.4C144.58 68.08 142.54 68.42 140.46 68.42C135.9 68.42 132.3 67.08 129.66 64.4C127.06 61.72 125.76 58.02 125.76 53.3C125.76 50.3 126.34 47.66 127.5 45.38C128.66 43.06 130.28 41.26 132.36 39.98C134.48 38.7 136.88 38.06 139.56 38.06C143.44 38.06 146.48 39.34 148.68 41.9C150.88 44.42 151.98 47.9 151.98 52.34V54.14ZM139.62 41.84C137.06 41.84 135 42.64 133.44 44.24C131.92 45.84 131.02 48.1 130.74 51.02H147.72C147.64 48.06 146.9 45.8 145.5 44.24C144.1 42.64 142.14 41.84 139.62 41.84ZM173.841 38.06C180.841 38.06 184.341 41.92 184.341 49.64V68H179.481V49.94C179.481 47.22 178.941 45.24 177.861 44C176.821 42.76 175.141 42.14 172.821 42.14C170.141 42.14 168.001 42.96 166.401 44.6C164.801 46.24 164.001 48.46 164.001 51.26V68H159.141V38.78H163.941V43.58C164.901 41.78 166.241 40.42 167.961 39.5C169.681 38.54 171.641 38.06 173.841 38.06ZM219.402 38.78V66.02C219.402 70.38 218.282 73.66 216.042 75.86C213.802 78.1 210.482 79.22 206.082 79.22C200.962 79.22 196.662 77.9 193.182 75.26L194.802 71.66C196.762 72.94 198.602 73.86 200.322 74.42C202.042 74.98 203.962 75.26 206.082 75.26C208.882 75.26 211.002 74.5 212.442 72.98C213.882 71.5 214.602 69.32 214.602 66.44V61.28C213.762 63.16 212.462 64.6 210.702 65.6C208.982 66.6 206.942 67.1 204.582 67.1C202.022 67.1 199.742 66.5 197.742 65.3C195.782 64.1 194.242 62.4 193.122 60.2C192.042 58 191.502 55.46 191.502 52.58C191.502 49.7 192.042 47.16 193.122 44.96C194.242 42.76 195.782 41.06 197.742 39.86C199.742 38.66 202.022 38.06 204.582 38.06C206.902 38.06 208.922 38.56 210.642 39.56C212.362 40.56 213.662 41.98 214.542 43.82V38.78H219.402ZM205.542 63.08C208.342 63.08 210.542 62.16 212.142 60.32C213.742 58.44 214.542 55.86 214.542 52.58C214.542 49.34 213.742 46.8 212.142 44.96C210.582 43.08 208.382 42.14 205.542 42.14C202.702 42.14 200.462 43.08 198.822 44.96C197.222 46.8 196.422 49.34 196.422 52.58C196.422 55.86 197.222 58.44 198.822 60.32C200.462 62.16 202.702 63.08 205.542 63.08ZM228.398 68V38.78H233.258V68H228.398ZM227.918 26.12H233.798V31.58H227.918V26.12ZM256.744 62.84C257.624 62.84 258.544 62.78 259.504 62.66L259.144 68.24C257.944 68.36 256.844 68.42 255.844 68.42C251.724 68.42 248.684 67.48 246.724 65.6C244.764 63.68 243.784 60.84 243.784 57.08V44.3H238.144V38.66H243.784V29.9H251.284V38.66H259.024V44.3H251.284V56.96C251.284 60.88 253.104 62.84 256.744 62.84ZM289.632 54.68H269.652C269.892 57.4 270.712 59.42 272.112 60.74C273.512 62.06 275.512 62.72 278.112 62.72C281.352 62.72 284.312 61.68 286.992 59.6L289.152 64.76C287.792 65.88 286.072 66.78 283.992 67.46C281.952 68.14 279.892 68.48 277.812 68.48C273.012 68.48 269.212 67.12 266.412 64.4C263.652 61.68 262.272 57.96 262.272 53.24C262.272 50.24 262.872 47.58 264.072 45.26C265.272 42.94 266.952 41.14 269.112 39.86C271.312 38.58 273.792 37.94 276.552 37.94C280.592 37.94 283.772 39.24 286.092 41.84C288.452 44.44 289.632 48.02 289.632 52.58V54.68ZM276.732 43.22C274.732 43.22 273.112 43.86 271.872 45.14C270.672 46.42 269.932 48.26 269.652 50.66H283.212C283.132 48.22 282.532 46.38 281.412 45.14C280.292 43.86 278.732 43.22 276.732 43.22ZM309.147 68.48C306.067 68.48 303.387 67.86 301.107 66.62C298.867 65.38 297.147 63.62 295.947 61.34C294.747 59.06 294.147 56.4 294.147 53.36C294.147 50.32 294.767 47.64 296.007 45.32C297.287 42.96 299.087 41.14 301.407 39.86C303.727 38.58 306.407 37.94 309.447 37.94C311.527 37.94 313.547 38.28 315.507 38.96C317.507 39.6 319.107 40.48 320.307 41.6L318.147 46.88C316.907 45.88 315.587 45.12 314.187 44.6C312.827 44.08 311.467 43.82 310.107 43.82C307.507 43.82 305.487 44.64 304.047 46.28C302.607 47.88 301.887 50.2 301.887 53.24C301.887 56.24 302.607 58.56 304.047 60.2C305.487 61.8 307.507 62.6 310.107 62.6C311.467 62.6 312.827 62.34 314.187 61.82C315.587 61.3 316.907 60.54 318.147 59.54L320.307 64.76C319.027 65.92 317.387 66.84 315.387 67.52C313.387 68.16 311.307 68.48 309.147 68.48ZM342.104 37.94C345.624 37.94 348.244 38.94 349.964 40.94C351.684 42.94 352.544 45.96 352.544 50V68H345.044V50.42C345.044 48.14 344.604 46.48 343.724 45.44C342.884 44.4 341.544 43.88 339.704 43.88C337.544 43.88 335.804 44.56 334.484 45.92C333.204 47.28 332.564 49.1 332.564 51.38V68H325.064V25.7H332.564V42.74C333.564 41.18 334.884 40 336.524 39.2C338.204 38.36 340.064 37.94 342.104 37.94Z"
        fill="#ffffff"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="68"
          y1="23"
          x2="22"
          y2="91"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D255F9" />
          <stop offset="1" stop-color="#7855E9" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="68"
          y1="23"
          x2="22"
          y2="91"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D255F9" />
          <stop offset="1" stop-color="#7855E9" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="68"
          y1="23"
          x2="22"
          y2="91"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D255F9" />
          <stop offset="1" stop-color="#7855E9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#ffffff"
      className="w-auto h-8"
    >
      <path
        fillRule="evenodd"
        d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Header({}: Props) {
  const [isBurgerNavOpen, setIsBurgerNavOpen] = React.useState(false);

  function closeMenu() {
    setIsBurgerNavOpen(false);
  }
  function openMenu() {
    setIsBurgerNavOpen(true);
  }

  return (
    <header
      className={`w-full bg-transparent ${isBurgerNavOpen ? "z-40" : "z-40"}`}
    >
      <SectionWrapper>
        <div className="relative flex items-center justify-between lg:py-0 py-3 lg:px-0 px-3">
          <Image
            className="h-28 w-auto lg:flex hidden"
            src="/assets/logo.png"
            alt="logo"
            width={300}
            height={300}
          />
          <img
            src="https://engitech.s3.amazonaws.com/images/home14-logo.svg"
            alt=""
            className="md:h-16 h-14 w-auto lg:hidden flex"
          />

          <nav className="items-center space-x-6 lg:flex hidden">
            <Link
              className="text-white hover:text-yellow-200/100 transition-all duration-200"
              href="#token-presale"
            >
              Token Presale
            </Link>
            <Link
              className="text-white hover:text-yellow-200/100 transition-all duration-200"
              href="#about-us"
            >
              About Us
            </Link>
            <Link
              className="text-white hover:text-yellow-200/100 transition-all duration-200"
              href="#tokenomics"
            >
              Tokenomics
            </Link>
            <Link
              className="text-white hover:text-yellow-200/100 transition-all duration-200"
              href="#how-it-works"
            >
              How It Works
            </Link>
            <Link
              className="text-white hover:text-yellow-200/100 transition-all duration-200"
              href="#the-team"
            >
              The Team
            </Link>
            <Link
              className="text-white hover:text-yellow-200/100 transition-all duration-200"
              href="#faq"
            >
              FAQ
            </Link>
          </nav>
          <Button variant="primary" className="px-12 py-3 lg:flex hidden">
            Buy Tokens
          </Button>
          <button className="lg:hidden block" onClick={openMenu}>
            <MenuIcon />
          </button>
          <div
            className={`absolute bg-white px-6 w-80 right-0 h-screen top-0 z-40 transition-all duration-300 ${
              isBurgerNavOpen ? "translate-x-4" : "translate-x-96"
            }`}
          >
            <button className="mt-6 w-full " onClick={closeMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-8 h-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
            <nav className="flex flex-col divide-y-[1px] divide-gray-200">
              <Link
                className="py-4 text-sm text-black/90"
                href="#token-presale"
              >
                Token Presale
              </Link>
              <Link
                className="py-4 text-sm text-black/90"
                onClick={closeMenu}
                href="#about-us"
              >
                About Us
              </Link>
              <Link
                className="py-4 text-sm text-black/90"
                onClick={closeMenu}
                href="#tokenomics"
              >
                Tokenomics
              </Link>
              <Link
                className="py-4 text-sm text-black/90"
                onClick={closeMenu}
                href="#how-it-works"
              >
                How It Works
              </Link>
              <Link
                className="py-4 text-sm text-black/90"
                onClick={closeMenu}
                href="#the-team"
              >
                The Team
              </Link>
              <Link
                className="py-4 text-sm text-black/90"
                onClick={closeMenu}
                href="#faq"
              >
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      </SectionWrapper>
    </header>
  );
}

export default Header;
