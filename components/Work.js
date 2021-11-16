import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import {
  ExternalLinkIcon,
  ArrowNarrowRightIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

export default function Work() {
  return (
    <section
      id="Work"
      className="flex flex-col justify-center w-full h-screen p-8 pb-20 font-bold tracking-wider font-logo bg-gradient-to-bl from-matteblue to-black via-black snap-y snap-start snap-always md:px-36 lg:px-64 xl:px-96 text-matte"
    >
      <FadeUp>
        <div className="pb-6 text-2xl text-center text-offwhite md:text-3xl lg:text-5xl ">
          Work / Projects
        </div>
      </FadeUp>
      <FadeIn>
        <div className="flex flex-col justify-center">
          <Link href="/ptp">
            <div className="card">
              <span className="text-sm md:text-xl lg:text-2xl">Pup To Pal</span>
              <div className="flex flex-row justify-between pt-2">
                <p className="text-xs leading-loose tracking-widest ">
                  website/content creation
                </p>
                <ArrowRightIcon className="w-6 h-6 -rotate-45" />
              </div>
            </div>
          </Link>
          <Link href="/mtc">
            <div className="card">
              <span className="text-sm md:text-xl lg:text-2xl">
                Mason's Touch
              </span>
              <div className="flex flex-row justify-between pt-2">
                <p className="text-xs leading-loose tracking-widest">
                  website redesign/rebuild
                </p>
                <ArrowRightIcon className="w-6 h-6 -rotate-45" />
              </div>
            </div>
          </Link>

          <Link href="/port">
            <div className="card">
              <span className="text-sm md:text-xl lg:text-2xl">Portfolio</span>
              <div className="flex flex-row justify-between pt-2">
                <p className="text-xs leading-loose tracking-widest">
                  website/content creation
                </p>
                <ArrowRightIcon className="w-6 h-6 -rotate-45" />
              </div>
            </div>
          </Link>
          <Link href="/starters">
            <div className="card">
              <span className="text-sm md:text-xl lg:text-2xl">
                UI Components
              </span>
              <div className="flex flex-row justify-between pt-2">
                <p className="text-xs leading-loose tracking-widest ">
                  ongoing projects
                </p>
                <ArrowRightIcon className="w-6 h-6 -rotate-45" />
              </div>
            </div>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
