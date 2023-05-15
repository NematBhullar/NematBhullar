import './App.css';
import React, { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import Navbar from './Navbar';

function App() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 10, delay: 0 });

  return (
    <div>
      <Navbar />
      <div className="home" ref={scrollRef}>
        <p>Hi, my name is</p>
        <h1>Nemat Bhullar.</h1>
        <p>Software Engineer</p>
      </div>
      <div className="about" ref={scrollRef}>
        <h1>About Me</h1>
        <p>About me...</p>
      </div>
    </div>
  );
}

export default App;
