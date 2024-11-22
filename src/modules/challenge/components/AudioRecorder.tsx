import { Mic, Square, Play, RotateCcw } from 'lucide-react'

import { Button } from "@core/design-system/Button"
import { AudioRecorderProps } from '@interfaces/AudioRecorder.interface'
import { useAudioRecorder } from '../hooks/useAudioRecorder'

export function AudioRecorder({ onAudioRecorded }: AudioRecorderProps) {

    const { isRecording,
        startRecording,
        stopRecording,
        audioBlob,
        playRecording,
        resetRecording } = useAudioRecorder(onAudioRecorded)


    return (
        <div className="flex flex-col items-center space-y-4">
            <p className=" text-textPrimary" data-testid="audio-recorder">Graba tu respuesta</p>
            <div className="flex space-x-2">
                {!isRecording && !audioBlob && (
                    <Button onClick={startRecording} variant="outline" size="icon">
                        <Mic className="h-4 w-4" />
                        <span className="sr-only">Iniciar grabación</span>
                    </Button>
                )}
                {isRecording && (
                    <Button onClick={stopRecording} variant="breathing" size="icon">
                        <Square className="h-4 w-4" />
                        <span className="sr-only">Detener Grabación</span>
                    </Button>
                )}
                {audioBlob && (
                    <>
                        <Button onClick={playRecording} variant="outline" size="icon">
                            <Play className="h-4 w-4" />
                            <span className="sr-only">Reproducir Audio</span>
                        </Button>
                        <Button onClick={resetRecording} variant="outline" size="icon">
                            <RotateCcw className="h-4 w-4" />
                            <span className="sr-only">Grabar nuevamente</span>
                        </Button>
                    </>
                )}
            </div>
            {audioBlob && (
                <p className="text-sm text-[#06E98A]">Respuesta grabada correctamente!</p>
            )}
        </div>
    )
}