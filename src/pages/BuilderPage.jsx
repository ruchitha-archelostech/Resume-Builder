import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PersonalInfo from "../Components/PersonalInfo";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Certifications from "../Components/Certifications";
import TemplateSelector from "../Components/TemplateSelector";

function BuilderPage() {

  const navigate = useNavigate();

  const [personalInfo, setPersonalInfo] =useState({});

  const [education, setEducation] =useState([]);

  const [experience, setExperience] = useState([]);

  const [skills, setSkills] = useState([]);

  const [projects, setProjects] = useState([]);

  const [certifications, setCertifications] = useState([]);

  const [template, setTemplate] = useState("template1");

  useEffect(() => { 

    const saved =
      localStorage.getItem("resumeData");

    if (saved) {

      const data =
        JSON.parse(saved);

      setPersonalInfo(
        data.personalInfo || {}
      );

      setEducation(
        data.education || []
      );

      setExperience(
        data.experience || []
      );

      setSkills(
        data.skills || []
      );

      setProjects(
        data.projects || []
      );

      setCertifications(
        data.certifications || []
      );

      setTemplate(
        data.template || "template1"
      );
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "resumeData",
      JSON.stringify({
        personalInfo,
        education,
        experience,
        skills,
        projects,
        certifications,
        template
      })
    );

  }, [
    personalInfo,
    education,
    experience,
    skills,
    projects,
    certifications,
    template
  ]);

  const openPreview = () => {

    navigate("/preview");

  };

  return (
    <div className="builder-page">

      <h1>Resume Builder</h1>

      <PersonalInfo
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />

      <Education
        education={education}
        setEducation={setEducation}
      />

      <Experience
        experience={experience}
        setExperience={setExperience}
      />

      <Skills
        skills={skills}
        setSkills={setSkills}
      />

      <Projects
        projects={projects}
        setProjects={setProjects}
      />

      <Certifications
        certifications={certifications}
        setCertifications={
          setCertifications
        }
      />

      <TemplateSelector
        template={template}
        setTemplate={setTemplate}
      />

      <div className="preview-actions">
        <button onClick={openPreview}>
          Preview Resume
        </button>
      </div>

    </div>
  );
}

export default BuilderPage;