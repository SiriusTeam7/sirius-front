import { CourseCardProps } from "@/modules/core/interfaces/Courses.interface";
import { completedIcon, Course1 } from "@/assets/images";

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  return (
    <div
      className="bg-[#1F2127] text-white w-[300px] min-w-[300px] rounded-lg shadow-md p-6 w-80 flex flex-col space-y-4 border border-white/70"
      onClick={() => {
        onClick(course);
      }}
    >
      <div className="flex items-center space-x-4">
        <img src={Course1} alt={course.course_title} className="h-10 w-10" />
        <h3 className="text-lg font-bold">{course.course_title}</h3>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm">
          {course.challenges_availables}/3 Completados
        </span>
        <div className="flex items-center space-x-2">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <img
                key={index}
                src={index < course.challenges_availables ? completedIcon : ""}
                alt={
                  index < course.challenges_availables
                    ? "Completado"
                    : "Pendiente"
                }
                className={`h-6 w-6 ${
                  index < course.challenges_availables
                    ? "text-green-500"
                    : "text-gray-500"
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
