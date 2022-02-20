import React, { PureComponent } from "react";
import blog from "../assets/icons/decor/blog.svg";
import cart from "../assets/icons/decor/cart.svg";
import mobile from "../assets/icons/decor/mobile.svg";
import news from "../assets/icons/decor/news.svg";
import pagenum from "../assets/icons/decor/pagenum.svg";

export function Decor() {
  return (
    <section className="decor">
      <img src={mobile} alt="mobile" className={`decor_icon mobile`} />
      <img src={cart} alt="cart" className={`decor_icon cart`} />
      <img src={news} alt="news" className={`decor_icon news`} />
      <img src={blog} alt="blog" className={`decor_icon blog`} />
      <img src={pagenum} alt="pagenum" className={`decor_icon pagenum`} />
    </section>
  );
}
