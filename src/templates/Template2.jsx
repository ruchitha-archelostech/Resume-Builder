import React from "react";

function Template2({ data }) {
  return (
    <div
      id="resume"
      style={{
        display: "flex",
        maxWidth: "1000px",
        margin: "20px auto",
        background: "#fff",
        fontFamily: "Arial, sans-serif",
        color: "#1f2937"
      }}
    >
      <div
        style={{
          width: "32%",
          padding: "24px",
          background: "#f3f4f6"
        }}
      >
        <h2 style={{ marginTop: 0, fontSize: "24px" }}>
          {data?.personalInfo?.fullName || data?.personalInfo?.name}
        </h2>
        <p style={{ margin: "6px 0" }}>{data?.personalInfo?.email}</p>
        <p style={{ margin: "0 0 16px" }}>{data?.personalInfo?.phone}</p>

        <h3 style={{ marginBottom: "6px" }}>Skills</h3>
        {Array.isArray(data?.skills) && data.skills.length > 0 ? (
          data.skills.map((group, index) => {
            const category =
              typeof group === "string"
                ? "Skills"
                : group?.category || "Skills";
            const items =
              typeof group === "string"
                ? [group]
                : Array.isArray(group?.skills)
                ? group.skills
                : [];

            return (
              <div key={index} style={{ marginBottom: "10px" }}>
                <p style={{ margin: "0 0 4px", fontWeight: 600 }}>{category}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {items.map((item, i) => (
                    <span
                      key={`${category}-${i}`}
                      style={{
                        background: "#ffffff",
                        padding: "2px 8px",
                        borderRadius: "999px",
                        fontSize: "13px"
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <p style={{ margin: 0 }}>No skills added</p>
        )}

        <h3 style={{ marginBottom: "6px" }}>Certifications</h3>
        <ul style={{ margin: 0, paddingLeft: "18px" }}>
          {data?.certifications?.map((cert, index) => (
            <li key={index}>
              {cert?.certificationName || cert?.name}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ width: "68%", padding: "24px" }}>
        <h2 style={{ marginTop: 0 }}>Professional Summary</h2>
        <p style={{ lineHeight: 1.6 }}>{data?.personalInfo?.summary}</p>

        <h2>Education</h2>
        {data?.education?.map((edu, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <h3 style={{ margin: 0 }}>{edu.institution}</h3>
            <p style={{ margin: "4px 0" }}>
              {edu.degree}
              {edu.branch ? ` • ${edu.branch}` : ""}
            </p>
            {(edu.startDate || edu.endDate) && (
              <p style={{ margin: "4px 0", color: "#6b7280" }}>
                {edu.startDate}
                {edu.startDate && edu.endDate ? " - " : ""}
                {edu.endDate}
              </p>
            )}
          </div>
        ))}

        <h2>Experience</h2>
        {data?.experience?.map((exp, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <h3 style={{ margin: 0 }}>{exp.company}</h3>
            <p style={{ margin: "4px 0" }}>{exp.designation}</p>
            <p style={{ margin: 0 }}>{exp.responsibility}</p>
          </div>
        ))}

        <h2>Projects</h2>
        {data?.projects?.map((project, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <h3 style={{ margin: 0 }}>{project.projectName || project?.name}</h3>
            <p style={{ margin: "4px 0", lineHeight: 1.5 }}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Template2;