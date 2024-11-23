import { TeamMember } from "@/modules/core/interfaces/Leaderboard.interface"
import { ScoreProgress } from "./ScoreProgress"
import { StatsPanel } from "./StatsPanel"
import { TopThreeLeaderboard } from "./TopThreeLeaderboard"
import { RemainingLeaderboard } from "./RemainingLeaderboard"
import Sidebar from "@/modules/home/components/SideBar"

const teamMembers: TeamMember[] = [
    { id: 2, name: 'Sergio', challenges: 1847, rank: 2 },
    { id: 1, name: 'David', challenges: 2430, rank: 1 },
    { id: 3, name: 'Sofia', challenges: 1674, rank: 3 },
    { id: 4, name: 'Sebastian', challenges: 1124 },
    { id: 5, name: 'Jason', challenges: 875 },
    { id: 6, name: 'Natalie', challenges: 774 }
]

function LeaderboardLayout() {

    const topThree = teamMembers.filter((member) => member.rank && member.rank <= 3)
    const remaining = teamMembers.filter((member) => !member.rank)
    return (
        <div className="bg-primary min-h-screen w-full mx-auto flex flex-col sm:flex-row">
            <Sidebar />
            <section className="w-full" >
                <header className="p-6 mt-14">
                    <h1 className="text-2xl font-bold text-white">Company Name</h1>
                    <h2 className="mb-6 text-xl text-white">Este es el progreso de tu equipo</h2>
                </header>

                <main className="flex gap-6 p-6">
                    <div className="flex-1">
                        <div className="rounded-lg  flex flex-col items-center">
                            <div className="p-6 w-3/4">
                                <div className="relative w-full">
                                    <TopThreeLeaderboard members={topThree} />
                                    <RemainingLeaderboard members={remaining} />
                                </div>
                            </div>
                            <ScoreProgress />
                        </div>
                    </div>
                    <aside>
                        <StatsPanel />
                    </aside>
                </main>
            </section>
        </div>
    )
}

export default LeaderboardLayout