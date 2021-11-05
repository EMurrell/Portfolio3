import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import DelayedFadeIn from "../animations/DelayedFadeIn";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <>
      <section
        id="Contact"
        className="flex flex-col justify-center w-full p-5 pb-24 font-bold tracking-wider md:pb-20 h-11/12 font-logo bg-matte snap-y snap-start snap-always md:px-36 lg:px-36 xl:px-96 text-matte"
      >
        <FadeUp>
          <div className="py-6 text-2xl text-center md:text-3xl lg:text-5xl text-salmon">
            Let's Make Something Great
          </div>
        </FadeUp>
        <FadeIn>
          <div className="flex flex-col justify-center text-sm text-offwhite md:text-xl lg:text-2xl">
            <a href="mailto:emurrell.dev@gmail.com">
              <ul className="flex flex-col py-4 transition duration-300 ease-in-out transform border-b-2 border-offwhite hover:scale-105 hover:text-salmon">
                <li className="inline-flex justify-between ">
                  Email
                  <BsArrowUpRight />
                </li>
                <li className="text-xs font-normal md:text-base ">
                  emurrell.dev@gmail.com
                </li>
              </ul>
            </a>
            <a href="https://github.com/EMurrell">
              <ul className="flex flex-col py-4 transition duration-300 ease-in-out transform border-b-2 border-offwhite hover:text-salmon hover:scale-105">
                <li className="inline-flex justify-between ">
                  Github
                  <BsArrowUpRight />
                </li>
                <li className="text-xs font-normal md:text-base">
                  github.com/EMurrell
                </li>
              </ul>
            </a>
            <a href="https://twitter.com/MurrellWeb">
              <ul className="flex flex-col py-4 transition duration-300 ease-in-out transform border-b-2 border-offwhite hover:text-salmon hover:scale-105">
                <li className="inline-flex justify-between ">
                  Twitter
                  <BsArrowUpRight />
                </li>
                <li className="text-xs font-normal md:text-base">
                  twitter.com/MurrellWeb
                </li>
              </ul>
            </a>
            <a href="https://dev.to/emurrell">
              <ul className="flex flex-col py-4 transition duration-300 ease-in-out transform hover:text-salmon hover:scale-105">
                <li className="inline-flex justify-between ">
                  Dev.to
                  <BsArrowUpRight />
                </li>
                <li className="text-xs font-normal md:text-base">
                  dev.to/emurrell
                </li>
              </ul>
            </a>
          </div>
        </FadeIn>
      </section>

      <footer className="flex justify-center py-4 bg-matte h-1/12 font-logo">
        <DelayedFadeIn>
          <a
            href="/#"
            className="text-center transition duration-200 ease-in-out transform md:text-xl text-offwhite hover:text-salmon hover:scale-105"
          >
            © {getCurrentYear()} EMurrell.com
            <p className="p-2 text-sm">-Back to Home-</p>
          </a>
        </DelayedFadeIn>
      </footer>
    </>
  );
}
