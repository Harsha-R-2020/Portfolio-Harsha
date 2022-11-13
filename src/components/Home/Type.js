import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Data Scientist",
          "Machine Learning Engineer",
          "App Developer",
          "Google Developer Student Club Lead - '22",
          "Vice President at DSAC Club",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
