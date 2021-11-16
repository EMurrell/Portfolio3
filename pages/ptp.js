import Link from "next/link";
import Head from "next/head";
import MetaData from "../components/MetaData";
import QuickFadeIn from "../animations/QuickFadeIn";

export default function Ptp() {
  return (
    <>
      <MetaData />
      <section
        id="ptp"
        className="w-full min-h-screen px-5 pt-4 pb-24 font-bold tracking-wide font-logo text-offwhite md:pt-8 md:px-12 lg:px-24 2xl:px-32 bg-matte"
      >
        <div className="inline-flex justify-between w-full pt-2 mt-2 text-xs border-t-2 border-offwhite md:text-base">
          <p>Pup To Pal</p>
          <p>Case Study</p>
        </div>
        <QuickFadeIn>
          <div className="flex flex-col">
            <div className="flex pt-12 lg:pt-24">
              <h3 className="pr-16 text-xl md:text-2xl lg:text-3xl md:pr-96">
                Pup To Pal is a dog training business in Ottawa, ON.
              </h3>
            </div>
            <div className="inline-flex justify-center py-4 md:justify-end ">
              <button className="inline-flex px-10 py-2 my-4 transition duration-300 ease-in-out transform border-2 rounded-3xl hover:border-teal-300 hover:scale-105 hover:bg-teal-300 border-offwhite hover:text-matte">
                <a
                  className="text-base md:text-lg lg:text-xl "
                  href="https://www.puptopal.com"
                >
                  VISIT WEBSITE&nbsp;
                </a>
              </button>
            </div>
            <div className="flex flex-col md:flex-row font-body">
              <div className="pr-10 text-xl lg:w-1/2 md:w-2/3 md:text-xl lg:text-2xl">
                <p className="pb-6 lg:pb-12">
                  Brief:
                  <br />
                  Design and develop a modern and concise website. Write copy
                  and create image assets.
                </p>
                <p>
                  Tools:
                  <br />
                  Next.js (React), Tailwind CSS, Framer-Motion, HeadlessUI,
                  Affinity Photo.
                </p>
              </div>
              <div className="flex justify-center rounded lg:justify-end lg:w-1/2 ">
                <a href="https://www.puptopal.com">
                  <img
                    src="/ptpsquare.jpg"
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
