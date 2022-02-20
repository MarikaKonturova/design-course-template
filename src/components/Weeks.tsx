import React, { PureComponent } from "react";
import arrow from "../assets/icons/longArrow.svg";
type TWeek = { name: string; days: string[] };
export function Weeks() {
  const state: TWeek[] = [
    { name: "first week", days: ["Mon", "Tue", "Wed"] },
    { name: "second week", days: ["Mon", "Tue", "Wed"] },
    { name: "third week", days: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
    { name: "fourth week", days: ["Mon", "Tue", "Wed"] },
    { name: "fifth week", days: ["finale e-project submission"] },
  ];
  const weekNumber: string[] = [
    "first week",
    "second week",
    "third week",
    "fourth week",
  ] as string[];

  return (
    <section className="weeks">
      {state.map((w: TWeek) => (
        <Week {...w} />
      ))}
    </section>
  );
}
const Week = ({ name, days }: TWeek) => {
  return (
    <div className="week">
      <div className={`week-info ${name === "fifth week" && "fifthWeek"}`}>
        <h1>{name}</h1>
        <div className="week-days">
          {days.map((d: string) => (
            <h3 className={`${name === "fifth week" && "fifthWeek"}`}>{d}</h3>
          ))}
        </div>
      </div>
      {name !== "fifth week" && <img src={arrow} alt="" className="week-img" />}
    </div>
  );
};
