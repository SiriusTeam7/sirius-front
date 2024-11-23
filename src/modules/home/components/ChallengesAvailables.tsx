import { useLocation } from "react-router-dom";
import ChallengeCard from "@/modules/core/components/CallengeCard";
import { getMomentStatus } from "../utils/getMoment";
import { useGetScoreChallenge } from "@/modules/core/hooks/useApiHooks";

const ChallengesAvailable = () => {
  const location = useLocation();
  const { course } = location.state || {};
  const { data: scoresChallenges } = useGetScoreChallenge();

  const space_memories = [
    {
      id: 1,
      course_id: course.course,
      status: getMomentStatus(course.is_completed1, course.moment1),
      score: undefined,
      date: course.moment1,
      student_id: course.student_id,
    },
    {
      id: 2,
      course_id: course.course,
      status: getMomentStatus(course.is_completed2, course.moment2),
      score: undefined,
      date: course.moment2,
      student_id: course.student_id,
    },
    {
      id: 3,
      course_id: course.course,
      status: getMomentStatus(course.is_completed3, course.moment3),
      score: undefined,
      date: course.moment3,
      student_id: course.student_id,
    },
  ];

  const completedChallenges = scoresChallenges;

  return (
    <div className="p-3 sm:p-4">
      <h2 className="title-large text-center sm:text-left">
        Retos de: {course.course_title}
      </h2>
      <p className="text-lg font-bold">{"Así va tu repaso"}</p>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start items-center gap-4 p-3 sm:p-5">
        {space_memories?.map((challenge) => (
          <ChallengeCard challenge={challenge} />
        ))}
      </div>
      <p className="text-lg font-bold">{"Retos completados"}</p>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start items-center gap-4 p-3 sm:p-5">
        {scoresChallenges != null  ? (
          completedChallenges!.map((challenge) => (
            <ChallengeCard challenge={challenge} key={challenge.id} />
          ))
        ) : (
          <div className="text-center p-6">
            <p className="text-lg font-bold text-gray-300">
              ¡Aquí aparecerán los retos que completes!
            </p>
            <p className="text-sm text-gray-400">
              ¿Qué tal empezar tu primer reto? ¡Anímate a mejorar tus
              habilidades y repasar lo aprendido!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengesAvailable;
