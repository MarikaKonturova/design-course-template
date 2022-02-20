import React from "react";

export function Duration() {
  return (
    <section id='duration-block' className="block ">
      <div className="wrapper">
        <h1>Apuff duration</h1>
        <div className="group duration-group">
          <p>
            Figma Fundamentals <span>first week - three days</span>
          </p>

          <p>
            Adobe XD Fundamentals<span>first week - three days</span>
          </p>
          <p>
            User Interface Fundamentals<span>first week - three days</span>
          </p>
          <p>
            Prototyping Fundamentals<span>first week - three days</span>
          </p>
          <p>
            Final Project Week<span>first week - three days</span>
          </p>
        </div>
        <button className="button button-block">See next</button>
      </div>
    </section>
  );
}
