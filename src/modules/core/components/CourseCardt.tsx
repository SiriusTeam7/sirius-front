import { CourseCardProps } from "@/modules/core/interfaces/Courses.interface";
import { completedIcon, CourseCover , checkAvailable, circleEmpty} from "@/assets/images";

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  return (
    <div
      className="bg-[#1F2127] text-white w-[300px] min-w-[300px] rounded-lg shadow-md p-6 w-80 flex flex-col space-y-4 border border-white/70"
      onClick={() => {
        //onClick();
      }}
    >
      <div className="flex items-center space-x-4">
        <img src={CourseCover} alt={course.course__title} className="h-10 w-10" />
        <h3 className="text-lg font-bold">{course.course__title}</h3>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm">
          {0}/3 Completados
        </span>
        <div className="flex items-center space-x-2">
            {Array(3)
              .fill(null)
              .map((_, index) => (
            
                <>
                <img
                  key={index}
                  src={index < 1 ? completedIcon : circleEmpty}
                  alt={
                    index < 1
                      ? "Completado"
                      : "Pendiente"
                  }
                  className={`h-6 w-6 ${
                    index < 2
                      ? "text-green-500"
                      : "text-gray-500"
                  }`}
                />
                </>
              ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
