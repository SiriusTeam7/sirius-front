import Carousel from "@/modules/core/components/Carousel";
import CourseCard from "@/modules/core/components/CourseCardt";
import { Course } from "@/modules/core/interfaces/Courses.interface";
import { useNavigate } from "react-router-dom";

interface CoursesAvailableProps {
  section_title: string;
}

const courses: Course[] = [
  {
    id: 1,
    course_id: 101,
    course_title: "Curso de Java",
    icon: "@/assets/curso-java.png",
    challenges_availables: 1,
  },
  {
    id: 2,
    course_id: 102,
    course_title: "Curso de Python",
    icon: "@/assets/course-english.png",
    challenges_availables: 2,
  },
  {
    id: 3,
    course_id: 102,
    course_title: "Curso de Python",
    icon: "@/assets/course-english.png",
    challenges_availables: 2,
  },
];

const CourseAvailables: React.FC<CoursesAvailableProps> = ({
  section_title,
}) => {
  const navigate = useNavigate();

  const handleCardClick = (course: Course) => {
    navigate("/challenges", { state: { course } });
  };

  return (
    <>
      <p className="text-lg ">{section_title}</p>
      <div className="flex mt-6 mb-10  gap-6">
        <Carousel cardWidth={300}>
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => handleCardClick(course)}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CourseAvailables;
