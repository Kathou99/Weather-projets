import React from "react";
import "./LocationInfo.css";

export default function LocationInfo({ name, countryCode }) {
  return (
    <div className="LocationInfo">
      <div className="row align-items-center">
        <div className="col-1">
          <i className="flag flag-ca" id="flag"></i>
        </div>
        <div className="col">
          <span id="current-city">{name}</span>
        </div>
      </div>
    </div>
  );
}