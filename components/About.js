import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import FadeRight from "../animations/FadeRight";
import DelayedFadeIn from "../animations/DelayedFadeIn";
import { AnimatePresence, animatePresence, motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="About"
      className="flex flex-col justify-center w-full h-screen p-10 font-bold tracking-wider font-logo text-offwhite pb-44 bg-matte snap-y snap-start snap-always md:px-32 lg:px-44 xl:px-72"
    >
      <div className="flex flex-col text-lg md:text-xl lg:text-2xl ">
        <FadeUp>
          <h1 className="pb-12 text-2xl md:text-3xl lg:text-5xl font-logo">
            Hello, I'm Eric.
          </h1>
        </FadeUp>
        <FadeIn>
          <p className="pb-12">
            I <span style={{ color: "#d8323c" }}>develop</span> fast, modern,
            and secure JAMstack websites.
          </p>
        </FadeIn>
        <DelayedFadeIn>
          <p>
            I <span style={{ color: "#d8323c" }}>create</span> engaging digital
            experiences through the use of animations and microinteractions.
          </p>
        </DelayedFadeIn>
        <br />
      </div>
    </section>
  );
}
