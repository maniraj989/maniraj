import { NextResponse } from "next/server";
import fallbackData from "@/data/github-contributions-fallback.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "maniraj989";

  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`,
      {
        next: { revalidate: 3600 },
        headers: {
          "User-Agent": "Portfolio-App",
        },
      }
    );

    if (!res.ok) {
      console.warn(`Upstream GitHub calendar API status: ${res.status}`);
      return NextResponse.json(fallbackData);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching live GitHub calendar:", error);
    return NextResponse.json(fallbackData);
  }
}
