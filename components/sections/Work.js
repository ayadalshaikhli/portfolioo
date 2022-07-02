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
        <Scene triggerHook="onLeave" duration="400%" pin={true}>
          <Timeline wrapper={<div id="pinContainer" />}>
            {/* <Hero /> */}
            <Tween from={{ y: "75%" }} to={{ y: "5%" }}>
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
            <Tween from={{ y: "80%" }} to={{ y: "10%" }}>
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
            <Tween from={{ y: "85%" }} to={{ y: "15%" }}>
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
            <Tween from={{ y: "90%" }} to={{ y: "0%" }}>
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
