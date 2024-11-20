import { useState } from "react"


export function useStateChallenge(onSubmit: (inputMode: 'text' | 'audio' | 'code', response: string | Blob) => void) {
    const [inputMode, setInputMode] = useState<'text' | 'audio' | 'code'>('text')
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
    const [response, setResponse] = useState('')


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (inputMode === 'audio') {
            console.log('Submitted audio response:', audioBlob)
            onSubmit(inputMode, audioBlob!)
        } else {
            console.log('Submitted text response:', response)
            onSubmit(inputMode, response)
        }
    }

    const handleAudioRecorded = (blob: Blob) => {
        setAudioBlob(blob)
    }

    const isSubmitDisabled = (inputMode === 'text' && !response) || (inputMode === 'audio' && !audioBlob)


    return {
        inputMode,
        setInputMode,
        handleSubmit,
        audioBlob,
        handleAudioRecorded,
        response,
        setResponse,
        isSubmitDisabled,

    }

}