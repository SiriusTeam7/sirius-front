import { RemainingLeaderboardProps } from "@/modules/core/interfaces/Leaderboard.interface";


export function RemainingLeaderboard({ members = [] }: RemainingLeaderboardProps) {
    return (
        <div className="p-6 bg-[#1E2237] w-full rounded-lg">
            {members.map((member, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between border-t pt-6 first:border-t-0"
                >
                    <span className="text-lg text-white">{member.student__name}</span>
                    <div className="text-right">
                        <span className="text-lg font-bold text-white">{member.total_challenges}</span>
                        <span className="ml-2 text-sm text-gray-400">retos</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
