import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import FadeRight from "../animations/FadeRight";
import { AnimatePresence, animatePresence, motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiNpm,
  SiVisualstudiocode,
  SiAffinityphoto,
  SiNetlify,
  SiVercel,
  SiGithub,
  SiNextdotjs,
  SiHyper,
  SiFramer,
  SiStackoverflow,
} from "react-icons/si";
import { IconContext } from "react-icons";

export default function Skills() {
  return (
    <section
      id="Skills"
      className="flex flex-col justify-center w-full h-screen pb-24 font-bold tracking-wider md:pb-6 bg-matte snap-y snap-start snap-always md:px-28 lg:px-36 xl:px-72"
    >
      <div className="flex flex-col text-offwhite font-logo ">
        <FadeUp>
          <h1 className="pb-6 text-2xl text-center md:text-3xl lg:text-5xl">
            Tech Stack
          </h1>
          <p className="px-16 pb-6 text-center md:px-32 md:text-lg lg:text-xl">
            Some of the tools and technologies I use every day
          </p>
        </FadeUp>
        <IconContext.Provider
          value={{
            className:
              "w-12 h-12 m-4 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:text-salmon",
          }}
        >
          <FadeIn>
            <div className="flex flex-col ">
              <div className="flex flex-row justify-center">
                <FaHtml5 title="HTML5" />
                <FaCss3Alt title="CSS3" />
                <SiJavascript title="Javascript" />
                <FaReact title="React" />
              </div>
              <div className="flex flex-row justify-center">
                <FaNodeJs title="Node.js" />
                <SiNpm title="NPM" />
                <SiNextdotjs title="Next.js" />
                <SiTailwindcss title="TailwindCSS" />
              </div>
              <div className="flex flex-row justify-center">
                <SiNetlify title="Netlify" />
                <SiVercel title="Vercel" />
                <SiFramer title="Framer Motion" />
                <SiAffinityphoto title="Affinity Photo" />
              </div>
              <div className="flex flex-row justify-center">
                <SiGithub title="Github" />
                <SiStackoverflow title="Stack Overflow" />
                <SiVisualstudiocode title="VS Code" />
                <SiHyper title="Hyper Terminal" />
              </div>
            </div>
          </FadeIn>
        </IconContext.Provider>
      </div>
    </section>
  );
}
