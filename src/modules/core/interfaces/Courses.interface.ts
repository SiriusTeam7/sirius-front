export interface Course {
  id: number;
  course: number;
  course_title: string;
  is_completed1: boolean;
  is_completed2: boolean;
  is_completed3: boolean;
  moment1: string;
  moment2: string;
  moment3: string;
  student : number;
  created_at: string;
}

export interface CoursesAvailableProps {
  challenges: Course[] | undefined;
}

export interface CourseCardProps {
  course: CourseSummary;
  onClick: (course: Course) => void;
}

export interface CourseCardMomentsProps {
  course: Course;
  onClick: (course: Course) => void;
}

export interface CourseSummary {
  course__id: number;
  course__title: string;
  total_challenges: number;
}
