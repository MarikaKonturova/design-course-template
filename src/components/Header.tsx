import React from "react";
import menu from "../assets/icons/menu-bar.svg";
import question from "../assets/icons/question.svg";
export function Header() {
  return (
    <header className="header">
      <img src={menu} alt="menu-bar" />
      <h1 className="logo" id="logo">
        DeisgnCourse
      </h1>
      <img src={question} alt="question" />
    </header>
  );
}
