import React from "react";

function Template1({ personalInfo }) {

  return (
    <div className="card">

      <h1>{personalInfo.name}</h1>

      <p>{personalInfo.email}</p>

      <p>{personalInfo.phone}</p>

    </div>
  );
}

export default Template1;