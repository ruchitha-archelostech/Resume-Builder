import React, { useState } from "react";

function Education({ education, setEducation }) {

  const [edu, setEdu] = useState({
    institution: "",
    degree: "",
    branch: "",
    startDate: "",
    endDate: "",
    cgpa: ""
  });

  const [editIndex, setEditIndex] = useState(null);

  // Add or Update
  const saveEducation = () => {

    if (editIndex !== null) {

      const updatedEducation = [...education];

      updatedEducation[editIndex] = edu;

      setEducation(updatedEducation);

      setEditIndex(null);

    } else {

      setEducation([
        ...education,
        edu
      ]);
    }

    setEdu({
      institution: "",
      degree: "",
      branch: "",
      startDate: "",
      endDate: "",
      cgpa: ""
    });
  };

  // Delete
  const deleteEducation = (index) => {

    const updatedEducation =
      education.filter((_, i) => i !== index);

    setEducation(updatedEducation);
  };

  // Edit
  const editEducation = (index) => {

    setEdu(education[index]);

    setEditIndex(index);
  };

  return (
    <div className="card">

      <h2>Education</h2>

      <input
        placeholder="Institution Name"
        value={edu.institution}
        onChange={(e) =>
          setEdu({
            ...edu,
            institution: e.target.value
          })
        }
      />

      <input
        placeholder="Degree"
        value={edu.degree}
        onChange={(e) =>
          setEdu({
            ...edu,
            degree: e.target.value
          })
        }
      />

      <input
        placeholder="Branch/Specialization"
        value={edu.branch}
        onChange={(e) =>
          setEdu({
            ...edu,
            branch: e.target.value
          })
        }
      />

      <input
        type="date"
        placeholder="Start Date"
        value={edu.startDate}
        onChange={(e) =>
          setEdu({
            ...edu,
            startDate: e.target.value
          })
        }
      />

      <input
        type="date"
        placeholder="End Date"
        value={edu.endDate}
        onChange={(e) =>
          setEdu({
            ...edu,
            endDate: e.target.value
          })
        }
      />

      <input
        placeholder="CGPA"
        value={edu.cgpa}
        onChange={(e) =>
          setEdu({
            ...edu,
            cgpa: e.target.value
          })
        }
      />

      <button onClick={saveEducation}>
        {editIndex !== null ? "Update Education" : "Add Education"}
      </button>

      <hr />

      <h3>Education List</h3>

      {education.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <p><strong>Institution:</strong> {item.institution}</p>
          <p><strong>Degree:</strong> {item.degree}</p>
          <p><strong>Branch:</strong> {item.branch}</p>
          <p><strong>Start Date:</strong> {item.startDate}</p>
          <p><strong>End Date:</strong> {item.endDate}</p>
          <p><strong>CGPA:</strong> {item.cgpa}</p>

          <button onClick={() => editEducation(index)}>
            Edit
          </button>

          <button
            onClick={() => deleteEducation(index)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}

    </div>
  );
}

export default Education;