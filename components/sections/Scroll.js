import React, { useEffect, useRef } from "react";
import Link from "next/link";

import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Photo from "../three/Photo";
import Image from "next/image";
import Project from "../three/Project";
import Hero from "../three/Hero";
import { TweenMax } from "gsap";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { window } from "next";

function Scroll() {
  const about = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const handelScrollClickAbout = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: ".about",
      options: { behavior: "smooth" },
    });
  };

  ScrollTrigger.create({
    trigger: ".exp",
    scrub: 5,
    start: "left left",
    end: "bottom bottom",
    onUpdate: (self) => {
      // cup.current.rotation.x = -2 * Math.PI * self.progress;
      // about.rotation.y = -1 * Math.PI * self.progress;

      about.x = -0.22 * self.progress;
      about.x = -1.5 * self.progress;

      // cup.current.rotation.z = -2 * Math.PI * self.progress;
      // cup.current.position.y = -17 * self.progress;
      // cup.current.position.y = -2 * self.progress;
    },
  });

  return (
    <Controller>
      <Scene triggerHook="onLeave" duration="400%" pin={true}>
        <Timeline wrapper={<div id="pinContainer" />}>
          <Hero />
          <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
            <section className="panel text-center pt-10 text-white">
              <span className="text-7xl ">
                Full-Stack Web Developer <br />
                Ayad Al Shaikhli
              </span>
            </section>
          </Tween>
          <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
            <section className="panel bg-black text-white border-l-2 border-white flex flex-col justify-between pt-10  uppercase">
              <ul className=" text-4xl w-full ">
                <li className="border-b-2 flex pl-2">About</li>
                <li className="border-b-2 flex pl-2">APPROACH</li>
                <li className="border-b-2 flex pl-2">SELECTED PROJECTS</li>
                <li className="border-b-2 flex pl-2">AWARDS & RECOGNITIONS</li>
                <li className="border-b-2 flex pl-2">CONTACT US</li>
                <li className="border-b-2 flex pl-2">COLOPHON</li>
              </ul>
              <span className="uppercase flex text-9xl items-end justify-center">
                Summary
              </span>
            </section>
          </Tween>
          <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
            <section
              id="about"
              className="about panel relative bg-black text-white  flex pt-10 "
            >
              <div
                ref={about}
                className="pin h-full w-12 absolute text-6xl border-x-2 px-9 border-white flex flex-col justify-between  uppercase "
              >
                <div className="mt-20 -rotate-90">3</div>
                <div className="mb-20 -rotate-90">About</div>
              </div>
              <div className="">
                <div className="flex flex-row parag text-xl text-left ml-4">
                  <div className="w-96 ml-14 text-left px-5 py-10 ">
                    Hi, My name is
                    <span className="text-orange-400 "> Ayad</span>. I am 26
                    years old Web Developer Welcome to my portfolio website.
                    Dive into some fun projects I have done over the years. I
                    design and develop websites for businesses using HTML, CSS,
                    JavaScript. I have also worked as a video and photo editor
                    using Adobe PhotoShop and Adobe Premiere. I am also
                    passionate about building animated websites using three.js
                    blender webgl.
                  </div>
                  <div className="image">
                    <Photo />
                  </div>
                </div>
              </div>
            </section>
          </Tween>
          <Tween from={{ x: "100%" }} to={{ x: "5%" }}>
            <section className="exp panel border-l-2 border-white  bg-black text-white pt-10 z-30 flex ">
              <div
                ref={about}
                className="pin h-full w-12 border-r-2 absolute text-6xl px-9 flex flex-col justify-between ml-2 uppercase "
              >
                <div className="mt-20 -rotate-90 mr-4">4</div>
                <div className="mb-20 -rotate-90 mr-4">Experiance</div>
              </div>
              <div className="space-y-10 pl-10 grid grid-rows-2">
                <div className=" mt-10 text-left flex flex-row justify-around pl-20">
                  <div>
                    <h1 className="text-xl ">SKILLS & TOOLS</h1>
                  </div>
                  <div className="flex flex-col justify-around font-extrabold">
                    <h1 className="text-3xl">My Toolbox & Things I Can Do</h1>
                    <h1 className="text-3xl">
                      The skills, tools and technologies I use to bring your
                      products to life:
                    </h1>
                  </div>
                </div>
                <div className="grid grid-cols-6">
                  <div className="helo">
                    <Image
                      alt="JavaScript"
                      src={"/java.png"}
                      width={150}
                      height={150}
                    />
                    <h1>JavaScript</h1>
                  </div>
                  <div className="helo">
                    <Image
                      alt="react"
                      src={"/react.png"}
                      width={150}
                      height={150}
                    />
                    <h1>React</h1>
                  </div>
                  <div className="helo">
                    <Image
                      alt="nextjs"
                      src={"/nextjs.png"}
                      width={150}
                      height={150}
                    />
                    <h1>NextJS</h1>
                  </div>
                  <div className="helo">
                    <Image
                      alt="jquery"
                      src={"/jquery.png"}
                      width={150}
                      height={150}
                    />
                    <h1>jQuery</h1>
                  </div>
                  <div className="helo">
                    <Image
                      alt="Gsap"
                      src={"/Gsap.png"}
                      width={150}
                      height={150}
                    />
                    <h1>Gsap</h1>
                  </div>
                  <div className="helo">
                    <Image
                      alt="three"
                      src={"/three.png"}
                      width={150}
                      height={150}
                    />
                    <h1>ThreeJS</h1>
                  </div>
                  <div className="helo">
                    <Image
                      alt="html"
                      src={"/html.png"}
                      width={150}
                      height={150}
                    />
                    <h1>HTML</h1>
                  </div>
                  <div className="helo">
                    <Image
                      alt="css"
                      src={"/css.png"}
                      width={150}
                      height={150}
                    />
                    <h1>CSS</h1>
                  </div>
                  <div className="helo">
                    <Image
                      alt="blender"
                      src={"/blender.png"}
                      width={150}
                      height={150}
                    />
                    <h1>Blender</h1>
                  </div>

                  <div className="helo">
                    <Image
                      alt="mongodb"
                      src={"/mongodb.png"}
                      width={150}
                      height={150}
                    />
                    <h1>mongoDB</h1>
                  </div>

                  <div className="helo">
                    <Image
                      alt="nodejs"
                      src={"/nodejs.png"}
                      width={150}
                      height={150}
                    />
                    <h1>NodeJS</h1>
                  </div>
                  <div className="helo">
                    <Image
                      alt="expressjs"
                      src={"/expressjs.png"}
                      width={150}
                      height={150}
                    />
                    <h1>ExpressJS</h1>
                  </div>
                </div>
              </div>
            </section>
          </Tween>
          <Tween from={{ x: "100%" }} to={{ x: "10.7%" }}>
            <section className="panel bg-black pt-10 z-40 text-white border-l-2">
              <h1 className="a absolute top-3/4 left-1/4 z-50 text-9xl overflow-hidden">
                Teatro
              </h1>
              <div>
                <Project />
              </div>
            </section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  );
}

export default Scroll;