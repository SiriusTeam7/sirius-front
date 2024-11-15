import { useState, useRef } from "react"


export function useAudioRecorder(onAudioRecorded: (blob: Blob) => void) {

    const [isRecording, setIsRecording] = useState(false)
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const chunksRef = useRef<Blob[]>([])

    const startRecording = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
            mediaRecorderRef.current = new MediaRecorder(stream)
            mediaRecorderRef.current.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    chunksRef.current.push(event.data)
                }
            }
            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: 'audio/mp3' })
                setAudioBlob(blob)
                onAudioRecorded(blob)
                chunksRef.current = []
            }
            mediaRecorderRef.current.start()
            setIsRecording(true)
        } catch (error) {
            console.error('Error accessing microphone:', error)
        }
    }

    const stopRecording = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop()
            setIsRecording(false)
        }
    }

    const playRecording = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (audioBlob) {
            const audio = new Audio(URL.createObjectURL(audioBlob))
            audio.play()
        }
    }

    const resetRecording = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setAudioBlob(null)
        chunksRef.current = []
    }

    return {
        isRecording,
        audioBlob,
        startRecording,
        stopRecording,
        playRecording,
        resetRecording,
    }


}