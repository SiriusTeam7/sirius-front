import { TopThreeLeaderboardProps } from "@/modules/core/interfaces/Leaderboard.interface"

export function TopThreeLeaderboard({ members = [] }: TopThreeLeaderboardProps) {

    return (
        <div className="flex h-[250px] w-full items-end justify-center">
            {members.map((member, index) => (
                <div
                    key={index}
                    className={`flex flex-col items-center justify-start rounded-t-lg ${getBackgroundClass(index + 1)} ${getWidthClass(index + 1)} first:order-2 last:order-3`}
                    style={{ height: getHeight(index + 1) }}
                >
                    <div className="flex flex-col items-center justify-end h-full p-4">
                        <span className={`mb-2 rounded-full px-4 py-2 text-xs ${getRankColorClass(index + 1)}`}>
                            {index + 1}
                        </span>
                        <span className="mb-2 text-lg font-medium text-white">{member.student__name}</span>
                        <span className={`text-2xl font-bold ${getColorClasses(index + 1)}`}>
                            {member.total_challenges}
                        </span>
                        <span className={`text-sm ${getColorClasses(index + 1)}`}>retos</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

function getBackgroundClass(rank?: number): string {
    return rank === 1 ? 'bg-[#252A40]' : 'bg-[#1E2237]'
}

function getWidthClass(rank?: number): string {
    return rank === 1 ? 'w-1/3' : 'w-1/4'
}

function getHeight(rank?: number): string {
    return rank === 1 ? '100%' : '80%'
}

function getColorClasses(rank?: number): string {
    switch (rank) {
        case 1:
            return 'text-emerald-400'
        case 2:
            return 'text-blue-400'
        case 3:
            return 'text-cyan-400'
        default:
            return 'text-white'
    }
}

function getRankColorClass(rank?: number): string {
    switch (rank) {
        case 1:
            return 'bg-emerald-600 text-white'
        case 2:
            return 'bg-blue-600 text-white'
        case 3:
            return 'bg-cyan-600 text-white'
        default:
            return 'bg-gray-600 text-white'
    }
}

