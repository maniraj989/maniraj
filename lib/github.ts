import fallbackData from "@/data/github-contributions-fallback.json";

export interface GitHubStats {
  username: string;
  name?: string;
  publicRepos: number;
  followers: number;
  totalContributions: number;
  profileUrl: string;
  isLive: boolean;
  avatarUrl?: string;
  bio?: string;
}

export interface DayContribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface WeekContributions {
  days: DayContribution[];
}

export interface MonthLabel {
  label: string;
  colIndex: number;
}

export interface GitHubCalendarResponse {
  total: {
    [year: string]: number | undefined;
    lastYear?: number;
  };
  contributions: DayContribution[];
}

export function formatContributionsIntoWeeks(contributions: DayContribution[]): WeekContributions[] {
  if (!contributions || contributions.length === 0) {
    return generateContributionGrid(52);
  }

  const weeks: WeekContributions[] = [];
  const chunkSize = 7;
  
  for (let i = 0; i < contributions.length; i += chunkSize) {
    weeks.push({
      days: contributions.slice(i, i + chunkSize),
    });
  }

  return weeks;
}

export function extractMonthLabels(weeks: WeekContributions[]): MonthLabel[] {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const labels: MonthLabel[] = [];
  let lastMonth = -1;

  weeks.forEach((week, wIdx) => {
    // Find the first valid date in this week
    const sampleDay = week.days[0];
    if (sampleDay && sampleDay.date) {
      const d = new Date(sampleDay.date);
      const m = d.getMonth();
      // Only place label if month changed and it has enough space from the last label (at least 2 columns)
      if (m !== lastMonth) {
        labels.push({
          label: monthNames[m],
          colIndex: wIdx,
        });
        lastMonth = m;
      }
    }
  });

  return labels;
}

// Fallback generator if completely offline and data is unavailable
export function generateContributionGrid(weeks = 52): WeekContributions[] {
  if (fallbackData?.contributions && fallbackData.contributions.length > 0) {
    return formatContributionsIntoWeeks(fallbackData.contributions as DayContribution[]);
  }

  const result: WeekContributions[] = [];
  const today = new Date();
  
  for (let w = weeks - 1; w >= 0; w--) {
    const days: DayContribution[] = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(today);
      date.setDate(date.getDate() - (w * 7 + (6 - d)));
      days.push({
        date: date.toISOString().split("T")[0],
        count: 0,
        level: 0,
      });
    }
    result.push({ days });
  }

  return result;
}

export async function fetchGitHubCalendarData(username = "maniraj989"): Promise<{
  weeks: WeekContributions[];
  totalContributions: number;
  monthLabels: MonthLabel[];
}> {
  try {
    // Try our local server API endpoint first (with caching)
    const isClient = typeof window !== "undefined";
    const endpoint = isClient
      ? `/api/github/calendar?username=${encodeURIComponent(username)}`
      : `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`;

    const res = await fetch(endpoint, {
      cache: "no-store",
    });

    if (res.ok) {
      const data: GitHubCalendarResponse = await res.json();
      if (data?.contributions && data.contributions.length > 0) {
        const weeks = formatContributionsIntoWeeks(data.contributions);
        const monthLabels = extractMonthLabels(weeks);
        const total = data.total?.lastYear ?? data.contributions.reduce((acc, c) => acc + (c.count || 0), 0);
        return {
          weeks,
          totalContributions: total,
          monthLabels,
        };
      }
    }
  } catch (error) {
    console.warn("Could not fetch live GitHub calendar from network, loading verified fallback data:", error);
  }

  // Fallback to verified real snapshot
  const fallback = fallbackData as unknown as GitHubCalendarResponse;
  const weeks = formatContributionsIntoWeeks(fallback.contributions);
  const monthLabels = extractMonthLabels(weeks);
  const total = fallback.total?.lastYear ?? fallback.contributions.reduce((acc, c) => acc + (c.count || 0), 0);

  return {
    weeks,
    totalContributions: total,
    monthLabels,
  };
}

export async function fetchGitHubUserData(username = "maniraj989"): Promise<GitHubStats | null> {
  if (!username) return null;
  try {
    const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, {
      headers: {
        "User-Agent": "Portfolio-App",
      },
    });
    
    if (!res.ok) {
      console.warn(`GitHub API request failed with status: ${res.status}`);
      return null;
    }
    
    const data = await res.json();
    return {
      username: data.login,
      name: data.name,
      publicRepos: data.public_repos ?? 0,
      followers: data.followers ?? 0,
      totalContributions: 89, // Replaced dynamically with calendar total in component
      profileUrl: data.html_url || `https://github.com/${username}`,
      avatarUrl: data.avatar_url,
      bio: data.bio,
      isLive: true,
    };
  } catch (error) {
    console.error("Error fetching GitHub statistics:", error);
    return null;
  }
}
