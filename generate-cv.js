const fs = require('fs');
const path = require('path');

function escapePdfText(text) {
  return text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

function buildResumePdf() {
  const dir = path.join(__dirname, 'public', 'resume');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let stream = [];

  function addText(font, size, x, y, text, r = 0.1, g = 0.1, b = 0.1) {
    stream.push(`BT /${font} ${size} Tf ${r} ${g} ${b} rg 1 0 0 1 ${x} ${y} Tm (${escapePdfText(text)}) Tj ET`);
  }

  function addLine(x1, y1, x2, y2, r = 0.8, g = 0.8, b = 0.8, width = 0.75) {
    stream.push(`q ${r} ${g} ${b} RG ${width} w ${x1} ${y1} m ${x2} ${y2} l S Q`);
  }

  let y = 745;
  const left = 45;
  const right = 567;

  // 1. HEADER
  addText('F2', 22, left, y, 'MANIRAJ SHARMA', 0.05, 0.05, 0.05);
  y -= 18;
  addText('F2', 12, left, y, 'FULL-STACK WEB DEVELOPER', 0.2, 0.4, 0.7);
  y -= 16;
  
  // Contact info line 1
  addText('F1', 9, left, y, 'Email: manirajsharma193@gmail.com   |   Website: https://manirajsharma.com.np', 0.3, 0.3, 0.3);
  y -= 13;
  addText('F1', 9, left, y, 'GitHub: https://github.com/maniraj989   |   LinkedIn: https://www.linkedin.com/in/maniraj-sharmma-221b69355/', 0.3, 0.3, 0.3);
  y -= 13;
  addText('F1', 9, left, y, 'Location: Bengaluru, India / Kathmandu, Nepal', 0.3, 0.3, 0.3);
  y -= 12;

  addLine(left, y, right, y, 0.75, 0.75, 0.75, 1);
  y -= 16;

  // 2. PROFESSIONAL SUMMARY
  addText('F2', 11, left, y, 'PROFESSIONAL SUMMARY', 0.1, 0.1, 0.1);
  y -= 4;
  addLine(left, y, right, y, 0.85, 0.85, 0.85, 0.5);
  y -= 13;
  addText('F1', 9, left, y, 'Full-Stack Web Developer dedicated to engineering performant, scalable, and responsive web applications.', 0.2, 0.2, 0.2);
  y -= 12;
  addText('F1', 9, left, y, 'Specialized in modern JavaScript/TypeScript, React, Next.js, and Node.js microservices with clean code architecture,', 0.2, 0.2, 0.2);
  y -= 12;
  addText('F1', 9, left, y, 'high performance, robust state management, and intuitive user experiences.', 0.2, 0.2, 0.2);
  y -= 18;

  // 3. WORK EXPERIENCE
  addText('F2', 11, left, y, 'WORK EXPERIENCE', 0.1, 0.1, 0.1);
  y -= 4;
  addLine(left, y, right, y, 0.85, 0.85, 0.85, 0.5);
  y -= 14;

  // Role 1: Senior Full Stack Developer
  addText('F2', 10, left, y, 'Senior Full Stack Developer', 0.05, 0.05, 0.05);
  addText('F1', 9, right - 85, y, 'Dec 2025 - Present', 0.3, 0.3, 0.3);
  y -= 12;
  addText('F3', 9.5, left, y, 'MM Digital Garage', 0.25, 0.25, 0.25);
  y -= 13;
  addText('F1', 9, left + 8, y, '- Building and maintaining full-stack web applications with a focus on scalable architecture,', 0.2, 0.2, 0.2);
  y -= 11;
  addText('F1', 9, left + 14, y, 'responsive interfaces, and reliable user experiences.', 0.2, 0.2, 0.2);
  y -= 12;
  addText('F2', 8.5, left + 8, y, 'Technologies: React - JavaScript - Next.js - Node.js - MongoDB', 0.3, 0.4, 0.5);
  y -= 16;

  // Role 2: Full Stack Developer
  addText('F2', 10, left, y, 'Full Stack Developer', 0.05, 0.05, 0.05);
  addText('F1', 9, right - 95, y, 'Sep 2024 - Nov 2025', 0.3, 0.3, 0.3);
  y -= 12;
  addText('F3', 9.5, left, y, 'Digital Cafe India', 0.25, 0.25, 0.25);
  y -= 13;
  addText('F1', 9, left + 8, y, '- Developed responsive web applications across frontend and backend, focusing on clean code,', 0.2, 0.2, 0.2);
  y -= 11;
  addText('F1', 9, left + 14, y, 'performance, and seamless user experiences.', 0.2, 0.2, 0.2);
  y -= 12;
  addText('F2', 8.5, left + 8, y, 'Technologies: React - JavaScript - Node.js - Express.js - MongoDB', 0.3, 0.4, 0.5);
  y -= 16;

  // Role 3: Frontend Developer & Designer
  addText('F2', 10, left, y, 'Frontend Developer & Designer', 0.05, 0.05, 0.05);
  addText('F1', 9, right - 95, y, 'Jun 2023 - Jul 2024', 0.3, 0.3, 0.3);
  y -= 12;
  addText('F3', 9.5, left, y, 'Freelance', 0.25, 0.25, 0.25);
  y -= 13;
  addText('F1', 9, left + 8, y, '- Delivered custom, lightweight websites and custom digital interfaces for early startups.', 0.2, 0.2, 0.2);
  y -= 11;
  addText('F1', 9, left + 14, y, 'Maintained high quality codebases, fast load times, and custom graphic designs.', 0.2, 0.2, 0.2);
  y -= 12;
  addText('F2', 8.5, left + 8, y, 'Technologies: HTML - CSS - JavaScript - React - Figma', 0.3, 0.4, 0.5);
  y -= 18;

  // 4. EDUCATION
  addText('F2', 11, left, y, 'EDUCATION', 0.1, 0.1, 0.1);
  y -= 4;
  addLine(left, y, right, y, 0.85, 0.85, 0.85, 0.5);
  y -= 14;

  // Edu 1: SRM IST
  addText('F2', 10, left, y, 'Bachelor of Technology (B.Tech) in Computer Science and Engineering', 0.05, 0.05, 0.05);
  addText('F1', 9, right - 65, y, '2025 - 2028', 0.3, 0.3, 0.3);
  y -= 12;
  addText('F3', 9.5, left, y, 'SRM Institute of Science and Technology (SRM IST), Bengaluru, India', 0.25, 0.25, 0.25);
  addText('F2', 9, right - 85, y, 'CGPA: 8.7 / 10.0', 0.15, 0.5, 0.3);
  y -= 16;

  // Edu 2: Xavier International College
  addText('F2', 10, left, y, 'Higher Secondary Education - Science (Computer)', 0.05, 0.05, 0.05);
  addText('F1', 9, right - 65, y, '2022 - 2024', 0.3, 0.3, 0.3);
  y -= 12;
  addText('F3', 9.5, left, y, 'Xavier International College, Kathmandu, Nepal', 0.25, 0.25, 0.25);
  addText('F2', 9, right - 85, y, 'GPA: 3.16 / 4.0', 0.15, 0.5, 0.3);
  y -= 18;

  // 5. TECHNICAL SKILLS
  addText('F2', 11, left, y, 'TECHNICAL SKILLS', 0.1, 0.1, 0.1);
  y -= 4;
  addLine(left, y, right, y, 0.85, 0.85, 0.85, 0.5);
  y -= 14;

  addText('F2', 9, left, y, 'Languages & Core:', 0.1, 0.1, 0.1);
  addText('F1', 9, left + 105, y, 'JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL', 0.25, 0.25, 0.25);
  y -= 13;
  addText('F2', 9, left, y, 'Frontend Ecosystem:', 0.1, 0.1, 0.1);
  addText('F1', 9, left + 105, y, 'React, Next.js (App Router), Tailwind CSS, Responsive Design, State Management', 0.25, 0.25, 0.25);
  y -= 13;
  addText('F2', 9, left, y, 'Backend & Database:', 0.1, 0.1, 0.1);
  addText('F1', 9, left + 105, y, 'Node.js, Express.js, MongoDB, MySQL, RESTful APIs', 0.25, 0.25, 0.25);
  y -= 13;
  addText('F2', 9, left, y, 'Developer Tools:', 0.1, 0.1, 0.1);
  addText('F1', 9, left + 105, y, 'Git, GitHub, Docker, Figma, Postman, Vite, Vercel', 0.25, 0.25, 0.25);

  const streamContent = stream.join('\n');
  const streamLength = Buffer.byteLength(streamContent, 'utf-8');

  // Build standard PDF with correct byte offsets
  const objects = [];

  // 1: Catalog
  objects.push('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj');
  // 2: Pages
  objects.push('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj');
  // 3: Page
  objects.push('3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R /F3 6 0 R >> >> /Contents 7 0 R >>\nendobj');
  // 4: Font F1 (Helvetica)
  objects.push('4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj');
  // 5: Font F2 (Helvetica-Bold)
  objects.push('5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj');
  // 6: Font F3 (Helvetica-Oblique)
  objects.push('6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>\nendobj');
  // 7: Contents
  objects.push(`7 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamContent}\nendstream\nendobj`);

  let offset = 9; // length of "%PDF-1.4\n"
  const offsets = [0];

  let body = '%PDF-1.4\n';
  for (let i = 0; i < objects.length; i++) {
    offsets.push(offset);
    const objStr = objects[i] + '\n';
    body += objStr;
    offset += Buffer.byteLength(objStr, 'utf-8');
  }

  const startxref = offset;
  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i++) {
    const o = String(offsets[i]).padStart(10, '0');
    xref += `${o} 00000 n \n`;
  }

  const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF\n`;
  const finalPdf = body + xref + trailer;

  const targetPath = path.join(dir, 'maniraj-sharma-cv.pdf');
  fs.writeFileSync(targetPath, Buffer.from(finalPdf, 'utf-8'));
  console.log(`CV PDF successfully generated at: ${targetPath}`);
}

buildResumePdf();
