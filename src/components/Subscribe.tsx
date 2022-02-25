import React from "react";
import underline from "../assets/icons/underline.svg";

export const Subscribe = () => {
  return (
    <section className={"subscribe"}>
      <div className="subscribe-group">
          <div className="underline-h1group-subscribe">
            <h1>Subscribe to </h1>
            <h1> our newsletter</h1>
          </div>

          <img src={underline} alt="" />
      </div>
      <EmailForm />
    </section>
  );
};

const EmailForm = () => {
  return (
    <div className="emailForm">
      <input className={`emailIcon`} placeholder={`Enter your email`} />
    </div>
  );
};
