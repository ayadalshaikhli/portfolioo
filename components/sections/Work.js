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
import tataroski from "../../public/tataroski.JPG";

function Work() {
  return (
    <div className=" overflow-x-hidden">
      <Controller>
        <Scene className="" triggerHook="onLeave" duration="400%" pin={true}>
          <Timeline wrapper={<div id="pinContainer" />}>
            <Tween from={{ y: "75%" }} to={{ y: "5%" }}>
              <section className="panel3 text-center  text-white bg-black">
                <div className="bord h-full w-12 absolute text-6xl z-50 px-10  flex flex-col justify-between  uppercase text-white  bg-black">
                  <div className="mt-20 -rotate-90">6</div>
                  <div className="mb-20 -rotate-90 flex gap-4">
                    <span>SELECTED</span> <span>PROJECTS</span>
                  </div>
                </div>
                <div className="text-xl flex flex-col ">
                  <div className="flex justify-around w-full border-b-2 p-2">
                    <div>Tataroski</div>
                    <div> 2020 Branding, E-commerce,Development</div>
                    <div>
                      <button>View Project</button>
                    </div>
                  </div>
                  <div className="">
                    <Image
                      src={tataroski}
                      alt={"hi"}
                      layout="fixed"
                      objectFit="fill"
                      quality={100}
                    />
                  </div>
                </div>
              </section>
            </Tween>
            <Tween from={{ y: "80%" }} to={{ y: "10%" }}>
              <section className=" panel text-center  text-white bg-black">
                <div className="bord h-full w-12 absolute text-6xl z-50 px-10  flex flex-col justify-between  uppercase text-white  bg-black">
                  <div className="mt-20 -rotate-90">6</div>
                  <div className="mb-20 -rotate-90 flex gap-4">
                    <span>SELECTED</span> <span>PROJECTS</span>
                  </div>
                </div>
                <div className="text-xl flex flex-col ">
                  <div className="flex justify-around w-full border-b-2 p-2">
                    <div>Tataroski</div>
                    <div> 2020 Branding, E-commerce,Development</div>
                    <div>
                      <button>View Project</button>
                    </div>
                  </div>
                  <div className="">
                    <Image
                      src={tataroski}
                      alt={"hi"}
                      layout="fixed"
                      objectFit="fill"
                      quality={100}
                    />
                  </div>
                </div>
              </section>
            </Tween>
            <Tween from={{ y: "85%" }} to={{ y: "15%" }}>
              <section className=" panel text-center  text-white bg-black">
                <div className="bord h-full w-12 absolute text-6xl z-50 px-10  flex flex-col justify-between  uppercase text-white  bg-black">
                  <div className="mt-20 -rotate-90">6</div>
                  <div className="mb-20 -rotate-90 flex gap-4">
                    <span>SELECTED</span> <span>PROJECTS</span>
                  </div>
                </div>
                <div className="text-xl flex flex-col ">
                  <div className="flex justify-around w-full border-b-2 p-2">
                    <div>Tataroski</div>
                    <div> 2020 Branding, E-commerce,Development</div>
                    <div>
                      <button>View Project</button>
                    </div>
                  </div>
                  <div className="">
                    <Image
                      src={tataroski}
                      alt={"hi"}
                      layout="fixed"
                      objectFit="fill"
                      quality={100}
                    />
                  </div>
                </div>
              </section>
            </Tween>
            <Tween from={{ y: "90%" }} to={{ y: "0%" }}>
              <section className=" panel text-center  text-white bg-black">
                <div className="bord h-full w-12 absolute text-6xl z-50 px-10  flex flex-col justify-between  uppercase text-white  bg-black">
                  <div className="mt-20 -rotate-90">6</div>
                  <div className="mb-20 -rotate-90 flex gap-4">
                    <span>SELECTED</span> <span>PROJECTS</span>
                  </div>
                </div>
                <div className="text-xl flex flex-col ">
                  <div className="flex justify-around w-full border-b-2 p-2">
                    <div>Tataroski</div>
                    <div> 2020 Branding, E-commerce,Development</div>
                    <div>
                      <button>View Project</button>
                    </div>
                  </div>
                  <div className="">
                    <Image
                      src={tataroski}
                      alt={"hi"}
                      layout="fixed"
                      objectFit="fill"
                      quality={100}
                    />
                  </div>
                </div>
              </section>
            </Tween>
            <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
              <section className=" panel text-center  text-white bg-black">
                <div className="text-xl flex flex-col ">
                  <div className="flex justify-around w-full border-b-2 p-2">
                    <div>Tataroski</div>
                    <div> 2020 Branding, E-commerce,Development</div>
                    <div>
                      <button>View Project</button>
                    </div>
                  </div>
                  <div className="">
                    <Image
                      src={tataroski}
                      alt={"hi"}
                      layout="fixed"
                      objectFit="fill"
                      quality={100}
                    />
                  </div>
                </div>
              </section>
            </Tween>
          </Timeline>
        </Scene>
      </Controller>
    </div>
  );
}

export default Work;
