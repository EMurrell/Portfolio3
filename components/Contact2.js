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
    <section
      id="Contact"
      className="flex flex-col justify-center w-full h-screen p-5 pb-8 font-bold tracking-wider font-logo bg-matte snap-y snap-start snap-always md:px-36 lg:px-36 xl:px-96 text-matte"
    >
      <FadeUp>
        <div className="pb-6 text-2xl text-center text-salmon md:text-3xl lg:text-5xl">
          Get In Touch
        </div>
      </FadeUp>
      <FadeIn>
        <div className="flex flex-col justify-center pb-4">
          <a href="mailto:emurrell.dev@gmail.com">
            <div className="flex flex-col p-4 my-2 transition duration-200 ease-in-out transform rounded-sm shadow-2xl cursor-pointer hover:scale-105 bg-salmon">
              <span className="text-sm md:text-xl lg:text-2xl">Email</span>
              <div className="flex flex-row justify-between pt-2">
                <p className="text-xs tracking-widest ">
                  emurrell.dev@gmail.com
                </p>
                <BsArrowUpRight />
              </div>
            </div>
          </a>
          <a href="https://github.com/EMurrell">
            <div className="flex flex-col p-4 my-2 transition duration-200 ease-in-out transform rounded-sm shadow-2xl cursor-pointer hover:scale-105 bg-salmon">
              <span className="text-sm md:text-xl lg:text-2xl">Github</span>
              <div className="flex flex-row justify-between pt-2">
                <p className="text-xs tracking-widest ">github.com/EMurrell</p>
                <BsArrowUpRight />
              </div>
            </div>
          </a>
          <a href="https://twitter.com/MurrellWeb">
            <div className="flex flex-col p-4 my-2 transition duration-200 ease-in-out transform rounded-sm shadow-2xl cursor-pointer hover:scale-105 bg-salmon">
              <span className="text-sm md:text-xl lg:text-2xl">Twitter</span>
              <div className="flex flex-row justify-between pt-2">
                <p className="text-xs tracking-widest ">
                  twitter.com/MurrellWeb
                </p>
                <BsArrowUpRight />
              </div>
            </div>
          </a>
          <Link href="https://dev.to/emurrell">
            <div className="flex flex-col p-4 my-2 transition duration-200 ease-in-out transform rounded-sm shadow-2xl cursor-pointer hover:scale-105 bg-salmon">
              <span className="text-sm md:text-xl lg:text-2xl">Dev.to</span>
              <div className="flex flex-row justify-between pt-2">
                <p className="text-xs tracking-widest ">dev.to/emurrell</p>
                <BsArrowUpRight />
              </div>
            </div>
          </Link>
        </div>
      </FadeIn>
      <footer className="flex justify-center pt-12 bg-matte h-1/12 font-logo">
        <DelayedFadeIn>
          <p className="text-center transition duration-200 ease-in-out transform md:text-xl text-salmon hover:scale-105">
            © {getCurrentYear()} EMurrell.com
          </p>
        </DelayedFadeIn>
      </footer>
    </section>
  );
}
