import React, { useState } from "react";

const categories = [
  "Frontend Skills",
  "Backend Skills",
  "Database Skills",
  "Tools & Technologies"
];

function Skills({ skills, setSkills }) {
  const [skill, setSkill] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const addSkill = () => {
    const trimmedSkill = skill.trim();

    if (!trimmedSkill) return;

    setSkills((prevSkills) => {
      const updatedSkills = [...prevSkills];
      const existingCategory = updatedSkills.find(
        (item) => item.category === selectedCategory
      );

      if (existingCategory) {
        existingCategory.skills = [...existingCategory.skills, trimmedSkill];
      } else {
        updatedSkills.push({
          category: selectedCategory,
          skills: [trimmedSkill]
        });
      }

      return updatedSkills;
    });

    setSkill("");
  };

  const removeSkill = (category, indexToRemove) => {
    setSkills((prevSkills) =>
      prevSkills
        .map((item) => {
          if (item.category !== category) return item;

          const updatedSkills = item.skills.filter(
            (_, index) => index !== indexToRemove
          );

          return {
            ...item,
            skills: updatedSkills
          };
        })
        .filter((item) => item.skills.length > 0)
    );
  };

  return (
    <div className="card">
      <h2>Skills</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          value={skill}
          placeholder="Enter skill"
          onChange={(e) => setSkill(e.target.value)}
        />

        <button onClick={addSkill}>Add Skill</button>
      </div>

      <div style={{ display: "grid", gap: "10px" }}>
        {categories.map((category) => {
          const categorySkills =
            skills.find((item) => item.category === category)?.skills || [];

          return (
            <div key={category}>
              <h3 style={{ margin: "0 0 6px" }}>{category}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {categorySkills.length > 0 ? (
                  categorySkills.map((item, index) => (
                    <span
                      key={`${category}-${index}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "#f3f4f6",
                        padding: "6px 10px",
                        borderRadius: "999px"
                      }}
                    >
                      {item}
                      <button
                        type="button"
                        onClick={() => removeSkill(category, index)}
                        style={{ border: "none", background: "transparent", cursor: "pointer" }}
                      >
                        ×
                      </button>
                    </span>
                  ))
                ) : (
                  <p style={{ margin: 0, color: "#6b7280" }}>
                    No skills added yet
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;