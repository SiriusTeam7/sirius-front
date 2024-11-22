import { useState } from "react"


export function useStateChallenge(onSubmit: (inputMode: 'text' | 'audio' | 'code', response: string | Blob) => void) {
    const [inputMode, setInputMode] = useState<'text' | 'audio' | 'code'>('code')
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
    const [response, setResponse] = useState('')


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (inputMode === 'audio') {
            onSubmit(inputMode, audioBlob!)
        } else {
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