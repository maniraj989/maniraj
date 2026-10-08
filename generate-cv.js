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

  let y = 748;
  const left = 45;
  const right = 567;

  // 1. HEADER
  addText('F2', 20, left, y, 'MANIRAJ SHARMA', 0.05, 0.05, 0.05);
  y -= 16;
  addText('F2', 11, left, y, 'FULL-STACK DEVELOPER  |  SOFTWARE ENGINEERING  |  INDIA', 0.95, 0.45, 0.08); // subtle warm accent
  y -= 14;
  
  // Contact info
  addText('F1', 8.5, left, y, 'Email: manirajsharma193@gmail.com   |   Website: https://www.manirajsharma.com.np', 0.3, 0.3, 0.3);
  y -= 12;
  addText('F1', 8.5, left, y, 'GitHub: https://github.com/maniraj989   |   LinkedIn: https://www.linkedin.com/in/maniraj-sharmma-221b69355/', 0.3, 0.3, 0.3);
  y -= 12;
  addText('F1', 8.5, left, y, 'Location: Bengaluru, India / Kathmandu, Nepal', 0.3, 0.3, 0.3);
  y -= 11;

  addLine(left, y, right, y, 0.75, 0.75, 0.75, 0.75);
  y -= 14;

  // 2. PROFESSIONAL SUMMARY
  addText('F2', 10, left, y, 'PROFESSIONAL SUMMARY', 0.1, 0.1, 0.1);
  y -= 3;
  addLine(left, y, right, y, 0.85, 0.85, 0.85, 0.5);
  y -= 12;
  addText('F1', 8.5, left, y, 'Computer Science Engineering student and developer dedicated to building practical web applications, business systems,', 0.2, 0.2, 0.2);
  y -= 11;
  addText('F1', 8.5, left, y, 'and digital products. Experienced across frontend interfaces, backend APIs, relational and document databases, and production', 0.2, 0.2, 0.2);
  y -= 11;
  addText('F1', 8.5, left, y, 'deployments with a focus on clean architecture, reliable engineering, and continuous improvement in DSA and system design.', 0.2, 0.2, 0.2);
  y -= 15;

  // 3. EDUCATION
  addText('F2', 10, left, y, 'EDUCATION', 0.1, 0.1, 0.1);
  y -= 3;
  addLine(left, y, right, y, 0.85, 0.85, 0.85, 0.5);
  y -= 12;

  // SRM IST
  addText('F2', 9.5, left, y, 'Bachelor of Technology (B.Tech) - Computer Science and Engineering', 0.05, 0.05, 0.05);
  addText('F1', 8.5, right - 60, y, '2025 - 2028', 0.3, 0.3, 0.3);
  y -= 11;
  addText('F3', 9, left, y, 'SRM Institute of Science and Technology (SRM IST), Bengaluru, India', 0.25, 0.25, 0.25);
  addText('F2', 8.5, right - 80, y, 'CGPA: 8.7 / 10.0', 0.15, 0.5, 0.3);
  y -= 11;
  addText('F1', 8, left + 8, y, 'Coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Networks, Software Engineering', 0.35, 0.35, 0.35);
  y -= 13;

  // Xavier Int'l College
  addText('F2', 9.5, left, y, 'Higher Secondary Education - Science (Computer)', 0.05, 0.05, 0.05);
  addText('F1', 8.5, right - 60, y, '2022 - 2024', 0.3, 0.3, 0.3);
  y -= 11;
  addText('F3', 9, left, y, 'Xavier International College, Kathmandu, Nepal', 0.25, 0.25, 0.25);
  addText('F2', 8.5, right - 80, y, 'GPA: 3.16 / 4.0', 0.15, 0.5, 0.3);
  y -= 15;

  // 4. WORK EXPERIENCE
  addText('F2', 10, left, y, 'WORK EXPERIENCE', 0.1, 0.1, 0.1);
  y -= 3;
  addLine(left, y, right, y, 0.85, 0.85, 0.85, 0.5);
  y -= 12;

  // Role 1: Founder & Full Stack Developer
  addText('F2', 9.5, left, y, 'Founder & Full Stack Developer', 0.05, 0.05, 0.05);
  addText('F1', 8.5, right - 80, y, 'Dec 2025 - Present', 0.3, 0.3, 0.3);
  y -= 11;
  addText('F3', 9, left, y, 'MM Digital Garage', 0.25, 0.25, 0.25);
  y -= 11;
  addText('F1', 8.5, left + 8, y, '- Designed and developed production web applications and business systems across frontend, backend, and deployment layers.', 0.2, 0.2, 0.2);
  y -= 10;
  addText('F1', 8.5, left + 8, y, '- Built scalable Next.js applications, engineered RESTful API endpoints, and structured database models for performance.', 0.2, 0.2, 0.2);
  y -= 11;
  addText('F2', 8, left + 8, y, 'Technologies: Next.js - React - TypeScript - Node.js - MongoDB - PostgreSQL', 0.35, 0.45, 0.55);
  y -= 13;

  // Role 2: Full Stack Developer
  addText('F2', 9.5, left, y, 'Full Stack Developer', 0.05, 0.05, 0.05);
  addText('F1', 8.5, right - 90, y, 'Sep 2024 - Nov 2025', 0.3, 0.3, 0.3);
  y -= 11;
  addText('F3', 9, left, y, 'Digital Cafe India', 0.25, 0.25, 0.25);
  y -= 11;
  addText('F1', 8.5, left + 8, y, '- Developed responsive web applications across client interfaces and backend services with focus on clean code and performance.', 0.2, 0.2, 0.2);
  y -= 10;
  addText('F1', 8.5, left + 8, y, '- Implemented RESTful APIs, optimized database queries, and collaborated on application feature architecture.', 0.2, 0.2, 0.2);
  y -= 11;
  addText('F2', 8, left + 8, y, 'Technologies: React - JavaScript - Node.js - Express.js - MongoDB', 0.35, 0.45, 0.55);
  y -= 13;

  // Role 3: Frontend Developer & Designer
  addText('F2', 9.5, left, y, 'Frontend Developer & Designer', 0.05, 0.05, 0.05);
  addText('F1', 8.5, right - 90, y, 'Jun 2023 - Jul 2024', 0.3, 0.3, 0.3);
  y -= 11;
  addText('F3', 9, left, y, 'Freelance', 0.25, 0.25, 0.25);
  y -= 11;
  addText('F1', 8.5, left + 8, y, '- Delivered responsive client interfaces and digital prototypes for startups and small businesses.', 0.2, 0.2, 0.2);
  y -= 10;
  addText('F1', 8.5, left + 8, y, '- Maintained fast load times, accessible semantic HTML, and custom UI component specifications.', 0.2, 0.2, 0.2);
  y -= 11;
  addText('F2', 8, left + 8, y, 'Technologies: HTML - CSS - JavaScript - React - Figma', 0.35, 0.45, 0.55);
  y -= 15;

  // 5. FEATURED PROJECTS
  addText('F2', 10, left, y, 'FEATURED PROJECTS', 0.1, 0.1, 0.1);
  y -= 3;
  addLine(left, y, right, y, 0.85, 0.85, 0.85, 0.5);
  y -= 12;

  // Project 1: MM-Agro
  addText('F2', 9, left, y, 'MM-Agro (Agricultural Inventory & POS System):', 0.05, 0.05, 0.05);
  addText('F1', 8.5, left + 205, y, 'Engineered inventory management & POS web app with real-time stock deduction,', 0.2, 0.2, 0.2);
  y -= 10;
  addText('F1', 8.5, left + 8, y, 'customer Khata credit ledger tracking, and stock valuation reports. (Next.js, TypeScript, PostgreSQL, Tailwind CSS)', 0.2, 0.2, 0.2);
  y -= 11;

  // Project 2: eguru nepal
  addText('F2', 9, left, y, 'eguru nepal (E-Learning Portal):', 0.05, 0.05, 0.05);
  addText('F1', 8.5, left + 145, y, 'Built student learning portal with live classroom connectivity, curriculum-aligned PDF study notes,', 0.2, 0.2, 0.2);
  y -= 10;
  addText('F1', 8.5, left + 8, y, 'and subject directories. (Next.js, TypeScript, Tailwind CSS, Supabase)', 0.2, 0.2, 0.2);
  y -= 11;

  // Project 3: MM Digital Garage
  addText('F2', 9, left, y, 'MM Digital Garage (Agency Platform):', 0.05, 0.05, 0.05);
  addText('F1', 8.5, left + 165, y, 'Full-stack agency platform with serverless lead capture, responsive UI architecture, and edge hosting.', 0.2, 0.2, 0.2);
  y -= 11;

  // Project 4: Jeereu Restaurant
  addText('F2', 9, left, y, 'Jeereu Restaurant (Dining Web App):', 0.05, 0.05, 0.05);
  addText('F1', 8.5, left + 155, y, 'Interactive culinary menu, online table booking form, and direct WhatsApp concierge integration.', 0.2, 0.2, 0.2);
  y -= 15;

  // 6. TECHNICAL SKILLS
  addText('F2', 10, left, y, 'TECHNICAL SKILLS', 0.1, 0.1, 0.1);
  y -= 3;
  addLine(left, y, right, y, 0.85, 0.85, 0.85, 0.5);
  y -= 12;

  addText('F2', 8.5, left, y, 'Languages:', 0.1, 0.1, 0.1);
  addText('F1', 8.5, left + 90, y, 'Java, JavaScript (ES6+), TypeScript, SQL, Python', 0.25, 0.25, 0.25);
  y -= 11;
  addText('F2', 8.5, left, y, 'Frontend:', 0.1, 0.1, 0.1);
  addText('F1', 8.5, left + 90, y, 'React, Next.js (App Router), HTML5, CSS3, Tailwind CSS, Responsive Design', 0.25, 0.25, 0.25);
  y -= 11;
  addText('F2', 8.5, left, y, 'Backend:', 0.1, 0.1, 0.1);
  addText('F1', 8.5, left + 90, y, 'Node.js, Express.js, Spring Boot, RESTful APIs, Server Architecture', 0.25, 0.25, 0.25);
  y -= 11;
  addText('F2', 8.5, left, y, 'Databases:', 0.1, 0.1, 0.1);
  addText('F1', 8.5, left + 90, y, 'PostgreSQL, Supabase, MongoDB, MySQL, Relational Modeling', 0.25, 0.25, 0.25);
  y -= 11;
  addText('F2', 8.5, left, y, 'Developer Tools:', 0.1, 0.1, 0.1);
  addText('F1', 8.5, left + 90, y, 'Git, GitHub, Docker, Vercel, Figma, Postman', 0.25, 0.25, 0.25);

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

  // Write preferred filename
  const preferredPath = path.join(dir, 'Maniraj-Sharma-Resume.pdf');
  fs.writeFileSync(preferredPath, Buffer.from(finalPdf, 'utf-8'));

  // Also write legacy path for compatibility
  const legacyPath = path.join(dir, 'maniraj-sharma-cv.pdf');
  fs.writeFileSync(legacyPath, Buffer.from(finalPdf, 'utf-8'));

  console.log(`Resume PDF generated at: ${preferredPath} and ${legacyPath}`);
}

buildResumePdf();
