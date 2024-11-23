export interface Challenge {
  id: number;
  challenge: string;
  hints: string[];
  is_code_challenge: boolean;
  programming_language: string;
  estimated_solution_time: string;
  use_cases_input: string[];
  use_cases_output: string[];
}

export interface ChallengeCover {
  id: number;
  course_id: number;
  status: number; 
  score?: number;
  date: string; 
  student_id: number;
}
