import { useState } from 'react'
import { Button } from "@core/design-system/Button"
import { Textarea } from "@core/design-system/TextArea"
import { AudioRecorder } from './AudioRecorder'
import { ToggleGroup, ToggleGroupItem } from '@/modules/core/design-system/Toggle'
import { Mic, Type } from 'lucide-react'

export default function ChallengeLayout() {
    const [response, setResponse] = useState('')
    const [inputMode, setInputMode] = useState<'text' | 'audio'>('text')
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (inputMode === 'audio') {
            console.log('Submitted audio response:', audioBlob)
            // Here will we send the audio and expect the transcribed text response
        } else {
            console.log('Submitted text response:', response)
            // Here will we send the text response and wait for feedback
        }
    }

    const handleAudioRecorded = (blob: Blob) => {
        setAudioBlob(blob)
    }

    return (
        <div className="min-h-screen bg-[#13161D] text-white font-['Roboto',sans-serif] p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">Challenge</h1>
                <div className="bg-[#1E2329] rounded-lg p-6 mb-8">
                    <p className="text-lg md:text-xl mb-4">
                        Describe a situation where you had to solve a complex problem. What was your approach, and what was the outcome?
                    </p>
                    <div className="inline-block bg-[#06E98A] text-[#13161D] text-sm font-bold px-3 py-1 rounded-full">
                        Problem Solving
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex justify-center mb-4">
                        <ToggleGroup type="single" value={inputMode} onValueChange={(value) => value && setInputMode(value as 'text' | 'audio')}>
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
                            <label htmlFor="response" className="block text-sm font-medium mb-2">Your Response</label>
                            <Textarea
                                id="response"
                                value={response}
                                onChange={(e) => setResponse(e.target.value)}
                                placeholder="Type your response here..."
                                className="w-full h-48"
                            />
                        </div>
                    )}
                    <Button type="submit" size="lg">
                        Submit Response
                    </Button>
                </form>
            </div>
        </div>

    )
}