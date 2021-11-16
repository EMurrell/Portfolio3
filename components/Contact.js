import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import DelayedFadeIn from "../animations/DelayedFadeIn";
import { ArrowRightIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <section
      id="Contact"
      className="flex flex-col justify-center w-full h-screen px-8 py-6 font-bold tracking-wider text-offwhite font-logo bg-gradient-to-br from-matteblue to-black via-black snap-y snap-start snap-always md:px-36 lg:px-64 xl:px-96 "
    >
      <FadeUp>
        <div className="pb-6 text-2xl text-center md:text-3xl lg:text-5xl filter drop-shadow-3xl">
          Get In Touch
        </div>
      </FadeUp>
      <FadeIn>
        <div className="flex flex-col justify-center pb-4">
          <a href="mailto:emurrell.dev@gmail.com">
            <div className="card">
              <span className="text-sm md:text-xl lg:text-2xl">Email</span>
              <div className="flex flex-row justify-between pt-2">
                <p className="text-xs leading-loose tracking-widest ">
                  emurrell.dev@gmail.com
                </p>
                <ArrowRightIcon className="w-6 h-6 -rotate-45" />
              </div>
            </div>
          </a>
          <a href="https://github.com/EMurrell">
            <div className="card">
              <span className="text-sm md:text-xl lg:text-2xl">Github</span>
              <div className="flex flex-row justify-between pt-2">
                <p className="text-xs leading-loose tracking-widest ">
                  github.com/EMurrell
                </p>
                <ArrowRightIcon className="w-6 h-6 -rotate-45" />
              </div>
            </div>
          </a>
          <a href="https://twitter.com/MurrellWeb">
            <div className="card">
              <span className="text-sm md:text-xl lg:text-2xl">Twitter</span>
              <div className="flex flex-row justify-between pt-2">
                <p className="text-xs leading-loose tracking-widest ">
                  twitter.com/MurrellWeb
                </p>
                <ArrowRightIcon className="w-6 h-6 -rotate-45" />
              </div>
            </div>
          </a>
          <Link href="https://dev.to/emurrell">
            <div className="card">
              <span className="text-sm md:text-xl lg:text-2xl">Dev.to</span>
              <div className="flex flex-row justify-between pt-2">
                <p className="text-xs leading-loose tracking-widest ">
                  dev.to/emurrell
                </p>
                <ArrowRightIcon className="w-6 h-6 -rotate-45" />
              </div>
            </div>
          </Link>
        </div>
      </FadeIn>
      <footer className="flex justify-center pt-6 h-1/12 font-logo">
        <DelayedFadeIn>
          <p className="text-center transition duration-200 ease-in-out transform md:text-xl hover:scale-105 filter drop-shadow-3xl">
            © {getCurrentYear()} EMurrell.com
          </p>
        </DelayedFadeIn>
      </footer>
    </section>
  );
}
