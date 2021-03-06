import Head from "next/head";
import Image from "next/image";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Photo from "../components/three/Photo";
import { useEffect, useRef } from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import Project from "../components/three/Project";
import Hero from "../components/three/Hero";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SectionWipes2 from "../components/sections/SectionWipes2";
import Scroll from "../components/sections/Scroll";
import Work from "../components/sections/Work";
import Intro from "../components/sections/Intro";
import FirstPage from "../components/sections/FirstPage";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const boxRef = useRef();
  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "-=90" });
    ScrollTrigger.batch(".bon", {
      onEnter: (elements) => {
        gsap.from(elements, {
          autoAlpha: 0,
          y: 60,
          stagger: 0.15,
        });
      },
      once: false,
    });
    // ScrollTrigger.create({
    //   trigger: ".don",
    //   start: "top 50%",
    //   end: "bottom 0%",

    //   onEnter: () => {
    //     gsap.to(".bon-1", {
    //       stagger: 0.5,
    //       duration: 1.0,
    //       height: "50%",
    //       backgroundColor: "green",
    //     });
    //   },

    //   onLeaveBack: () => {
    //     gsap.to(".bon-1", {
    //       duration: 1.0,
    //       height: "100%",
    //       backgroundColor: "red",
    //     });
    //   },
    // });
    // ScrollTrigger.create({
    //   trigger: ".bon-1",
    //   start: "top 50%",
    //   end: "bottom 0%",

    //   onEnter: () => {
    //     gsap.to(".bon-2", {
    //       stagger: 0.5,
    //       duration: 1.0,
    //       height: "50%",
    //       backgroundColor: "yellow",
    //     });
    //   },

    //   onLeaveBack: () => {
    //     gsap.to(".bon-2", {
    //       duration: 1.0,
    //       height: "100%",
    //       backgroundColor: "pink",
    //     });
    //   },
    // });
  });

  return (
    <div>
      <Head>
        <title>Ayad Al-Shaikhli</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Scroll />
      {/* <Work /> */}
    </div>
  );
}
