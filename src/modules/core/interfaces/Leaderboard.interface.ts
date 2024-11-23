export interface TeamMember {
  id: number;
  name: string;
  challenges: number;
  rank?: number;
  color?: string;
}

export interface ReviewSection {
  title: string;
  average: number;
  change?: number;
}

export interface TeamStats {
  timeSpent: string;
  completedChallenges: number;
  averageScore: number;
}

export interface RemainingLeaderboardProps {
  members: TeamMember[];
}

export interface TopThreeLeaderboardProps {
  members: TeamMember[];
}
