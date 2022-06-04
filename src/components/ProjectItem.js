import React from "react";

function ProjectItem({ name, about, technologies }) {
  const tech = technologies.map((myTech)=> <span key={myTech}>{myTech}</span>)

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      {tech}
      <div className="technologies">
    
      
      </div>
    </div>
  );
}

export default ProjectItem;
