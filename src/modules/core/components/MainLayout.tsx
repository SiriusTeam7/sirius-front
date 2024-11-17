
import ChallengesAvailable from "@/modules/home/components/ChallengesAvailables"

import { ContentContainer } from "./ContentContainer"
import { useGetAllChallenges } from "../hooks/useApiHooks";
import Sidebar from "@/modules/home/components/SideBar";
import ChallengeCard from "@/modules/home/components/CallengeCard";

function MainLayout() {

    // Fetch all challenges and print them, using the useApiHooks
    const { data: challengesData } = useGetAllChallenges();
    return (

          
        <div className="bg-primary min-h-screen w-full mx-auto flex  flex-col sm:flex-row">

            <Sidebar />
            <main className="flex-1 overflow-y-auto mt-10">
                <h1 className="text-2xl font-bold">Estos son los retos que tienes disponibles</h1>
                {challengesData?.map((challenge
                ) => (
                    <ChallengeCard
                        id={challenge.id}
                        key={challenge.id}
                        title={challenge.course_title}
                        icon={challenge.icon}
                        color={challenge.course_color}
                        onClick={() => { }}
                    />
                ))}
            </main>
            {
                /*
                  <Header />
            <TitleBar />
                 <section className="flex justify-center items-center gap-4 mt-4">
                <ContentContainer
                    variant="single-content"
                >
                    <p className="text-sm">Próximo reto en</p>
                    <h2 className="font-semibold">7d</h2>
                </ContentContainer>
                <ContentContainer
                    variant="single-content"
                >
                    <p className="text-sm">Tienes disponible</p>
                    <h2 className="font-semibold">{challengesData?.length || 0} retos</h2>
                </ContentContainer>
            </section>
<ChallengesAvailable challenges={challengesData} />
            <hr className="my-4 border-t border-gray-300" />

                */
            }


        </div>

    )
}

export default MainLayout