import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log("THis is my project" + projects[0].name);
  //const tech = projects.map((tech)=> <span>{tech.technologies[0]}</span>)
  const pj = projects.map((pj)=>{
    return <ProjectItem key={pj.id} name={pj.name} about={pj.about} technologies={pj.technologies}> </ProjectItem>

  })
  console.log("This should be techhhh" + projects[0].projects)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
      pj
      }</div>
      
    </div>
  );
}

export default ProjectList;
