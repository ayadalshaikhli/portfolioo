import React, { useEffect } from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const tl = gsap.timeline({
  defaults: { ease: "power3.out" },
});
function Intro() {
  useEffect(() => {
    tl.to(".intro", {
      y: "-100%",
      duration: 0.5,
      delay: 4,
    });
    // gsap.to(".bar", {
    //   y: "-100%",
    //   duration: 0.5 ,
    //   delay: 1.5 ,
    //   stagger: 0.2,
    // });
    gsap.to(".intro-text", {
      display: "none",
      duration: 0.5,
      delay: 0.5,
      stagger: 0.5,
    });

    tl.to(
      ".nav-bar",
      1,
      {
        z: 6.9,
        ease: "none",
      },
      "-=1"
    );
  }, []);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
      className="intro fixed bg-black top-0 left-0  z-50 text-black"
    >
      <div className="flex flex-row w-full h-full justify-between text-center">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className="text-7xl  uppercase font-bold "
        >
          <div
            style={{
              zIndex: "57",
            }}
            className="intro-text a -top-10 p-96 fixed  bg-black  text-white"
          >
            Welcome
          </div>
          <div
            style={{
              zIndex: "56",
            }}
            className="intro-text  a -top-10 p-96 fixed text-white bg-black  "
          >
            To
          </div>
          <div
            style={{
              zIndex: "55",
            }}
            className="intro-text  a -top-10 p-96 fixed text-white bg-black   "
          >
            POTRFOILIO
          </div>
          <div
            style={{
              zIndex: "54",
            }}
            className="intro-text  a -top-10 p-96 fixed text-white bg-black   "
          >
            OF
          </div>
          <div
            style={{
              zIndex: "53",
            }}
            className="intro-text  a -top-10 p-96 fixed text-white bg-black   "
          >
            AYAD
          </div>
          <div
            style={{
              zIndex: "52",
            }}
            className="intro-text  a -top-10 p-96 fixed text-white bg-black   "
          >
            AL
          </div>
          <div
            style={{
              zIndex: "51",
            }}
            className="intro-text  a -top-10 p-96 fixed text-white bg-black "
          >
            WELCOME
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
