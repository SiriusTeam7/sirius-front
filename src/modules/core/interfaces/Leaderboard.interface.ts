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
  members: StudentMetrics[];
}

export interface TopThreeLeaderboardProps {
  members: StudentMetrics[];
}

export interface MetricsResponse {
  global: Metric;
  company: Metric;
}

interface Metric {
  top_students: StudentMetrics[];
  average_scores_moment1: {
    average_score: number | null;
  };
  average_scores_moment2: {
    average_score: number | null;
  };
  average_scores_moment3: {
    average_score: number | null;
  };
  total_time: {
    total_time: number | null;
  };
  total_completed_challenges: number;
  average_scores_global: {
    average_score: number;
  };
}

interface StudentMetrics {
  student__name: string;
  total_challenges: number;
}
