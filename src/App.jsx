import { useState, useEffect } from "react";
import "./style.css";
import logoDark from "./images/logo-dark-mode.svg";
import logoLight from "./images/logo-light-mode.svg";
import heroImg from "./images/illustration-intro.png";
import featuresLogo1 from "./images/icon-access-anywhere.svg";
import featuresLogo2 from "./images/icon-security.svg";
import featuresLogo3 from "./images/icon-collaboration.svg";
import featuresLogo4 from "./images/icon-any-file.svg";
import arrowIcon from "./images/icon-arrow.svg";

import quoteIcon from "./images/bg-quotes.png";
import profile1 from "./images/profile-1.jpg";
import profile2 from "./images/profile-2.jpg";
import profile3 from "./images/profile-3.jpg";

import productiveImg from "./images/illustration-stay-productive.png";

import phoneSvg from "./images/icon-phone.svg";
import emailSvg from "./images/icon-email.svg";
import facebookLogo from "./images/facebook.svg";
import twitterLogo from "./images/twitter.svg";
import instagram from "./images/instagram.svg";

export default function App() {
  const [darkMode, setDarkMode] = useState(function () {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "true"; // ensures boolean true/false
  });

  useEffect(
    function () {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", darkMode);
    },
    [darkMode]
  );

  return (
    <main>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Features />
      <Productive />
      <Testimonials />
      <EarlyAccess />
      <Footer />
    </main>
  );
}

function Navigation({ darkMode, setDarkMode }) {
  function handleNavLink(e) {
    e.preventDefault();

    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <nav className="section-container  h-40 md:h-20 ">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
        <img src={darkMode ? logoDark : logoLight} alt="logo" />
        <div className="flex gap-4 items-center justify-center md:gap-10">
          <a
            href="#features"
            onClick={handleNavLink}
            className="hover:text-accentCyan duration-200"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="hover:text-accentCyan duration-200"
            onClick={handleNavLink}
          >
            Testimonials
          </a>
          {/* Dark/light Mode Button */}
          <button
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          >
            {!darkMode ? (
              <svg
                id="theme-toggle-dark-icon"
                class="w-5 h-5 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            ) : (
              <svg
                id="theme-toggle-light-icon"
                class="w-5 h-5 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="bg-[url(./images/bg-curvy-light-mode.svg)] dark:bg-[url(./images/bg-curvy-dark-mode.svg)] bg-no-repeat bg-contain bg-bottom"
    >
      <div className="section-container flex flex-col items-center justify-center gap-10 mt-5 pb-52 md:pt-20">
        <img src={heroImg} alt="file" />
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="btn">Get Started</button>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="bg-gray-50 dark:bg-darkBlue1">
      {/*Features Container Grid*/}
      <div className="section-container mt-0 pt-12 pb-32 grid grid-cols-1 items-center justify-center gap-24 md:grid-cols-2 md:gap-x-0">
        {/*Grid Item 1 */}
        <div className="flex flex-col items-center ">
          <img src={featuresLogo1} alt="computer and phone" className="mb-13" />
          <h3>Access your file from anywhere</h3>
          <p className=" max-w-md">
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>

        {/*Grid Item 2 */}
        <div className="flex flex-col items-center ">
          <img
            src={featuresLogo2}
            alt="computer and phone"
            className="mb-13 md:mb-10 "
          />
          <h3>Security you can trust</h3>
          <p className=" max-w-md">
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>

        {/*Grid Item 3 */}
        <div className="flex flex-col items-center ">
          <img src={featuresLogo3} alt="computer and phone" className="mb-13" />
          <h3>Access your file from anywhere</h3>
          <p className=" max-w-md">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>

        {/*Grid Item 4 */}
        <div className="flex flex-col items-center ">
          <img src={featuresLogo4} alt="computer and phone" className="mb-13" />
          <h3>Security you can trust</h3>
          <p className=" max-w-md">
            Whether you`re sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </div>
    </section>
  );
}

function Productive() {
  return (
    <section id="productive" className="bg-gray-50 dark:bg-darkBlue1 py-20">
      <div className="section-container flex flex-col items-center justify-center  text-left mt-0 md:text-center lg:text-left lg:flex-row lg:justify-around lg:gap-0">
        <img
          src={productiveImg}
          alt="people being productive"
          className="mb-20 md:scale-90"
        />
        <div className="flex  items-start flex-col gap-5 md:items-center lg:items-start  md:gap-8 lg:mb-10 ">
          <h4>Stay productive, wherever you are</h4>
          <p className="text-md  md:max-w-sm">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="text-md  md:max-w-sm">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <div className="block">
            <a
              href="#"
              className=" text-accentCyan border-b border-accentCyan "
            >
              See how Fylo works
              <img
                src={arrowIcon}
                alt="arrow pointing right"
                className="inline ml-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue1 py-20">
      {/* Testimonials Container */}
      <div className="section-container flex flex-col items-center justify-center gap-10 pt-12 pb-80 md:pb-96 md:flex-row">
        {/* Testimonial Figure 1 */}
        <figure className="relative flex flex-col w-full bg-gray-100 dark:bg-darkBlue3 p-10 rounded-lg gap-6 md:gap-12 md:w-1/3">
          <p className="text-left leading-5 md:leading-8">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch, our team has become a well-oiled
            collaboration machine.
          </p>

          <div className="flex gap-4 items-center">
            <img
              src={profile1}
              alt="testimonial figure"
              className="rounded-full w-12"
            />
            <div className="flex flex-col items-start  md:items-start">
              <h5>Satish Patel</h5>
              <p className="text-xs font-extralight">Founder & CEO. Huddle</p>
            </div>
          </div>
          {/* Quote Icon */}
          <img
            src={quoteIcon}
            alt="quote Icon"
            className="absolute -top-10 left-2 "
          />
        </figure>

        {/* Testimonial Figure 2 */}
        <figure className="flex flex-col w-full bg-gray-100 dark:bg-darkBlue3 p-10 rounded-lg gap-6 md:gap-12 md:w-1/3">
          <p className="text-left leading-5 md:leading-8 ">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch, our team has become a well-oiled
            collaboration machine.
          </p>

          <div className="flex gap-4 items-center md:items-start">
            <img
              src={profile2}
              alt="testimonial figure"
              className="rounded-full w-12"
            />
            <div className="flex flex-col items-start">
              <h5>Bruce McKenzie</h5>
              <p className="text-xs font-extralight">Founder & CEO. Huddle</p>
            </div>
          </div>
        </figure>

        {/* Testimonial Figure 3 */}
        <figure className="flex flex-col w-full bg-gray-100 dark:bg-darkBlue3 p-10 rounded-lg gap-6 md:gap-12 md:w-1/3">
          <p className="text-left leading-5  md:leading-8">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch, our team has become a well-oiled
            collaboration machine.
          </p>

          <div className="flex gap-4 items-center">
            <img
              src={profile3}
              alt="testimonial figure"
              className="rounded-full w-12"
            />
            <div className="flex flex-col items-start  md:items-start">
              <h5>Eva Boyd</h5>
              <p className="text-xs font-extralight">Founder & CEO. Huddle</p>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}

function EarlyAccess() {
  return (
    <section
      id="earlyaccess"
      className="relative bg-gray-50 dark:bg-darkBlue2 px-6 md:px-0 "
    >
      <div className="relative -top-40 max-w-4xl mx-auto text-center rounded-lg bg-gray-200 dark:bg-darkBlue p-10 px-6 md:px-16">
        <h2>Get early access today</h2>
        <span className="block text-sm mb-5 ">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </span>

        <div className="flex flex-col items-center gap-6 md:flex-row ">
          <div className="w-full md:flex-1">
            <input
              type="email"
              placeholder="email@example.com"
              className="bg-white w-full focus:outline-none rounded-full py-3 px-10 placeholder:text-gray-400  text-black"
            />
          </div>
          <button className="btn text-base w-full px-6  md:w-56">
            Get Started For Free
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-darkBlue2 text-white">
      <div className="section-container px-5 py-10 mt-0">
        {/* Menu Container */}
        <div className="flex flex-col items-center justify-center gap-20 md:flex-row md:items-start md:justify-between">
          {/* Contact Container */}
          <div className="flex flex-col items center gap-5 ">
            <div className="flex gap-3">
              <img src={phoneSvg} alt="phone" />
              <a href="#">+1-543-123-4567</a>
            </div>
            <div className="flex gap-3">
              <img src={emailSvg} alt="phone" />
              <a href="#">example@fylo.com</a>
            </div>
          </div>

          {/* Link Containers*/}

          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-20">
            {/* Link Container  1*/}
            <div className="flex flex-col items-center justify-center gap-5">
              <a href="#" className="footer__link">
                about us
              </a>
              <a href="#" className="footer__link">
                jobs
              </a>
              <a href="#" className="footer__link">
                press
              </a>
              <a href="#" className="footer__link">
                blog
              </a>
            </div>

            {/* Link Container  2*/}
            <div className="flex flex-col items-center justify-center gap-5">
              <a href="#" className="footer__link">
                contact us
              </a>
              <a href="#" className="footer__link">
                terms
              </a>
              <a href="#" className="footer__link">
                privacy
              </a>
            </div>
          </div>

          {/* Socials Container */}
          <div className="flex gap-4">
            <div
              className="bg-darkBlue3 p-2 rounded-full transition-all hover:scale-125 hover:bg-[darkblue]  duration-200"
              tabIndex={0}
            >
              <img src={facebookLogo} alt="facebookLogo" />
            </div>
            <div
              tabIndex={0}
              className="bg-darkBlue3 p-2 rounded-full transition-all hover:scale-125 hover:bg-accentCyan  duration-200"
            >
              <img src={twitterLogo} alt="twitterLogo " />
            </div>
            <div
              tabIndex={0}
              className="bg-darkBlue3 p-2 rounded-full  transition-all hover:bg-[linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4)]  hover:scale-125 duration-200"
            >
              <img src={instagram} alt="instagram" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
