import React from "react";
import moment from 'moment-timezone';

export default function Nav() {
  const london = moment().tz('Europe/London').format('h:mm A');
  const USA = moment().tz('America/Los_Angeles').format('h:mm A')
  return (
    <header
      style={{
        borderBottom: "1px solid rgb(212, 212, 212)",
      }}
      className="flex fixed top-0 justify-between w-full border-2    p-2 text-lg z-10 text-white bg-black"
    >
      <div className="logo uppercase">AYAD AL SHAIKHLI</div>
      <div className="hidden time md:flex flex-row text-lg">
        <div className="london pr-10">London {london}</div>
        <div className="us">United-State {USA}</div>
      </div>
      <div className="summary">Summary</div>
    </header>
  );
}
