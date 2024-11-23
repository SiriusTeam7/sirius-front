export interface Challenge {
  id: number;
  course_id: number;
  course_title: string;
  text: string;
  icon: string;
  course_color: string;
}

export interface ChallengeCover {
  id: number;
  course_id: number;
  status: number; 
  score?: number;
  date: string; 
}
