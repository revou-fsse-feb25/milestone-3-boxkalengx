"use client";

import { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="text-blue-400">
      <h1>Contact me</h1>
      <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Hide text" : "Show Message"}</button>

      {isVisible && <p> Secret Message</p>}
    </div>
  );
}
