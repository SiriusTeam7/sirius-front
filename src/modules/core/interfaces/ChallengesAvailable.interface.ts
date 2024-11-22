import { Course } from "./Courses.interface";
import { Challenge } from "./Shared.interface";

export interface ChallengesAvailableProps {
  challenges: Challenge[] | undefined;
  course: Course;
}
