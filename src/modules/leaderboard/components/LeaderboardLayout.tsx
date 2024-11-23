import { ScoreProgress } from "./ScoreProgress"
import { StatsPanel } from "./StatsPanel"
import { TopThreeLeaderboard } from "./TopThreeLeaderboard"
import { RemainingLeaderboard } from "./RemainingLeaderboard"
import Sidebar from "@/modules/home/components/SideBar"
import { useCompanyMetrics } from "@/modules/core/hooks/useApiHooks"

function LeaderboardLayout() {

    const { data: metrics } = useCompanyMetrics()

    if (!metrics) return <div>Loading...</div>

    const { top_students, average_scores_moment1, average_scores_moment2, average_scores_moment3 } = metrics.global;

    const sortedTopStudents = [...top_students].sort((a, b) => b.total_challenges - a.total_challenges);
    const topThree = sortedTopStudents.slice(0, 3);
    const remaining = sortedTopStudents.slice(3);

    // Get useCompanyMetrics hook

    return (
        <div className="bg-primary min-h-screen w-full mx-auto flex flex-col sm:flex-row">
            <Sidebar />
            <section className="w-full" >
                <header className="p-6 mt-14">
                    <h1 className="text-2xl font-bold text-white">Company Name</h1>
                    <h2 className="mb-6 text-xl text-white">Este es el progreso de tu equipo</h2>
                </header>

                <main className="flex sm:flex-row flex-col gap-6 p-6">
                    <div className="flex-1">
                        <div className="rounded-lg flex flex-col items-center">
                            <div className="p-6 sm:w-3/4 w-full">
                                <div className="relative w-full">
                                    {topThree.length > 0 && <TopThreeLeaderboard members={topThree} />}
                                    {remaining.length > 0 && <RemainingLeaderboard members={remaining} />}
                                </div>
                            </div>
                            <ScoreProgress
                                averageScoreMoment1={average_scores_moment1.average_score}
                                averageScoreMoment2={average_scores_moment2.average_score}
                                averageScoreMoment3={average_scores_moment3.average_score}
                            />
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