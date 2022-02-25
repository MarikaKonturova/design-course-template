import React from "react";

export function Course() {
  return (
    <section className="course" id="course">
      <div className="course-wrapper">
        <h2>
          Beginner <br /> friendly
        </h2>
        <h1>User Interface and user experience course</h1>
        <button className="button">Read More</button>
        <div className="course-details">
          <div className="course-details-1">
            <p>Course Name:</p>
            <h3>Apuff</h3>
          </div>
          <div className="course-details-2">
            <p className="course-text">offers by:</p>
            <h3 className="course-h3">Muhammad Faiz Khan </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
