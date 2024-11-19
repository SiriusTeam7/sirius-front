export interface Course {
    id: number;
    course_id: number;
    course_title: string;
    icon: string;
    challenges_availables: number;
}

export interface CoursesAvailableProps {
    challenges: Course[] | undefined;
}

export interface CourseCardProps {
    course: Course; 
  }