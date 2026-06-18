import { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";
import Template3 from "../templates/Template3";

function PreviewPage() {

  const [resumeData, setResumeData] =
    useState(null);

  const resumeRef = useRef(null);

  useEffect(() => {

    const saved =
      localStorage.getItem("resumeData");

    if (saved) {
      setResumeData(
        JSON.parse(saved)
      );
    }

  }, []);

  const exportPdf = async () => {
    if (!resumeRef.current) return;

    const canvas = await html2canvas(resumeRef.current, {
      scale: 2,
      useCORS: true
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      imgWidth * ratio,
      imgHeight * ratio
    );

    pdf.save("resume.pdf");
  };

  if (!resumeData)
    return <h2>Loading...</h2>;

  const template =
    resumeData.template;

  return (
    <div>
      <button
        onClick={exportPdf}
        style={{ marginBottom: "12px" }}
      >
        Download PDF
      </button>

      <div ref={resumeRef} className="resume-preview">
        {template === "template1" && (
          <Template1
            data={resumeData}
          />
        )}

        {template === "template2" && (
          <Template2
            data={resumeData}
          />
        )}

        {template === "template3" && (
          <Template3
            data={resumeData}
          />
        )}
      </div>
    </div>
  );
}

export default PreviewPage;