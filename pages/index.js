import Head from "next/head";
import MetaData from "../components/MetaData";
import Nav from "../components/Nav";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact2 from "../components/Contact2";

export default function Home() {
  return (
    <>
      <MetaData />
      <body className="w-full h-screen overflow-auto snap-y snap-mandatory snap-start">
        <Header />
        <About />

        <Work />
        <Skills />
        <Contact2 />
      </body>
    </>
  );
}
