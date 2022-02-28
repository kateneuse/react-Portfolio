import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'project1',
      description: 'Password Generator',
      link: "https://kateneuse.github.io/password-generator/",
      repo: "https://github.com/kateneuse/password-generator"
    },
    {
      name: 'project2',
      description: 'Coding Quiz Challenge',
      link: "https://kateneuse.github.io/code-quiz/",
      repo: "https://github.com/kateneuse/code-quiz"
    },
    {
      name: 'project3',
      description: 'Work Day Scheduler',
      link: "https://kateneuse.github.io/day-planner/",
      repo: "https://github.com/kateneuse/day-planner"
    },
    {
      name: 'project4',
      description: 'Weather Dashboard',
      link: "https://kateneuse.github.io/weatherDashboard/",
      repo: "https://github.com/kateneuse/weatherDashboard"
    },
    {
      name: 'project5',
      description: 'API/Javascript Project',
      link: "https://kateneuse.github.io/project1/",
      repo: "https://github.com/kateneuse/project1"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
