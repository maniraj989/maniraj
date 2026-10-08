import { ImageResponse } from "next/og";

export const alt = "Maniraj Sharma — Full-Stack Developer & Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#080A0D",
          padding: "70px 80px",
          fontFamily: "sans-serif",
          color: "#F4F5F7",
          border: "12px solid #161B22",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "monospace",
              fontSize: "18px",
              letterSpacing: "0.2em",
              color: "#F97316",
              textTransform: "uppercase",
            }}
          >
            <span>[ MANIRAJ SHARMA ]</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "6px",
              backgroundColor: "#101318",
              border: "1px solid #252A33",
              fontFamily: "monospace",
              fontSize: "14px",
              color: "#10B981",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#10B981",
              }}
            />
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "82px",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <span>Maniraj Sharma</span>
            <span style={{ color: "#F97316", marginLeft: "4px" }}>.</span>
          </div>

          <div
            style={{
              fontSize: "20px",
              fontFamily: "monospace",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#9298A3",
              marginTop: "20px",
            }}
          >
            FULL-STACK DEVELOPER · SOFTWARE ENGINEERING · INDIA
          </div>

          <div
            style={{
              fontSize: "24px",
              color: "#9298A3",
              marginTop: "16px",
              maxWidth: "880px",
              lineHeight: 1.4,
            }}
          >
            Building practical web applications, business systems, and digital products with clean architecture.
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #252A33",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            {["React", "Next.js", "TypeScript", "Node.js", "Spring Boot", "PostgreSQL"].map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "6px 14px",
                  backgroundColor: "#161B22",
                  border: "1px solid #252A33",
                  borderRadius: "6px",
                  fontFamily: "monospace",
                  fontSize: "14px",
                  color: "#F4F5F7",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div
            style={{
              fontFamily: "monospace",
              fontSize: "16px",
              color: "#9298A3",
            }}
          >
            manirajsharma.com.np
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
