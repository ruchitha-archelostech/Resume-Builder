import React from "react";

function ResumePreview({
  personalInfo,
  education,
  experience,
  skills,
  projects,
  certifications
}) {
  return (
    <div className="resume-preview">

      <h1>{personalInfo.name}</h1>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.phone}</p>
      <p>{personalInfo.address}</p>

      <hr />
      <hr/>
      

      <h2>Professional Summary</h2>
      <p>{personalInfo.summary}</p>

      <hr />

      <h2>Education</h2>

      {education.map((edu, index) => (
        <div key={index}>
          <h4>{edu.institution}</h4>
          <p>{edu.degree}</p>
          <p>{edu.branch}</p>
          <p>CGPA: {edu.cgpa}</p>
        </div>
      ))}

      <hr />

      <h2>Experience</h2>

      {experience.map((exp, index) => (
        <div key={index}>
          <h4>{exp.company}</h4>
          <p>{exp.designation}</p>
          <p>{exp.responsibility}</p>
          <p>{exp.achievement}</p>
        </div>
      ))}

      <hr />

      <h2>Skills</h2>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill.skill} - {skill.category}
          </li>
        ))}
      </ul>

      <hr />

      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={index}>
          <h4>{project.name}</h4>
          <p>{project.description}</p>
          <p>{project.technologies}</p>

          <a href={project.github}>
            GitHub
          </a>

          <br />

          <a href={project.live}>
            Live Demo
          </a>
        </div>
      ))}

      <hr />

      <h2>Certifications</h2>

      {certifications.map((cert, index) => (
        <div key={index}>
          <h4>{cert.name}</h4>
          <p>{cert.organization}</p>
          <p>{cert.issueDate}</p>

          <a href={cert.url}>
            Credential
          </a>
        </div>
      ))}

    </div>
  );
}

export default ResumePreview;