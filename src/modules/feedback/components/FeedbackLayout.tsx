import { ChevronRight } from 'lucide-react'

import { Button } from "@core/design-system/Button"
import { ContentContainer } from "@core/components/ContentContainer"

interface FeedbackLink {
    title: string
    url: string
}

interface FeedbackLayoutProps {
    challengeTitle: string
    feedbackText: string
    followUpLinks: FeedbackLink[]
    onRetake: () => void
    onGoHome: () => void
}

export default function FeedbackLayout({
    challengeTitle,
    feedbackText,
    followUpLinks,
    onRetake,
    onGoHome
}: FeedbackLayoutProps) {
    return (
        <div className="min-h-screen bg-[#13161D] text-white font-['Roboto',sans-serif] p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">Feedback</h1>

                <ContentContainer variant="single-content" className="mb-8">
                    <h2 className="text-xl font-bold mb-2">{challengeTitle}</h2>
                    <p className="text-gray-300">{feedbackText}</p>
                </ContentContainer>

                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Follow-up Resources</h3>
                    {followUpLinks.map((link, index) => (
                        <ContentContainer
                            key={index}
                            variant="img-content"
                            image={<div className="w-8 h-8 rounded-full bg-[#2B9FE6] flex items-center justify-center">{index + 1}</div>}
                            rightIcon
                            className="mb-4"
                        >
                            <div className="flex flex-col">
                                <h4 className="font-medium">{link.title}</h4>
                                <a
                                    href={link.url}
                                    className="text-[#06E98A] hover:underline inline-flex items-center"
                                >
                                    Take me there
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                        </ContentContainer>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button onClick={onRetake} variant="outline" className="flex-1">
                        Retake Challenge
                    </Button>
                    <Button onClick={onGoHome} className="flex-1">
                        Go to Home
                    </Button>
                </div>
            </div>
        </div>
    )
}