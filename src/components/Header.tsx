import React, { useState } from "react";
import menu from "../assets/icons/menu-bar.svg";
import question from "../assets/icons/question.svg";
export function Header() {
  const [show, setShow] = useState(false);
  return (
    <header className="header">
      <img
        src={menu}
        className="menu-icon"
        alt="menu-bar"
        onClick={() => setShow(!show)}
      />
      <h1 className="logo" id="logo">
        DesignCourse
      </h1>
      <img src={question} alt="question" className="menu-icon" id="menu-icon" />
      <div
        className="nav__menu"
        id="nav-menu"
        style={show ? { top: "0%" } : { top: "-150%" }}
      >
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#course" className="nav__link">
              Course
            </a>
          </li>
        </ul>
        <div className="nav__close menu-icon" id="menu-icon">
          <img
            src={menu}
            alt=""
            className="nav__img"
            onClick={() => setShow(!show)}
          />
        </div>
      </div>

      <div className="nav__button-div">
        <button id="" className="button nav__button">
          get a quote
        </button>
      </div>
    </header>
  );
}
