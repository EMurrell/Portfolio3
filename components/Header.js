import { motion } from "framer-motion";
import Nav from "./Nav";
import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";

const line1 = "Eric Murrell";

const headline = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Header() {
  return (
    <section
      id="Home"
      className="flex flex-col w-full h-screen px-2 bg-matte text-offwhite snap-y snap-start snap-mandatory md:px-10 lg:px-20 xl:px-28 "
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 1,
            opacity: 0,
            y: -50,
          },
          visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
              delay: 2,
              duration: 0.5,
            },
          },
        }}
      >
        <Nav />
      </motion.div>
      <main className="flex flex-col justify-center flex-1 h-screen pb-40 pl-5 font-extrabold tracking-wide font-logo md:pl-12 lg:pl-16">
        <motion.h1 variants={headline} initial="hidden" animate="visible">
          {line1.split("").map((char, index) => {
            return (
              <motion.span
                key={char + "-" + index}
                variants={letter}
                className="text-4xl tracking-wider md:text-6xl lg:text-7xl 2xl:text-8xl"
              >
                {char}
              </motion.span>
            );
          })}
        </motion.h1>
        <motion.div
          className="flex pt-2 text-lg md:text-3xl lg:text-4xl 2xl:text-5xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 1,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,

              transition: {
                delay: 1.5,
                duration: 0.5,
              },
            },
          }}
        >
          <p>Full Stack Web Developer</p>
        </motion.div>
      </main>
    </section>
  );
}
