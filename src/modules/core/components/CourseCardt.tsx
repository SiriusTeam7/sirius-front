import { CourseCardMomentsProps } from "@/modules/core/interfaces/Courses.interface";
import { completedIcon, CourseCover, circleEmpty, Disponible } from "@/assets/images";


const CourseCard: React.FC<CourseCardMomentsProps> = ({ course, onClick }) => {
  const moments = [
    { isCompleted: course.is_completed1, momentDate: course.moment1 },
    { isCompleted: course.is_completed2, momentDate: course.moment2 },
    { isCompleted: course.is_completed3, momentDate: course.moment3 },
  ];
  const completedCount = moments.filter((moment) => moment.isCompleted).length;

  const getMomentStatus = (isCompleted: boolean, momentDate: string) => {
    const today = new Date();
    const moment = new Date(momentDate);

    if (isCompleted) {
      return {
        icon: completedIcon,
        alt: "Completado",
        color: "text-green-500",
      };
    }

    if (moment <= today) {
      return {
        icon: Disponible,
        alt: "Disponible",
        color: "text-yellow-500",
      };
    }

    return { icon: circleEmpty, alt: "Pendiente", color: "text-gray-500" };
  };

  return (
    <div
      className="bg-[#1F2127] text-white w-[300px] min-w-[300px] rounded-lg shadow-md p-6 w-80 flex flex-col space-y-4 border border-white/70"
      onClick={() => {
        onClick(course);
      }}
    >
      <div className="flex items-center space-x-4">
        <img
          src={CourseCover}
          alt={course.course_title}
          className="h-10 w-10"
        />
        <h3 className="text-lg font-bold">{course.course_title}</h3>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm">{completedCount}/3 Completados</span>
        <div className="flex items-center space-x-2">
          {moments.map((moment, index) => {
            const { icon, alt, color } = getMomentStatus(
              moment.isCompleted,
              moment.momentDate
            );
            return (
              <img
                key={index}
                src={icon}
                alt={alt}
                className={`h-6 w-6 ${color}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
