import Link from "next/link";
import Head from "next/head";
import MetaData from "../components/MetaData";
import QuickFadeIn from "../animations/QuickFadeIn";

export default function Mtc() {
  return (
    <>
      <MetaData />
      <section
        id="mtc"
        className="w-full min-h-screen px-5 pt-4 pb-24 font-bold tracking-wide font-logo text-offwhite md:pt-8 md:px-12 lg:px-24 2xl:px-32 bg-matte"
      >
        <div className="inline-flex justify-between w-full pt-2 mt-2 text-xs border-t-2 border-offwhite md:text-base">
          <p>Mason's Touch</p>
          <p>Case Study</p>
        </div>
        <QuickFadeIn>
          <div className="flex flex-col">
            <div className="flex pt-12 lg:pt-24">
              <h3 className="pr-16 text-xl md:text-2xl lg:text-3xl md:pr-96">
                Mason's Touch is a masonry and foundation repair business in
                Ottawa, ON.
              </h3>
            </div>
            <div className="inline-flex justify-center py-4 md:justify-end ">
              <button className="inline-flex px-10 py-2 my-4 transition duration-300 ease-in-out transform border-2 rounded-3xl hover:border-salmon hover:scale-105 hover:bg-salmon border-offwhite hover:text-matte ">
                <a
                  className="text-base md:text-lg lg:text-xl "
                  href="https://masonstouch.com"
                >
                  VISIT WEBSITE&nbsp;
                </a>
              </button>
            </div>
            <div className="flex flex-col md:flex-row font-body">
              <div className="pr-10 text-xl lg:w-1/2 md:w-2/3 md:text-xl lg:text-2xl">
                <p className="pb-6 lg:pb-12">
                  Brief:
                  <br /> Redesign/develop a modern website to replace an
                  outdated and unresponsive site.
                </p>
                <p>
                  Tools:
                  <br />
                  Next.js (React), Tailwind CSS / UI, Framer-Motion, HeadlessUI,
                  Affinity Photo.
                </p>
              </div>
              <div className="flex justify-center rounded lg:justify-end lg:w-1/2 ">
                <a href="https://masonstouch.com">
                  <img
                    src="/mtcsquare.jpg"
                    alt="picture of website"
                    width="300"
                    height="auto"
                    className="px-6 py-20 transition duration-300 ease-in-out transform md:p-0 hover:scale-105"
                  />
                </a>
              </div>
            </div>
          </div>
        </QuickFadeIn>
      </section>
    </>
  );
}
