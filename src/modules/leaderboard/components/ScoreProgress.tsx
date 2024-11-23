import { ReviewSection } from "@/modules/core/interfaces/Leaderboard.interface"

const reviews: ReviewSection[] = [
    { title: 'PRIMER REPASO', average: 8.0 },
    { title: 'SEGUNDO REPASO', average: 7.0, change: -12 },
    { title: 'TERCER REPASO', average: 9.0, change: 28 }
]

export function ScoreProgress() {
    return (
        <div className="mt-8 flex items-center p-6">
            {reviews.map((review, index) => (
                <>

                    <div
                        key={review.title}
                        className={`rounded-lg border p-4 self-stretch ${review.change && review.change < 0 ? 'border-red-500' : 'border-green-500'
                            }`}
                    >
                        <div className="mb-2 text-sm text-blue-400">{review.title}</div>
                        <div className="flex justify-between">
                            <div>

                                <div className="text-2xl font-bold text-white">{review.average.toFixed(1)}</div>
                                <div className="text-sm text-gray-400">Promedio</div>
                            </div>
                            {review.change && (
                                <div
                                    className={`mt-2 text-sm ${review.change < 0 ? 'text-red-500' : 'text-green-500'
                                        }`}
                                >
                                    {review.change > 0 ? '+' : ''}
                                    {review.change}%
                                </div>
                            )}
                        </div>
                    </div>
                    {
                        index < reviews.length - 1 && (
                            <hr className="border-red-700 border-t-2 w-5" />
                        )
                    }
                </>
            ))}
        </div>
    )
}

