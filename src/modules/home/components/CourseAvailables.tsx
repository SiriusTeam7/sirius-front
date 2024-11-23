import Carousel from "@/modules/core/components/Carousel";
import CourseCard from "@/modules/core/components/CourseCardt";
import { Course } from "@/modules/core/interfaces/Courses.interface";
import { useNavigate } from "react-router-dom";
import CourseCardCompleted from "@/modules/core/components/CourseCompleted";
import { useGetCourses, useGetMomentsCourses } from "@/modules/core/hooks/useApiHooks";

interface CoursesAvailableProps {
  section_title: string;
  section_subtitle?: string;
  type: "available" | "completed";
}

const CourseAvailables: React.FC<CoursesAvailableProps> = ({
  section_title,
  section_subtitle,
  type,
}) => {
  const { data: courseCompleted } = useGetCourses();
  const { data: coursesMoments } = useGetMomentsCourses();
  const navigate = useNavigate();

  const handleCardClick = (course: Course) => {
    navigate("/challenges", { state: { course } });
  };

  if (type === "completed") {
    return (
      <>
        <p className="text-lg font-bold">{section_title}</p>
        {section_subtitle && <p className="text ">{section_subtitle}</p>}
        <div className="flex mt-6 mb-10  gap-6">
          <Carousel cardWidth={300}>
            {courseCompleted?.map((courseComp) => (
              <CourseCardCompleted key={courseComp.course__id} course={courseComp} onClick={() => {}} />
            ))}
          </Carousel>
        </div>
      </>
    );
  }

  return (
    <>
      <p className="text-lg font-bold">{section_title}</p>
      {section_subtitle && <p className="text ">{section_subtitle}</p>}
      <div className="flex mt-6 mb-10  gap-6">
        <Carousel cardWidth={300}>
          {coursesMoments?.map((course) => (
            <CourseCard
              key={course.course_id}
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
