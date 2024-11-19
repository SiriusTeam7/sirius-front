import Header from "@/modules/core/design-system/Header"
import TitleBar from "@/modules/core/design-system/TitleBar"
import ChallengesAvailable from "@/modules/home/components/ChallengesAvailables"

import { ContentContainer } from "./ContentContainer"
import { useGetAllChallenges } from "../hooks/useApiHooks";

function MainLayout() {

    // Fetch all challenges and print them, using the useApiHooks
    const { data: challengesData } = useGetAllChallenges();
    return (


        <div className="bg-primary min-h-screen w-full mx-auto p-4 sm:p-6 lg:p-8">
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
            <hr className="my-4 border-t border-gray-300" />



            <ChallengesAvailable challenges={challengesData} />
            {
                /*
                <hr className="my-4 border-t border-gray-300" />
                <CalendarLayout />

                */
            }

        </div>

    )
}

export default MainLayout