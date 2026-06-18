import React, { useState } from "react";

function Experience({ experience, setExperience }) {

  const [exp, setExp] = useState({
    company: "",
    designation: "",
    responsibility: ""
  });

  const addExperience = () => {

    setExperience([
      ...experience,
      exp
    ]);

    setExp({
      company: "",
      designation: "",
      responsibility: ""
    });
  };

  return (
    <div className="card">

      <h2>Experience</h2>

      <input
        placeholder="Company"
        value={exp.company}
        onChange={(e) =>
          setExp({
            ...exp,
            company: e.target.value
          })
        }
      />

      <input
        placeholder="Designation"
        value={exp.designation}
        onChange={(e) =>
          setExp({
            ...exp,
            designation: e.target.value
          })
        }
      />

      <textarea
        placeholder="Responsibilities"
        value={exp.responsibility}
        onChange={(e) =>
          setExp({
            ...exp,
            responsibility: e.target.value
          })
        }
      />

      <button onClick={addExperience}>
        Add Experience
      </button>

    </div>
  );
}

export default Experience;