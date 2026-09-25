export interface GitHubStats {
  username: string;
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

// Generate realistic 52-week calendar data (matching the pattern in the reference image)
export function generateContributionGrid(weeks = 52): WeekContributions[] {
  const result: WeekContributions[] = [];
  const today = new Date();
  
  // Create reproducible calendar pattern
  for (let w = weeks - 1; w >= 0; w--) {
    const days: DayContribution[] = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(today);
      date.setDate(date.getDate() - (w * 7 + (6 - d)));
      
      // Deterministic pseudo-random generation to replicate the reference image pattern:
      // More intense green on weekdays, peaks in certain months (March, July, August, etc.)
      const dayOfWeek = date.getDay();
      const month = date.getMonth();
      const seed = (w * 13 + d * 7 + month * 5) % 100;
      
      let level: 0 | 1 | 2 | 3 | 4 = 0;
      let count = 0;
      
      // Recreate realistic developer commit rhythm
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        if (seed > 82) {
          level = 4;
          count = 8 + (seed % 6);
        } else if (seed > 55) {
          level = 3;
          count = 5 + (seed % 4);
        } else if (seed > 30) {
          level = 2;
          count = 2 + (seed % 3);
        } else if (seed > 10) {
          level = 1;
          count = 1;
        }
      } else {
        // Weekends
        if (seed > 85) {
          level = 2;
          count = 2;
        } else if (seed > 65) {
          level = 1;
          count = 1;
        }
      }

      days.push({
        date: date.toISOString().split("T")[0],
        count,
        level,
      });
    }
    result.push({ days });
  }

  return result;
}

export async function fetchGitHubUserData(username: string): Promise<GitHubStats | null> {
  if (!username) return null;
  try {
    const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, {
      next: { revalidate: 3600 },
    });
    
    if (!res.ok) {
      console.warn(`GitHub API request failed with status: ${res.status}`);
      return null;
    }
    
    const data = await res.json();
    return {
      username: data.login,
      publicRepos: data.public_repos ?? 0,
      followers: data.followers ?? 0,
      totalContributions: (data.public_repos ?? 0) * 24 + 180, // estimated when GraphQL token is omitted
      profileUrl: data.html_url,
      avatarUrl: data.avatar_url,
      bio: data.bio,
      isLive: true,
    };
  } catch (error) {
    console.error("Error fetching GitHub statistics:", error);
    return null;
  }
}
