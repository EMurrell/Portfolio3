import Head from "next/head";
import Link from "next/link";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import {
  Github,
  Devdotto,
  Twitter,
  ReactJs,
} from "@icons-pack/react-simple-icons";
import { MailIcon } from "@heroicons/react/outline";
import { Sling as Hamburger } from "hamburger-react";

const links = [
  { name: "About", to: "#About", id: 1 },
  { name: "Work", to: "#Work", id: 2 },
  { name: "Skills", to: "#Skills", id: 3 },
  { name: "Contact", to: "#Contact", id: 4 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.25,
      staggerDirection: 1,
    },
  },
};

export default function Nav() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <nav className="flex justify-between w-full text-offwhite font-display">
      <div className="inline-flex px-4 py-6 text-2xl font-extrabold bg-transparent font-logo lg:text-3xl 2xl:text-3xl md:pl-12 lg:pl-16 ">
        EM
      </div>

      {/* The Side Bar Menu for screens smaller than 'Large' */}
      <AnimatePresence>
        {open && (
          <motion.aside
            className="fixed right-0 h-screen bg-matteblue lg:hidden font-logo"
            initial={{ width: 0 }}
            animate={{
              width: "95%",
            }}
            exit={{
              width: 0,
              transition: { delay: 0.3, duration: 0.15 },
            }}
          >
            <motion.div
              className="flex flex-col p-8 ml-4 text-2xl md:ml-24 md:text-4xl"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <div className="pt-10 ">Eric Murrell</div>
              <div className="flex flex-row pb-32 md:pb-40">
                <a href="https://github.com/EMurrell">
                  <Github className="my-6 mr-6 transition duration-100 ease-in-out transform w-7 h-7 text-offwhite hover:scale-110 hover:text-teal-300" />
                </a>
                <a href="mailto:emurrell.dev@gmail.com">
                  <MailIcon className="w-8 h-8 my-6 mr-6 transition duration-100 ease-in-out transform text-offwhite hover:scale-110 hover:text-teal-300" />
                </a>

                <a href="https://twitter.com/MurrellWeb">
                  <Twitter className="my-6 mr-6 transition duration-100 ease-in-out transform w-7 h-7 text-offwhite hover:scale-110 hover:text-teal-300" />
                </a>

                <a href="https://dev.to/emurrell">
                  <Devdotto className="w-8 h-8 my-6 transition duration-100 ease-in-out transform text-offwhite hover:scale-110 hover:text-teal-300" />
                </a>
              </div>
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  className="flex my-4 text-teal-200 transition duration-100 ease-in-out transform hover:text-offwhite hover:scale-105"
                  variants={itemVariants}
                  aria-current={links.current ? "page" : undefined}
                  onClick={cycleOpen}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* The Hamburger Menu and Close Icons */}
      <div className="flex justify-end lg:hidden ">
        <button className="px-2 m-2 cursor-pointer">
          <span className="sr-only">Open main menu</span>
          <Hamburger toggled={open} toggle={cycleOpen} />
        </button>
      </div>

      {/* The Navbar on large screens */}
      <div className="hidden pr-8 lg:inline-flex ">
        {links.map(({ name, to, id }) => (
          <a
            key={id}
            href={to}
            className="px-8 py-6 text-lg transition duration-100 ease-in-out transform 2xl:text-xl font-logo text-offwhite hover:text-teal-300 hover:scale-105"
          >
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
}
