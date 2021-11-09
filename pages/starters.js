import Link from "next/link";
import Head from "next/head";
import MetaData from "../components/MetaData";
import QuickFadeIn from "../animations/QuickFadeIn";

export default function Mtc() {
  return (
    <>
      <MetaData />
      <section
        id="starters"
        className="w-full min-h-screen px-5 pt-4 tracking-wide font-logo bg-matte text-offwhite md:pt-8 md:px-12 lg:px-24 2xl:px-32"
      >
        <div className="inline-flex justify-between w-full pt-2 mt-2 text-xs border-t-2 border-ltblack dark:border-offwhite md:text-base">
          <p>UI Components & Starters</p>
          <p>Case Study</p>
        </div>
        <QuickFadeIn>
          <div className="flex flex-col">
            <div className="flex pt-12 lg:pt-24">
              <h3 className="pr-16 text-2xl font-medium md:text-2xl lg:text-3xl md:pr-96">
                A collection of personal projects.
              </h3>
            </div>

            <div className="flex flex-col pt-4 font-body">
              <div className="pr-10 text-xl lg:w-3/4 md:text-xl lg:text-2xl">
                <p className="pt-8 pb-6 lg:pb-20">
                  Brief:
                  <br /> An ongoing project to design and develop UI components
                  for the purpose of contributing to the open-source community
                  as well as expand my web development skills.
                </p>
              </div>
              <div className="pb-6 pr-10 text-xl md:text-xl lg:text-2xl lg:pb-20">
                <p className="py-4 font-logo">1. Next.js Single Page Starter</p>
                <p>
                  {" "}
                  An unopinionated, minimally-designed website template that is
                  configured with fade-in animations that are triggered on
                  scroll, and a navigation bar with animated sliding side-bar.
                </p>
                <div className="flex flex-col justify-between py-4 xl:flex-row font-logo">
                  <button className="inline-flex justify-center px-10 py-2 my-4 transition duration-300 ease-in-out transform border-2 w-72 md:w-80 rounded-3xl hover:border-salmon hover:scale-105 hover:bg-salmon border-offwhite hover:text-matte ">
                    <a
                      className="text-sm md:text-sm lg:text-lg "
                      href="https://next-js-singlepage-starter.vercel.app/"
                    >
                      VIEW PREVIEW&emsp;
                    </a>
                  </button>
                  <button className="inline-flex justify-center px-10 py-2 my-4 text-sm transition duration-300 ease-in-out transform border-2 w-72 md:w-80 rounded-3xl hover:border-salmon hover:scale-105 hover:bg-salmon border-offwhite hover:text-matte ">
                    <a
                      className="text-sm md:text-sm lg:text-lg "
                      href="https://github.com/EMurrell/next.js-singlepage-starter"
                    >
                      VIEW ON GITHUB&emsp;
                    </a>
                  </button>
                  <button className="inline-flex justify-center px-10 py-2 my-4 transition duration-300 ease-in-out transform border-2 w-72 md:w-80 rounded-3xl hover:border-salmon hover:scale-105 hover:bg-salmon border-offwhite hover:text-matte ">
                    <a
                      className="text-sm md:text-sm lg:text-lg "
                      href="https://dev.to/emurrell/a-nextjs-starter-configured-with-nav-and-animations-lac"
                    >
                      READ ARTICLE&emsp;
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </QuickFadeIn>
      </section>
    </>
  );
}
