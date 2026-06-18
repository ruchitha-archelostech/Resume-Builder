import React, { useState } from "react";

function Projects({ projects, setProjects }) {

  const [project, setProject] = useState({
    projectName: "",
    description: ""
  });

  const addProject = () => {

    setProjects([
      ...projects,
      project
    ]);

    setProject({
      projectName: "",
      description: ""
    });
  };

  return (
    <div className="card">

      <h2>Projects</h2>

      <input
        placeholder="Project Name"
        value={project.projectName}
        onChange={(e) =>
          setProject({
            ...project,
            projectName: e.target.value
          })
        }
      />

      <textarea
        placeholder="Description"
        value={project.description}
        onChange={(e) =>
          setProject({
            ...project,
            description: e.target.value
          })
        }
      />

      <button onClick={addProject}>
        Add Project
      </button>

    </div>
  );
}

export default Projects;