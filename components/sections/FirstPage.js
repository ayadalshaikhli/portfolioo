import React, { useEffect, useRef } from "react";
import { gsap, Expo } from "gsap/dist/gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const tl = gsap.timeline({
  defaults: { ease: "power3.out" },
});
function FirstPage() {
  const first = useRef({position: { x: 0}});
  


  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
      className="first-page fixed bg-black top-0 left-0  z-50 text-black"
       ref={first}
    >
      <div className="flex flex-row w-full h-full justify-between text-center">
        hello
      </div>
    </div>
  );
}

export default FirstPage;
