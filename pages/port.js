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
              <button className="p-2 mt-4 mb-4 text-sm font-bold tracking-wider text-black transition duration-200 ease-in-out transform rounded-sm cursor-pointer w-60 md:w-72 hover:scale-110 lg:mt-6 bg-gradient-to-bl from-teal-600 to-teal-200 via-teal-400 lg:text-lg">
                <a
                  className="text-base md:text-lg lg:text-xl "
                  href="https://emurrell.com"
                >
                  VISIT WEBSITE&nbsp;
                </a>
              </button>
            </div>
            <div className="flex flex-col font-normal md:flex-row font-body">
              <div className="pr-10 text-xl md:text-xl lg:text-2xl">
                <p className="pb-6 lg:pb-12">
                  Brief:
                  <br /> I saught to create a portfolio site that would
                  challenge my skill levels for both design and development. My
                  approach was to incorporate elements of minimalism and
                  futurism, with bold typography, and orchestrated animations.
                </p>
                <p>
                  Tools:
                  <br />
                  Next.js (React), Tailwind CSS, Framer-Motion, Affinity Photo.
                </p>
              </div>
            </div>
            <Link href="/#Work">
              <p className="mt-12 text-center cursor-pointer md:w-40 md:text-left 2xl:text-xl hover:text-teal-300">
                &larr;Go Back
              </p>
            </Link>
          </div>
        </QuickFadeIn>
      </section>
    </>
  );
}
