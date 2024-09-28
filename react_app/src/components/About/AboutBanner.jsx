import React, { useState, useEffect, useRef } from "react";
import "./AboutBanner.css";
import AboutVideo from "/video/banner/campaign.mp4"; // Update with correct path

const AboutBanner = () => {
  const [blobX, setBlobX] = useState(0);
  const [blobY, setBlobY] = useState(0);
  const [text, setText] = useState("About Us");
  const [intervalId, setIntervalId] = useState(null);
  const blobRef = useRef(null);
  const letters = "ssUtuobA";

  // Handle the blob animation on pointer move
  useEffect(() => {
    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;

      if (blobRef.current) {
        blobRef.current.animate(
          { left: `${clientX}px`, top: `${clientY}px` },
          { duration: 3000, fill: "forwards" }
        );
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  // Handle text effect on hover
  useEffect(() => {
    const handleMouseOver = (event) => {
      let iteration = 0;
      clearInterval(intervalId);

      const interval = setInterval(() => {
        const newText = text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return "About Us"[index];
            }
            return letters[Math.floor(Math.random() * 8)];
          })
          .join("");

        setText(newText);

        if (iteration >= "About Us".length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);

      setIntervalId(interval);
    };

    const h1Element = document.querySelector("h1");
    if (h1Element) {
      h1Element.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      if (h1Element) {
        h1Element.removeEventListener("mouseover", handleMouseOver);
      }
      clearInterval(intervalId);
    };
  }, [text, intervalId]);

  return (
    <>
      <section className="About-banner">
        <video autoplay muted loop id="background-video">
          <source src="campaign.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div id="blob"></div>
        <div id="blur"></div>
        <h1 data-value="About Us">About Us</h1>
      </section>
      <section className="About-banner">
        <video autoPlay muted loop id="background-video">
          <source src={AboutVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div id="blob" ref={blobRef} style={{ position: "absolute" }} />
        <div id="blur" />
        <h1 data-value="About Us">{text}</h1>
      </section>
    </>
  );
};

export default AboutBanner;
