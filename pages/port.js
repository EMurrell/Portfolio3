import Link from "next/link";
import Head from "next/head";
import MetaData from "../components/MetaData";
import QuickFadeIn from "../animations/QuickFadeIn";

export default function Port() {
  return (
    <>
      <MetaData />
      <section
        id="port"
        className="w-full min-h-screen px-5 pt-4 pb-24 font-bold tracking-wide bg-gradient-to-b from-black to-black via-matteblue font-logo text-offwhite md:pt-8 md:px-12 lg:px-24 2xl:px-32"
      >
        <div className="inline-flex justify-between w-full pt-2 mt-2 text-xs border-t-2 border-offwhite md:text-base">
          <p>Professional Portfolio</p>
          <p>Case Study</p>
        </div>
        <QuickFadeIn>
          <div className="flex flex-col">
            <div className="flex pt-12 lg:pt-24">
              <h3 className="pr-16 text-xl md:text-2xl lg:text-3xl md:pr-96">
                A portfolio website to showcase my skills and work projects.
              </h3>
            </div>
            <div className="inline-flex justify-center py-4 md:justify-end ">
              <button className="inline-flex px-10 py-2 my-4 transition duration-300 ease-in-out transform border-2 rounded-3xl hover:border-teal-400 hover:scale-105 hover:bg-teal-400 border-offwhite hover:text-matte">
                <a
                  className="text-base md:text-lg lg:text-xl "
                  href="https://emurrell.com"
                >
                  VISIT WEBSITE&nbsp;
                </a>
              </button>
            </div>
            <div className="flex flex-col font-light md:flex-row font-body">
              <div className="pr-10 text-xl md:text-xl lg:text-2xl">
                <p className="pb-6 lg:pb-12">
                  Brief:
                  <br /> I saught to create a portfolio site that would
                  challenge my skill-levels for both design and development. My
                  approach was to incorporate elements of minimalism with bold
                  typography, and orchestrated animations.
                </p>
                <p>
                  Tools:
                  <br />
                  Next.js (React), Tailwind CSS, Framer-Motion, Affinity Photo.
                </p>
              </div>
            </div>
          </div>
        </QuickFadeIn>
      </section>
    </>
  );
}
