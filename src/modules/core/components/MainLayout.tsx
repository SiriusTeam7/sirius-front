import Header from "@/modules/core/design-system/Header"
import TitleBar from "@/modules/core/design-system/TitleBar"
import ChallengesAvailable from "@/modules/challengeGrid/ChallengesAvailables"

function MainLayout() {
    return (


        <div className="bg-primary min-h-screen w-full mx-auto  p-4">
            <Header />
            <TitleBar />
            <ChallengesAvailable />
            <div className="w-full h-px bg-gray-300 mt-4"></div>

          { /* <ChallengeLayout />
            {


                /**
                    <section className="mb-6">
                        <h2 className="title-small">Retos de cursos actuales</h2>
                        <button className="btn-secondary mt-2">Ya disponible</button>
                    </section>
        
                    <section>
                        <h2 className="title-small">Retos por escuelas</h2>
                        <button className="btn-secondary mt-2">Ya disponible</button>
                        <p>Ejemplo de P</p>
                    </section>
        
                    */
            }
        </div>

    )
}

export default MainLayout