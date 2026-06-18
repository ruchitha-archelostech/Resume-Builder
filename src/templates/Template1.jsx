import React from "react";

function Template1({ data }) {
  return (
    <div
      id="resume"
      style={{
        maxWidth: "900px",
        margin: "20px auto",
        padding: "36px",
        background: "#fff",
        boxShadow: "0 0 12px rgba(0,0,0,0.08)",
        fontFamily: "Arial, sans-serif",
        color: "#1f2937"
      }}
    >
      <div style={{ borderBottom: "2px solid #e5e7eb", paddingBottom: "16px", marginBottom: "18px" }}>
        <h1 style={{ margin: 0, fontSize: "32px", color: "#111827" }}>
          {data?.personalInfo?.fullName || data?.personalInfo?.name}
        </h1>
        <p style={{ margin: "6px 0", color: "#4b5563" }}>
          {data?.personalInfo?.email} • {data?.personalInfo?.phone}
        </p>
        <p style={{ margin: 0, color: "#4b5563" }}>{data?.personalInfo?.address}</p>
      </div>

      <section style={{ marginBottom: "18px" }}>
        <h2 style={{ marginBottom: "6px", fontSize: "18px" }}>Professional Summary</h2>
        <p style={{ margin: 0, lineHeight: 1.6 }}>{data?.personalInfo?.summary}</p>
      </section>

      <section style={{ marginBottom: "18px" }}>
        <h2 style={{ marginBottom: "8px", fontSize: "18px" }}>Education</h2>
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
            {edu.cgpa && <p style={{ margin: 0 }}>CGPA: {edu.cgpa}</p>}
          </div>
        ))}
      </section>

      <section style={{ marginBottom: "18px" }}>
        <h2 style={{ marginBottom: "8px", fontSize: "18px" }}>Experience</h2>
        {data?.experience?.map((exp, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <h3 style={{ margin: 0 }}>{exp.company}</h3>
            <p style={{ margin: "4px 0" }}>{exp.designation}</p>
            <p style={{ margin: 0, lineHeight: 1.5 }}>{exp.responsibility}</p>
          </div>
        ))}
      </section>

      <section style={{ marginBottom: "18px" }}>
        <h2 style={{ marginBottom: "6px", fontSize: "18px" }}>Skills</h2>
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
                <h3 style={{ margin: "0 0 4px", fontSize: "14px" }}>{category}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {items.map((item, i) => (
                    <span
                      key={`${category}-${i}`}
                      style={{
                        background: "#f3f4f6",
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
      </section>

      <section>
        <h2 style={{ marginBottom: "6px", fontSize: "18px" }}>Certifications</h2>
        {data?.certifications?.map((cert, index) => (
          <div key={index} style={{ marginBottom: "8px" }}>
            <h3 style={{ margin: 0 }}>{cert?.certificationName || cert?.name}</h3>
            <p style={{ margin: "4px 0" }}>{cert?.organization}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Template1;