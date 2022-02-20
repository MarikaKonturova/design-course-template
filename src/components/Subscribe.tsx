import React from "react";
import underline from "../assets/icons/underline.svg";

export const Subscribe = () => {
  return (
    <section>
      <h1>Subscribe to our newsletter</h1>
      <img src={underline} alt=''/>
      <EmailForm />
    </section>
  );
};

const EmailForm = () => {
  return (
    <div className='emailForm'>
      <input className={`emailIcon`} placeholder={`Enter your email`}/>
      
    </div>
  );
};
