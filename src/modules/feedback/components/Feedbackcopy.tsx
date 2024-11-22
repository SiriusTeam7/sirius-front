import { ChevronRight } from 'lucide-react'

import { Button } from "@core/design-system/Button"
import { ContentContainer } from "@core/components/ContentContainer"
import { FeedbackLayoutProps } from '@interfaces/FeedbackLayout.interface'

export default function FeedbackLayout({
    challengeTitle,
    feedbackText,
    followUpLinks,
    onRetake,
    onGoHome,
    onClose
}: FeedbackLayoutProps) {
    return (
        <div className="bg-[#13161D] text-white font-['Roboto',sans-serif] p-4 md:p-8 rounded-lg">
            <div className="max-w-4xl mx-auto">
                <div className="w-full flex justify-between mb-4">
                    <h1 className="text-1xl md:text-3xl lg:text-4xl font-black mb-6">Feedback</h1>
                    <Button
                        variant="ghost"
                        onClick={onClose}
                    >
                        X
                    </Button>
                </div>
                <ContentContainer
                    variant="single-content"
                    className='mb-6'
                >
                    <h3 className="text-base font-semibold text-primary">{challengeTitle}</h3>
                    <p className="text-lg mb-4">
                        {feedbackText}
                    </p>
                </ContentContainer>

                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Refuerza con estas clases</h3>
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
                                    Repasar clase
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                        </ContentContainer>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button onClick={onRetake} variant="outline" className="flex-1">
                        Intentar de nuevo
                    </Button>
                    <Button onClick={onGoHome} className="flex-1">
                        Volver al inicio
                    </Button>
                </div>
            </div>
        </div>
    )
}