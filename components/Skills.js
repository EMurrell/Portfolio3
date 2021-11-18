import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import FadeRight from "../animations/FadeRight";
import { AnimatePresence, animatePresence, motion } from "framer-motion";
import {
  ReactJs,
  Github,
  Html5,
  Framer,
  Hyper,
  Stackoverflow,
  Affinityphoto,
  Visualstudiocode,
  CssThree,
  Vercel,
  Netlify,
  Npm,
  Nodedotjs,
  Nextdotjs,
  Tailwindcss,
  Javascript,
} from "@icons-pack/react-simple-icons";

export default function Skills() {
  return (
    <section
      id="Skills"
      className="flex flex-col justify-center w-full h-screen pb-24 font-bold tracking-wider md:pb-6 bg-gradient-to-bl from-black to-matteblue via-black snap-y snap-start snap-always md:px-28 lg:px-36 xl:px-72"
    >
      <div className="flex flex-col text-offwhite font-logo ">
        <FadeUp>
          <h1 className="pb-6 text-2xl text-center md:text-3xl lg:text-5xl filter drop-shadow-3xl ">
            Tech Stack
          </h1>
          <p className="px-16 pb-6 text-center md:px-32 md:text-lg lg:text-xl ">
            Some of the tools and technologies I use every day
          </p>
        </FadeUp>

        <FadeIn>
          <div className="flex flex-col">
            <div className="flex flex-row justify-center">
              <Html5 className="icon" />
              <CssThree className="icon" />
              <Javascript className="icon" />
              <ReactJs className="icon" />
            </div>
            <div className="flex flex-row justify-center">
              <Nodedotjs className="icon" />
              <Npm className="icon" />
              <Nextdotjs className="icon" />
              <Tailwindcss className="icon" />
            </div>
            <div className="flex flex-row justify-center">
              <Netlify className="icon" />
              <Vercel className="icon" />
              <Framer className="icon" />
              <Affinityphoto className="icon" />
            </div>
            <div className="flex flex-row justify-center">
              <Github className="icon" />
              <Stackoverflow className="icon" />
              <Visualstudiocode className="icon" />
              <Hyper className="icon" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
