import React from "react";

function PersonalInfo({ personalInfo, setPersonalInfo }) {

  const handleChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="card">

      <h2>Personal Information</h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        onChange={handleChange}
      />

      <input
        type="text"
        name="linkedin"
        placeholder="LinkedIn URL"
        onChange={handleChange}
      />

      <input
        type="text"
        name="github"
        placeholder="GitHub URL"
        onChange={handleChange}
      />

      <textarea
        name="summary"
        placeholder="Professional Summary"
        onChange={handleChange}
      />

    </div>
  );
}

export default PersonalInfo;