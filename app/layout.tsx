import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export const viewport: Viewport = {
  themeColor: "#080A0D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Maniraj Sharma | Full-Stack Web Developer",
  description:
    "Full-stack web developer and creative engineer based in India, building scalable web applications and thoughtful digital products.",
  keywords: [
    "Maniraj Sharma",
    "Full-Stack Web Developer",
    "Frontend Engineer",
    "React",
    "JavaScript",
    "Next.js",
    "Node.js",
    "India Web Developer",
  ],
  authors: [{ name: "Maniraj Sharma", url: "https://manirajsharma.dev" }],
  creator: "Maniraj Sharma",
  metadataBase: new URL("https://manirajsharma.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Maniraj Sharma | Full-Stack Web Developer",
    description:
      "Full-stack web developer and creative engineer building scalable web applications and interfaces.",
    url: "https://manirajsharma.dev",
    siteName: "Maniraj Sharma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maniraj Sharma | Full-Stack Web Developer",
    description:
      "Full-stack web developer and creative engineer building scalable web applications and interfaces.",
    creator: "@manirajsharma",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Maniraj Sharma",
    jobTitle: "Full-Stack Web Developer",
    url: "https://manirajsharma.dev",
    sameAs: [
      "https://github.com/manirajsharma",
      "https://linkedin.com/in/manirajsharma",
    ],
    knowsAbout: [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
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
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
