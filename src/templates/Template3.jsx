import React from "react";

function Template3({ data }) {
  return (
    <div
      id="resume"
      style={{
        maxWidth: "850px",
        margin: "20px auto",
        padding: "36px",
        background: "#fff",
        fontFamily: "Arial, sans-serif",
        color: "#1f2937"
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "18px" }}>
        <h1 style={{ margin: 0, fontSize: "30px" }}>
          {data?.personalInfo?.fullName || data?.personalInfo?.name}
        </h1>
        <p style={{ margin: "8px 0" }}>
          {data?.personalInfo?.email} • {data?.personalInfo?.phone}
        </p>
        <p style={{ margin: 0 }}>{data?.personalInfo?.address}</p>
      </div>

      <hr style={{ border: "0", borderTop: "1px solid #e5e7eb", margin: "18px 0" }} />

      <section style={{ marginBottom: "16px" }}>
        <h2 style={{ marginBottom: "6px" }}>Professional Summary</h2>
        <p style={{ margin: 0, lineHeight: 1.6 }}>{data?.personalInfo?.summary}</p>
      </section>

      <section style={{ marginBottom: "16px" }}>
        <h2 style={{ marginBottom: "6px" }}>Education</h2>
        {data?.education?.map((edu, index) => (
          <div key={index} style={{ marginBottom: "8px" }}>
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
      </section>

      <section style={{ marginBottom: "16px" }}>
        <h2 style={{ marginBottom: "6px" }}>Experience</h2>
        {data?.experience?.map((exp, index) => (
          <div key={index} style={{ marginBottom: "8px" }}>
            <h3 style={{ margin: 0 }}>{exp.company}</h3>
            <p style={{ margin: "4px 0" }}>{exp.designation}</p>
            <p style={{ margin: 0 }}>{exp.responsibility}</p>
          </div>
        ))}
      </section>

      <section style={{ marginBottom: "16px" }}>
        <h2 style={{ marginBottom: "6px" }}>Skills</h2>
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
                <h3 style={{ margin: "0 0 4px" }}>{category}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {items.map((item, i) => (
                    <span
                      key={`${category}-${i}`}
                      style={{
                        background: "#eef2ff",
                        padding: "2px 8px",
                        borderRadius: "999px"
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
      </section>

      <section style={{ marginBottom: "16px" }}>
        <h2 style={{ marginBottom: "6px" }}>Projects</h2>
        {data?.projects?.map((project, index) => (
          <div key={index} style={{ marginBottom: "8px" }}>
            <h3 style={{ margin: 0 }}>{project.projectName || project?.name}</h3>
            <p style={{ margin: "4px 0", lineHeight: 1.5 }}>{project.description}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 style={{ marginBottom: "6px" }}>Certifications</h2>
        {data?.certifications?.map((cert, index) => (
          <div key={index} style={{ marginBottom: "6px" }}>
            <h4 style={{ margin: 0 }}>{cert?.certificationName || cert?.name}</h4>
            <p style={{ margin: "4px 0" }}>{cert?.organization}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Template3;