
import moment from 'moment-timezone';
import React, { useEffect } from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const tl = gsap.timeline({
  defaults: { ease: "power3.out" },
});

export default function Nav() {
  useEffect(() => {
    // tl.to(".intro", {
    //   y: "-100%",
    //   duration: 0.5,
    //   delay: 4,
    // });
    // gsap.to(".bar", {
    //   y: "-100%",
    //   duration: 0.5 ,
    //   delay: 1.5 ,
    //   stagger: 0.2,
    // });
    gsap.fromTo(".nav-line", {
      y: "-100%",
      duration: 0.5,
      
      stagger: 0.5,
    },
    {
      y: "0",
      duration: 0.5,
      stagger: 0.5,
    }
    );

    // tl.to(
    //   ".nav-bar",
    //   1,
    //   {
    //     z: 6.9,
    //     ease: "none",
    //   },
    //   "-=1"
    // );
  }, []);

  const london = moment().tz('Europe/London').format('h:mm A');
  const USA = moment().tz('America/Los_Angeles').format('h:mm A')
  return (
    <header
      style={{
        borderBottom: "1px solid rgb(212, 212, 212)",
       
      }}
      className="flex fixed top-0 justify-around w-full  z-40  p-2 text-lg  text-white bg-black nav-bar"
    >
      <div onMouseEnter={() => {
         gsap.fromTo(".nav-name", {
          y: "-200%",
          duration: 0.5,
          opacity: 0,
          repeat: 0,
        },
        {
          y: "0",
          opacity: 1,
          duration: 0.5,
          repeat: 0,
        }
        );
      }} className="logo uppercase nav-line nav-name">AYAD AL SHAIKHLI</div>
      <div className="hidden time md:flex flex-row text-lg nav-line">
        <div className="london pr-10">London {london}</div>
        <div className="us">United-State {USA}</div>
      </div>
      <div className="summary nav-line">Summary</div>
    </header>
  );
}
