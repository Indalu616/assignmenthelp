import React from "react";
import "./Team.css";
import { Teams } from "./TeamsList";
function Team() {
  return (
    <div className="container teams-section" id="team">
      <p className="text-center dark-color">
        Our <span className="border-bottom border-warning">teams</span>
      </p>
      <h3 className="text-center dark-color mb-3">
        Meet the Minds Behind the Mission
      </h3>
      <p className="text-center dark-color mb-5">
        Together, we turn challenges into opportunities and ideas into reality.
        Explore the brilliance and passion that drives our team!
      </p>
      <div className="row">
        {Teams.map((team) => {
          return (
            <div className="col" key={team.id}>
              <div className="team-img-section">
                <img src={team.url} alt="Team member" className="team-img"></img>
              </div>
              <div>
                <p className="text-center dark-color" style={{marginBottom:"0",marginTop:"1rem",fontWeight:"600"}}>{team.name}</p>
                <p className="text-center dark-color">{team.role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
