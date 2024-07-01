import React from "react";
import show_1 from "../../assets/images/showcase-1.jpeg";
import figma from "../../assets/images/figma.png";
import react from "../../assets/images/react.png";
import redux from "../../assets/images/redux.png";
import { Tooltip } from "@mui/material";



function ProjectCard() {
  return (
    <>
      <div className="showcase-item">
        <ul className="dot-item">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="showcase-img">
          <img src={show_1} alt="" />
          <div className="overly">
            <button>Details</button>
            <button>View Demo</button>
          </div>
        </div>
        <div className="showcase-content">
          <h5>Start Hub Project</h5>
          <h6>Landing Page</h6>

          <div className="showcase-intense">
            <Tooltip title="Figma" placement="top">
              <div className="intense-img">
                <img src={figma} alt="" />
              </div>
            </Tooltip>
            <Tooltip title="React Js" placement="top">
              <div className="intense-img">
                <img src={react} alt="" />
              </div>
            </Tooltip>
            <Tooltip title="Redux" placement="top">
              <div className="intense-img">
                <img src={redux} alt="" />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
