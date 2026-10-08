import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import ScrollProgress from "@/components/ScrollProgress";

export const viewport: Viewport = {
  themeColor: "#080A0D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Maniraj Sharma — Full-Stack Developer & Software Engineer",
    template: "%s | Maniraj Sharma",
  },
  description:
    "Maniraj Sharma is a Computer Science Engineering student and full-stack developer with a backend/software engineering focus, building web applications, business systems and digital products.",
  keywords: [
    "Maniraj Sharma",
    "manirajsharma",
    "maniraj sharma",
    "Full-Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "Java Developer",
    "Spring Boot",
    "PostgreSQL",
    "Supabase",
    "India",
  ],
  authors: [{ name: "Maniraj Sharma", url: "https://www.manirajsharma.com.np" }],
  creator: "Maniraj Sharma",
  metadataBase: new URL("https://www.manirajsharma.com.np"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Maniraj Sharma — Full-Stack Developer & Software Engineer",
    description:
      "Maniraj Sharma is a Computer Science Engineering student and full-stack developer with a backend/software engineering focus, building web applications, business systems and digital products.",
    url: "https://www.manirajsharma.com.np",
    siteName: "Maniraj Sharma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maniraj Sharma — Full-Stack Developer & Software Engineer",
    description:
      "Maniraj Sharma is a Computer Science Engineering student and full-stack developer with a backend/software engineering focus, building web applications, business systems and digital products.",
    creator: "@maniraj989",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.manirajsharma.com.np/#person",
        name: "Maniraj Sharma",
        alternateName: ["manirajsharma", "maniraj sharma"],
        jobTitle: "Full-Stack Developer & Software Engineer",
        description:
          "Computer Science Engineering student and full-stack developer with a backend/software engineering focus, building practical web applications, business systems, and digital products.",
        url: "https://www.manirajsharma.com.np",
        sameAs: [
          "https://github.com/maniraj989",
          "https://www.linkedin.com/in/maniraj-sharmma-221b69355/",
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "SRM Institute of Science and Technology",
        },
        knowsAbout: [
          "Data Structures & Algorithms",
          "Software Engineering",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Express.js",
          "Java",
          "Spring Boot",
          "PostgreSQL",
          "Supabase",
          "MongoDB",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.manirajsharma.com.np/#website",
        url: "https://www.manirajsharma.com.np",
        name: "Maniraj Sharma Portfolio",
        description:
          "Personal portfolio of Maniraj Sharma, showcasing full-stack web applications, business systems, and engineering projects.",
        publisher: {
          "@id": "https://www.manirajsharma.com.np/#person",
        },
      },
      {
        "@type": "ProfilePage",
        "@id": "https://www.manirajsharma.com.np/#profilepage",
        url: "https://www.manirajsharma.com.np",
        name: "Maniraj Sharma — Profile",
        mainEntity: {
          "@id": "https://www.manirajsharma.com.np/#person",
        },
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-theme-bg text-theme-text transition-colors duration-300">
        <ThemeProvider>
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
