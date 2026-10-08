export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  grade: string;
  coursework?: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "srm-ist",
    institution: "SRM Institute of Science and Technology (SRM IST)",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    period: "2025 - 2028",
    location: "Bengaluru, India",
    grade: "CGPA: 8.7 / 10.0",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
  {
    id: "xavier-intl",
    institution: "Xavier International College",
    degree: "Higher Secondary Education",
    field: "Science (Computer)",
    period: "2022 - 2024",
    location: "Kathmandu, Nepal",
    grade: "GPA: 3.16 / 4.0",
  },
];
