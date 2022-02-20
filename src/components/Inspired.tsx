import React from "react";
import portrait from "../assets/img/portrait.jpg";
export function Inspired() {
  return (
    <section className="inspired">
      <img src={portrait} alt="photo of muhammad faiz khan" />
      <h2>Inspired by</h2>
      <div className="inspired-block">
        <h1>Muhammad <br/> faiz khan</h1>
        <p>
          An award winning <b>designer</b> and <b>problem</b> solver
        </p>
      </div>
    </section>
  );
}
