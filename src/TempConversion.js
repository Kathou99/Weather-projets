import React from "react";

import "./TempConversion.css";

export default function TempConversion({ useFahrenheit, setUseFahrenheit }) {
  function convertToCelsius() {
    setUseFahrenheit(false);
  }
  function convertToFahrenheit() {
    setUseFahrenheit(true);
  }

  if (useFahrenheit) {
    return (
      <div className="TempConversion">
        <span className="temp-units">
          <span onClick={convertToCelsius} className="active">
            °C
          </span>{" "}
          / <span>°F</span>
        </span>
      </div>
    );
  } else {
    return (
      <div className="TempConversion">
        <span className="temp-units">
          <span>°C</span> /{" "}
          <span onClick={convertToFahrenheit} className="active">
            °F
          </span>
        </span>
      </div>
    );
  }
}