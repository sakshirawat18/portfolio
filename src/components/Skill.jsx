import React from "react";
import "../style/Skill.css";

const data = ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "SQL"];

const Skill = () => {
  return (
    <div className="main-skill">
      <div className="Skill-Container">
        <div className="Skill-left">
          <div className="Skills">
            {data.map((item) => (
              <div className="list-items" key={item} data-text={item}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="Skill-right">{/* 3d model */}</div>
      </div>
    </div>
  );
};

export default Skill;
