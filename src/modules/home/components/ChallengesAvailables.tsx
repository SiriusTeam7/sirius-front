
//import { useGetAllChallenges } from '@/modules/core/hooks/useApiHooks';
import { useLocation } from 'react-router-dom';
//import { useChallenges } from '../hooks/useChallenges';
import ChallengeCard from '@/modules/core/components/CallengeCard';


const ChallengesAvailable = () => {

    const location = useLocation();
    const { course } = location.state || {}; 
  //  const { data: challengesData } = useGetAllChallenges();

    /**
     * export interface Challenge {
  id: number;
  course_id: number;
  course_title: string;
  text: string;
  icon: string;
  course_color: string;
}

     */

   const challenges = [
    {id: 1, course_id: 101, status: 1, score: 6.7, date: '2024-11-05'},
    {id: 2, course_id: 101, status: 2, score: undefined, date: '2024-11-21'},
    {id: 3, course_id: 101, status: 3, score: undefined, date: '2024-12-05'},
    
   ]

   const completedChallenges = [
    {id: 1, course_id: 101, status: 1, score: 6.7, date: '2024-11-05'},
    {id: 2, course_id: 101, status: 1, score: 7, date: '2024-11-21'},
    {id: 3, course_id: 101, status: 1, score: 8, date: '2024-12-05'},
    
   ]

   /*const { 
        openDialog,
        selectedChallenge,
        dialogStatus,
        mutation,
        handleCloseDialog,
        handleChallengeSubmit,
        handleCardClick,
        handleRetry,
    } = useChallenges(challengesData);*/

    return (
        <div className="p-3 sm:p-4">
            <h2 className="title-large text-center sm:text-left">Retos de: {course.course_title}</h2>
            <p className="text-lg font-bold">{"Así va tu repaso"}</p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start items-center gap-4 p-3 sm:p-5">
                {challenges?.map((challenge) => (
                    <ChallengeCard challenge={challenge}  />
                ))}
            </div>
            <p className="text-lg font-bold">{"Retos completados"}</p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start items-center gap-4 p-3 sm:p-5">
                {completedChallenges?.map((challenge) => (
                    <ChallengeCard challenge={challenge}  />
                ))}
            </div>
        </div>
    );
};

export default ChallengesAvailable;
