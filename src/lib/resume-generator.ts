import { DATA } from "@/data/resume";

export async function generateResumePDF() {
  // Dynamically import jspdf and html2canvas-pro on client side
  const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
    import("jspdf"),
    import("html2canvas-pro"),
  ]);

  // Create container for off-screen render
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.left = "-9999px";
  container.style.top = "0";
  container.style.width = "800px";
  container.style.backgroundColor = "#ffffff";
  container.style.color = "#1e293b";
  container.style.fontFamily = "'Inter', system-ui, -apple-system, sans-serif";
  container.style.padding = "40px";
  container.style.boxSizing = "border-box";
  container.style.fontSize = "13px";
  container.style.lineHeight = "1.5";

  // Build Greg Langstaff Layout HTML
  const summaryText = DATA.summary;

  const humanSkills = DATA.skills.human.map((s) => s.name).join(" • ");
  const softwareSkills = DATA.skills.software.slice(0, 15).map((s) => s.name).join(" • ");
  const hardwareSkills = DATA.skills.hardware.map((s) => s.name).join(" • ");

  const workHTML = DATA.work
    .slice(0, 6)
    .map((item) => {
      const bullets = item.description
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
        .slice(0, 3)
        .map((line) => {
          const cleanLine = line.startsWith("•") ? line.slice(1).trim() : line;
          return `<li style="margin-bottom: 4px; padding-left: 2px;">${cleanLine}</li>`;
        })
        .join("");

      return `
        <div style="margin-bottom: 18px; page-break-inside: avoid;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid #e2e8f0; padding-bottom: 3px; margin-bottom: 6px;">
            <div>
              <strong style="font-size: 15px; color: #0f172a;">${item.company}</strong>
              <span style="color: #64748b; font-size: 13px;"> &mdash; ${item.location}</span>
            </div>
            <div style="font-weight: 600; color: #475569; font-size: 12px;">
              ${item.start} &ndash; ${item.end}
            </div>
          </div>
          <div style="font-weight: 700; color: #2563eb; margin-bottom: 6px; font-size: 13.5px;">
            ${item.title} ${item.badges && item.badges.length > 0 ? `<span style="font-weight: normal; color: #64748b; font-size: 11px;">(${item.badges.join(", ")})</span>` : ""}
          </div>
          <ul style="margin: 0; padding-left: 18px; color: #334155; font-size: 12.5px; line-height: 1.5;">
            ${bullets}
          </ul>
        </div>
      `;
    })
    .join("");

  const educationHTML = DATA.education
    .map(
      (edu) => `
      <div style="margin-bottom: 10px; display: flex; justify-content: space-between; align-items: baseline;">
        <div>
          <strong style="font-size: 14px; color: #0f172a;">${edu.school}</strong>
          <div style="color: #475569; font-size: 12.5px;">${edu.degree}</div>
        </div>
        <div style="color: #64748b; font-size: 12px; font-weight: 600;">
          ${edu.start} &ndash; ${edu.end}
        </div>
      </div>
    `
    )
    .join("");

  const certificationsHTML = DATA.certifications
    .slice(0, 6)
    .map(
      (cert: any) => `
      <li style="margin-bottom: 4px; color: #334155; font-size: 12.5px;">
        ${cert.name}
      </li>
    `
    )
    .join("");

  container.innerHTML = `
    <!-- GREG LANGSTAFF SIGNATURE RESUME LAYOUT -->
    <div style="width: 100%; box-sizing: border-box;">
      
      <!-- HEADER SECTION -->
      <div style="text-align: center; margin-bottom: 24px; border-bottom: 3px solid #2563eb; padding-bottom: 16px;">
        <h1 style="font-size: 30px; font-weight: 800; letter-spacing: -0.5px; margin: 0 0 6px 0; color: #0f172a; text-transform: uppercase;">
          ${DATA.name}
        </h1>
        <div style="font-size: 14px; font-weight: 700; color: #2563eb; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 8px;">
          Senior Production Designer | Creative Operations & UI/UX Specialist
        </div>
        <div style="font-size: 12px; color: #475569; font-weight: 500; display: flex; justify-content: center; flex-wrap: wrap; gap: 12px;">
          <span>📍 ${DATA.location}</span>
          <span>✉️ ${DATA.contact.email}</span>
          <span>🌐 williamortiz.net</span>
          <span>🔗 linkedin.com/in/william-ortiz-76149b33</span>
        </div>
      </div>

      <!-- PROFESSIONAL SUMMARY SECTION -->
      <div style="margin-bottom: 22px;">
        <h2 style="font-size: 14px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.8px; margin: 0 0 8px 0; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 4px;">
          Professional Summary
        </h2>
        <p style="margin: 0; color: #334155; font-size: 12.5px; text-align: justify; line-height: 1.6;">
          ${summaryText}
        </p>
      </div>

      <!-- CORE COMPETENCIES & SKILLS SECTION -->
      <div style="margin-bottom: 22px;">
        <h2 style="font-size: 14px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.8px; margin: 0 0 10px 0; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 4px;">
          Core Competencies & Technical Skills
        </h2>
        <div style="display: flex; flex-direction: column; gap: 6px; font-size: 12px;">
          <div>
            <strong style="color: #0f172a;">Leadership & Operations:</strong>
            <span style="color: #334155;"> ${humanSkills}</span>
          </div>
          <div>
            <strong style="color: #0f172a;">Design & Software Systems:</strong>
            <span style="color: #334155;"> ${softwareSkills}</span>
          </div>
          <div>
            <strong style="color: #0f172a;">Hardware & Infrastructure:</strong>
            <span style="color: #334155;"> ${hardwareSkills}</span>
          </div>
        </div>
      </div>

      <!-- WORK EXPERIENCE SECTION -->
      <div style="margin-bottom: 22px;">
        <h2 style="font-size: 14px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.8px; margin: 0 0 14px 0; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 4px;">
          Professional Experience
        </h2>
        ${workHTML}
      </div>

      <!-- EDUCATION & CERTIFICATIONS SECTION -->
      <div style="margin-bottom: 10px; page-break-inside: avoid;">
        <h2 style="font-size: 14px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.8px; margin: 0 0 10px 0; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 4px;">
          Education & Certifications
        </h2>
        <div style="margin-bottom: 12px;">
          ${educationHTML}
        </div>
        <div>
          <strong style="font-size: 13px; color: #0f172a; display: block; margin-bottom: 4px;">Professional Certifications:</strong>
          <ul style="margin: 0; padding-left: 18px; line-height: 1.5;">
            ${certificationsHTML}
          </ul>
        </div>
      </div>

    </div>
  `;

  document.body.appendChild(container);

  try {
    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.8);
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save("William_Ortiz_Resume.pdf");
  } catch (err) {
    console.error("Error generating resume PDF:", err);
    // Fallback: open clean print window
    window.print();
  } finally {
    document.body.removeChild(container);
  }
}
