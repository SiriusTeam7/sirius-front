
import { useGetAllChallenges } from '@/modules/core/hooks/useApiHooks';
import { useLocation } from 'react-router-dom';


const ChallengesAvailable = () => {

    const location = useLocation();
    const { course } = location.state || {}; 
  //  const { data: challengesData } = useGetAllChallenges();

   /* const { 
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
            <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start items-center gap-4 p-3 sm:p-5">
                {/*challenges?.map((challenge) => (
                    <ChallengeCard
                        id={challenge.id}
                        key={challenge.id}
                        title={challenge.course_title}
                        icon={challenge.icon}
                        color={challenge.course_color}
                        onClick={handleCardClick}
                    />
                ))*/}
            </div>
            {/*openDialog && (
                <div className="fixed inset-0 flex items-center mt-10 justify-center bg-black bg-opacity-50 z-50">
                    <div className="modal-container rounded-lg shadow-lg w-full p-3 max-w-md max-h-[90vh] overflow-y-auto">
                        {dialogStatus === 'challenge' && (<ChallengeLayout onClose={handleCloseDialog} selectedChallenge={selectedChallenge} onSubmit={handleChallengeSubmit} />)}
                        {dialogStatus === 'loading' && (<Loader text="Estamos procesando tu respuesta..." image={siriusImage} />)}
                        {dialogStatus === 'feedback' && (<FeedbackLayout
                            onClose={handleCloseDialog}
                            challengeTitle={selectedChallenge?.course_title || ''}
                            feedbackText={mutation.data?.feedback || ''}
                            followUpLinks={[
                                { title: "Link 1", url: "#" },
                                { title: "Link 2", url: "#" },
                                { title: "Link 3", url: "#" },
                            ]}
                            onRetake={handleRetry}
                            onGoHome={handleCloseDialog}
                        />)}
                        {dialogStatus === 'error' && (<Loader text="Ha ocurrido un error! Por favor intentalo nuevamente" image={siriusImage} />)}

                    </div>
                </div>
            )*/}
        </div>
    );
};

export default ChallengesAvailable;
