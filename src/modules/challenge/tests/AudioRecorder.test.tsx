import { render, screen, fireEvent } from '@testing-library/react';
import { AudioRecorder } from '../components/AudioRecorder';
import { useAudioRecorder } from '../hooks/useAudioRecorder';

jest.mock('../hooks/useAudioRecorder');

describe('AudioRecorder', () => {
    let startRecording: jest.Mock;
    let stopRecording: jest.Mock;
    let playRecording: jest.Mock;
    let resetRecording: jest.Mock;
    let onAudioRecorded: jest.Mock;

    beforeEach(() => {
        startRecording = jest.fn();
        stopRecording = jest.fn();
        playRecording = jest.fn();
        resetRecording = jest.fn();
        onAudioRecorded = jest.fn();

        (useAudioRecorder as jest.Mock).mockReturnValue({
            isRecording: false,
            startRecording,
            stopRecording,
            audioBlob: null,
            playRecording,
            resetRecording,
        });
    });

    it('renders the initial state correctly', () => {
        render(<AudioRecorder onAudioRecorded={onAudioRecorded} />);

        expect(screen.getByTestId('audio-recorder')).toHaveTextContent('Graba tu respuesta');

        expect(screen.getByRole('button', { name: /Iniciar grabación/i })).toBeInTheDocument();
        expect(screen.queryByRole('button', { name: /Detener Grabación/i })).not.toBeInTheDocument();
        expect(screen.queryByRole('button', { name: /Reproducir Audio/i })).not.toBeInTheDocument();
        expect(screen.queryByRole('button', { name: /Grabar nuevamente/i })).not.toBeInTheDocument();
    });

    it('debe iniciar la grabacion cuando startRecording fue accionado', () => {
        render(<AudioRecorder onAudioRecorded={onAudioRecorded} />);

        const startButton = screen.getByRole('button', { name: /Iniciar grabación/i });
        fireEvent.click(startButton);

        expect(startRecording).toHaveBeenCalled();
    });

    it('debe mostrarse el boton detener grabacion cuando isRecording es true ', () => {
        (useAudioRecorder as jest.Mock).mockReturnValue({
            isRecording: true,
            startRecording,
            stopRecording,
            audioBlob: null,
            playRecording,
            resetRecording,
        });

        render(<AudioRecorder onAudioRecorded={onAudioRecorded} />);

        expect(screen.getByRole('button', { name: /Detener Grabación/i })).toBeInTheDocument();
    });

    it('debe detener la grabación cuando stopRecording is clicked', () => {
        (useAudioRecorder as jest.Mock).mockReturnValue({
            isRecording: true,
            startRecording,
            stopRecording,
            audioBlob: null,
            playRecording,
            resetRecording,
        });

        render(<AudioRecorder onAudioRecorded={onAudioRecorded} />);

        const stopButton = screen.getByRole('button', { name: /Detener Grabación/i });
        fireEvent.click(stopButton);

        expect(stopRecording).toHaveBeenCalled();
    });

    it('debe mostrarse los botones play y reset cuando audioblob ha sido modificado', () => {
        const mockAudioBlob = new Blob(['audio data'], { type: 'audio/wav' });

        (useAudioRecorder as jest.Mock).mockReturnValue({
            isRecording: false,
            startRecording,
            stopRecording,
            audioBlob: mockAudioBlob,
            playRecording,
            resetRecording,
        });

        render(<AudioRecorder onAudioRecorded={onAudioRecorded} />);

        expect(screen.getByRole('button', { name: /Reproducir Audio/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Grabar nuevamente/i })).toBeInTheDocument();

        expect(screen.getByText('Respuesta grabada correctamente!')).toBeInTheDocument();
    });

    it('inicia grabacion cuando playRecording is clicked', () => {
        const mockAudioBlob = new Blob(['audio data'], { type: 'audio/wav' });

        (useAudioRecorder as jest.Mock).mockReturnValue({
            isRecording: false,
            startRecording,
            stopRecording,
            audioBlob: mockAudioBlob,
            playRecording,
            resetRecording,
        });

        render(<AudioRecorder onAudioRecorded={onAudioRecorded} />);

        const playButton = screen.getByRole('button', { name: /Reproducir Audio/i });
        fireEvent.click(playButton);

        expect(playRecording).toHaveBeenCalled();
    });

    it('reinicia la grabacion cuando el boton resetRecording is clicked', () => {
        const mockAudioBlob = new Blob(['audio data'], { type: 'audio/wav' });

        (useAudioRecorder as jest.Mock).mockReturnValue({
            isRecording: false,
            startRecording,
            stopRecording,
            audioBlob: mockAudioBlob,
            playRecording,
            resetRecording,
        });

        render(<AudioRecorder onAudioRecorded={onAudioRecorded} />);

        const resetButton = screen.getByRole('button', { name: /Grabar nuevamente/i });
        fireEvent.click(resetButton);

        expect(resetRecording).toHaveBeenCalled();
    });
});
