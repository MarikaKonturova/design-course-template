import React from "react";
import underline from "../assets/icons/underline.svg";
import { Header } from "./Header";
export function Intro() {
  return (
    <section className="intro">
      <Header />
      <div className="intro-main">
        <h3>Award Winning Design Courses</h3>
        <h1>
          Give Your Mind An
          <br /> Extra Oridinary
        </h1>
        <span className="underline-group">
          <h2>Creative</h2>
          <img src={underline} alt="" />
        </span>
        <span>Booster.</span>
        
        <button className="button intro-button">Our Courses</button>
      </div>
    </section>
  );
}
