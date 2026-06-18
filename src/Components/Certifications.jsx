import React, { useState } from "react";

function Certifications({
  certifications,
  setCertifications
}) {

  const [cert, setCert] = useState({
    certificationName: "",
    organization: ""
  });

  const addCert = () => {

    setCertifications([
      ...certifications,
      cert
    ]);

    setCert({
      certificationName: "",
      organization: ""
    });
  };

  return (
    <div className="card">

      <h2>Certifications</h2>

      <input
        placeholder="Certificate Name"
        value={cert.certificationName}
        onChange={(e) =>
          setCert({
            ...cert,
            certificationName: e.target.value
          })
        }
      />

      <input
        placeholder="Organization"
        value={cert.organization}
        onChange={(e) =>
          setCert({
            ...cert,
            organization: e.target.value
          })
        }
      />

      <button onClick={addCert}>
        Add Certificate
      </button>

    </div>
  );
}

export default Certifications;