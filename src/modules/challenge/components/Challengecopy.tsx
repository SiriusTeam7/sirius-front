
import { AudioRecorder } from './AudioRecorder'
import { Mic, Type } from 'lucide-react'

import { Button } from "@core/design-system/Button"
import { Textarea } from "@core/design-system/TextArea"
import { ToggleGroup, ToggleGroupItem } from '@core/design-system/Toggle'
import { ChallengeLayoutProps } from '@interfaces/ChallengeLayout.interfaces'
import { ContentContainer } from '@/modules/core/components/ContentContainer'
import { useStateChallenge } from '../hooks/useStateChallange'

export default function ChallengeLayout({ onClose, onSubmit, selectedChallenge }: ChallengeLayoutProps) {

    const {
        inputMode,
        setInputMode,
        handleSubmit,
        handleAudioRecorded,
        response,
        setResponse,
        isSubmitDisabled,
    } = useStateChallenge(onSubmit)

    return (
        <div className="bg-[#13161D] text-white font-['Roboto',sans-serif] p-4 md:p-8 rounded-lg max-h-dvh overflow-y-auto">
            <div className="max-w-4xl mx-auto">
                <div className="w-full flex justify-between mb-4">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6">Challenge</h1>
                    <Button
                        variant="ghost"
                        onClick={onClose}
                    >
                        X
                    </Button>
                </div>
                {selectedChallenge && (
                    <ContentContainer
                        variant="img-content"
                        className='mb-6'
                        image={<img src={selectedChallenge.icon} alt={selectedChallenge.course_title} className="w-16 h-16 rounded-lg mr-4 object-cover" />}
                    >
                        <h3 className="text-base font-semibold text-primary">{selectedChallenge.course_title}</h3>
                        <p className="text-lg mb-4">
                            {selectedChallenge.text}
                        </p>
                        <div className="inline-block bg-[#06E98A] text-[#13161D] text-sm font-bold px-3 py-1 rounded-full">
                            Problem Solving
                        </div>
                    </ContentContainer>
                )}
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="challenge-form">
                    <div className="flex justify-center mb-4">
                        <ToggleGroup type="single" value={inputMode} onValueChange={(value : String) => value && setInputMode(value as 'text' | 'audio')}>
                            <ToggleGroupItem value="text" aria-label="Text input mode">
                                <Type className="h-4 w-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="audio" aria-label="Audio input mode">
                                <Mic className="h-4 w-4" />
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                    {inputMode === 'audio' ? (
                        <AudioRecorder onAudioRecorded={handleAudioRecorded} />
                    ) : (
                        <div>
                            <label htmlFor="response" className="block text-sm font-medium mb-2">Escribe tu respuesta <span className='text-red-500'>*</span></label>
                            <Textarea
                                id="response"
                                value={response}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setResponse(e.target.value)}
                                placeholder="¿Cómo resuelves este problema?"
                                className="w-full h-48"
                            />
                        </div>
                    )}
                    <Button type="submit" size="lg" variant="secondary" disabled={isSubmitDisabled}>
                        Enviar
                    </Button>
                </form>
            </div>
        </div>

    )
}