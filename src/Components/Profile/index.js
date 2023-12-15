import React from "react";
import "./index.css";
import name from "./data";

function index() {
  return (
    <>
      <div className="profileContainer">
        <div className="profileName">
          HELLO, I AM {name[0].firstName} {name[0].lastName}.
        </div>
        <div className="profileRole">{name[0].title}.</div>
        <div className="profileSkills">{name[0].skills}.</div>
      </div>
    </>
  );
}
export default index;
