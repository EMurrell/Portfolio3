import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

export default function Work() {
  return (
    <section
      id="Work"
      className="flex flex-col justify-center w-full h-screen p-5 pb-20 font-bold tracking-wider font-logo bg-matte snap-y snap-start snap-always md:px-36 lg:px-36 xl:px-96 text-matte"
    >
      <FadeUp>
        <div className="pb-6 text-2xl text-center text-salmon md:text-3xl lg:text-5xl">
          Work / Projects
        </div>
      </FadeUp>
      <FadeIn>
        <div className="flex flex-col justify-center">
          <Link href="/mtc">
            <div className="flex flex-col p-4 my-2 transition duration-200 ease-in-out transform rounded-sm shadow-2xl cursor-pointer hover:scale-105 bg-salmon">
              <span className="text-sm md:text-xl lg:text-2xl">
                Mason's Touch Construction
              </span>
              <div className="flex flex-row justify-between pt-2">
                <p className="text-xs tracking-widest ">
                  website redesign/rebuild
                </p>
                <BsArrowUpRight />
              </div>
            </div>
          </Link>
          <Link href="/ptp">
            <div className="flex flex-col p-4 my-2 transition duration-200 ease-in-out transform rounded-sm shadow-2xl cursor-pointer hover:scale-105 bg-salmon">
              <span className="text-sm md:text-xl lg:text-2xl">Pup To Pal</span>
              <div className="flex flex-row justify-between pt-2">
                <p className="text-xs tracking-widest ">
                  website and content creation
                </p>
                <BsArrowUpRight />
              </div>
            </div>
          </Link>
          <Link href="/port">
            <div className="flex flex-col p-4 my-2 transition duration-200 ease-in-out transform rounded-sm shadow-2xl cursor-pointer hover:scale-105 bg-salmon">
              <span className="text-sm md:text-xl lg:text-2xl">Portfolio</span>
              <div className="flex flex-row justify-between pt-2">
                <p className="text-xs tracking-widest ">
                  website and content creation
                </p>
                <BsArrowUpRight />
              </div>
            </div>
          </Link>
          <Link href="/starters">
            <div className="flex flex-col p-4 my-2 transition duration-200 ease-in-out transform rounded-sm shadow-2xl cursor-pointer hover:scale-105 bg-salmon">
              <span className="text-sm md:text-xl lg:text-2xl">
                UI Components/Starters
              </span>
              <div className="flex flex-row justify-between pt-2">
                <p className="text-xs tracking-widest ">
                  ongoing open-source projects
                </p>
                <BsArrowUpRight />
              </div>
            </div>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
