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
gsap.registerPlugin(ScrollTrigger);

function Gsap() {
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;

    gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + panelsContainer.current.offsetWidth,
      },
    });
  }, []);

  return (
    <>
      <div
        style={{
          width: "600%",
          height: "100vh",
          display: "flex",
          flexWrap: "nowrap",
        }}
        className="container"
        ref={panelsContainer}
      >
        <div
          className="description panel blue"
          ref={(e) => createPanelsRefs(e, 0)}
        >
          <div>
            <h1>Horizontal snapping sections (simple)</h1>
            <p>
              Scroll vertically to scrub the horizontal animation. It also
              dynamically snaps to the sections in an organic way based on the
              velocity. The snapping occurs based on the natural ending position
              after momentum is applied, not a simplistic "wherever it is when
              the user stops".
            </p>
            <div className="scroll-down">
              Scroll down<div className="arrow"></div>
            </div>
          </div>
        </div>
        <section className="panel red" ref={(e) => createPanelsRefs(e, 1)}>
          ONE
        </section>
        <section className="panel orange" ref={(e) => createPanelsRefs(e, 2)}>
          TWO
        </section>
        <section className="panel purple" ref={(e) => createPanelsRefs(e, 3)}>
          THREE
        </section>
        <section className="panel green" ref={(e) => createPanelsRefs(e, 4)}>
          FOUR
        </section>
        <section className="panel gray" ref={(e) => createPanelsRefs(e, 5)}>
          FIVE
        </section>
      </div>

      <header>

      </header>
    </>
  );
}

export default Gsap;