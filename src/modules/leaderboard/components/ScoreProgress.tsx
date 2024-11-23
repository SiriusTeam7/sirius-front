import React from 'react';

interface ScoreProgressProps {
    averageScoreMoment1: number | null;
    averageScoreMoment2: number | null;
    averageScoreMoment3: number | null;
}

interface ReviewSection {
    title: string;
    average: number | null;
    change?: number;
}

export function ScoreProgress({
    averageScoreMoment1,
    averageScoreMoment2,
    averageScoreMoment3,
}: ScoreProgressProps) {
    const reviews: ReviewSection[] = [
        { title: 'PRIMER REPASO', average: averageScoreMoment1 },
        { title: 'SEGUNDO REPASO', average: averageScoreMoment2 },
        { title: 'TERCER REPASO', average: averageScoreMoment3 },
    ];

    // Calculate changes
    reviews.forEach((review, index) => {
        if (index > 0 && reviews[index - 1].average !== null && review.average !== null) {
            review.change = ((review.average! - reviews[index - 1].average!) / reviews[index - 1].average!) * 100;
        }
    });

    return (
        <div className="mt-8 flex items-center sm:flex-row flex-col p-6">
            {reviews.map((review, index) => (
                <React.Fragment key={review.title}>
                    {index !== 0 && (
                        <hr
                            className={`${review.change && review.change < 0 ? 'border-red-700' : 'border-green-500'
                                } sm:border-t-2 border-t-0 sm:border-l-0 border-l-2 sm:w-5 sm:h-1 w-1 h-5`}
                        />
                    )}
                    <div
                        className={`rounded-lg border p-4 self-stretch ${review.change && review.change < 0 ? 'border-red-500' : 'border-green-500'
                            }`}
                    >
                        <div className="mb-2 text-sm text-blue-400">{review.title}</div>
                        <div className="flex justify-between">
                            <div>
                                <div className="text-2xl font-bold text-white">
                                    {review.average !== null ? review.average.toFixed(1) : 'Sin Data'}
                                </div>
                                <div className="text-sm text-gray-400">Promedio</div>
                            </div>
                            {review.change !== undefined && (
                                <div
                                    className={`mt-2 text-sm ${review.change < 0 ? 'text-red-500' : 'text-green-500'
                                        }`}
                                >
                                    {review.change > 0 ? '+' : ''}
                                    {review.change.toFixed(1)}%
                                </div>
                            )}
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}