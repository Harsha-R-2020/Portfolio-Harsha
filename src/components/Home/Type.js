import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Jr. PriceFx Configuration Engineer",
          "ML Enthusiast",
          "App Developement Ensthusiast",
          "Google Developer Student Club Lead - '22",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
