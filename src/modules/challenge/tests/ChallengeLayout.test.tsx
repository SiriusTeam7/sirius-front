import { render, screen, fireEvent } from '@testing-library/react';
import ChallengeLayout from '../components/ChallengeLayout';
import * as hooks from '../hooks/useStateChallange';


jest.mock('../hooks/useStateChallange');

describe('ChallengeLayout', () => {
    const mockOnClose = jest.fn();
    const mockOnSubmit = jest.fn();
    const mockSelectedChallenge = {
        id: 1,
        icon: 'icon.png',
        course_title: 'Curso de IA para principiantes',
        text: 'Challenge description',
        course_id: 1,
        course_color: '#06E98A',
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('debe renderizar el título y el botón de cierre', () => {
        jest.spyOn(hooks, 'useStateChallenge').mockReturnValue({
            inputMode: 'text',
            setInputMode: jest.fn(),
            handleSubmit: jest.fn(),
            audioBlob: null,
            handleAudioRecorded: jest.fn(),
            response: '',
            setResponse: jest.fn(),
            isSubmitDisabled: true,
        });

        render(<ChallengeLayout onClose={mockOnClose} onSubmit={mockOnSubmit} selectedChallenge={mockSelectedChallenge} />);

        expect(screen.getByText('Challenge')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'X' })).toBeInTheDocument();
    });

    it('debe cambiar el modo de entrada entre texto y audio', () => {
        const setInputMode = jest.fn();

        jest.spyOn(hooks, 'useStateChallenge').mockReturnValue({
            inputMode: 'text',
            setInputMode,
            audioBlob: null,
            handleSubmit: jest.fn(),
            handleAudioRecorded: jest.fn(),
            response: '',
            setResponse: jest.fn(),
            isSubmitDisabled: true,
        });

        render(<ChallengeLayout onClose={mockOnClose} onSubmit={mockOnSubmit} selectedChallenge={mockSelectedChallenge} />);

        fireEvent.click(screen.getByLabelText('Audio input mode'));
        expect(setInputMode).toHaveBeenCalledWith('audio');
    });

    it('debe enviar el formulario con texto', () => {
        const setResponse = jest.fn();

        jest.spyOn(hooks, 'useStateChallenge').mockReturnValue({
            inputMode: 'text',
            setInputMode: jest.fn(),
            audioBlob: null,
            handleSubmit: (e) => {
                e.preventDefault();
                mockOnSubmit('text', 'Respuesta de prueba');
            },
            handleAudioRecorded: jest.fn(),
            response: 'Respuesta de prueba',
            setResponse,
            isSubmitDisabled: false,
        });

        render(<ChallengeLayout onClose={mockOnClose} onSubmit={mockOnSubmit} selectedChallenge={mockSelectedChallenge} />);

        fireEvent.change(screen.getByPlaceholderText('¿Cómo resuelves este problema?'), { target: { value: 'Respuesta de prueba' } });

        fireEvent.submit(screen.getByTestId('challenge-form'));

        expect(mockOnSubmit).toHaveBeenCalledWith('text', 'Respuesta de prueba');
    });

    it('debería renderizar AudioRecorder cuando inputMode es audio', () => {
        jest.spyOn(hooks, 'useStateChallenge').mockReturnValue({
            inputMode: 'audio',
            setInputMode: jest.fn(),
            audioBlob: null,
            handleSubmit: jest.fn(),
            handleAudioRecorded: jest.fn(),
            response: '',
            setResponse: jest.fn(),
            isSubmitDisabled: false,
        });

        render(<ChallengeLayout onClose={mockOnClose} onSubmit={mockOnSubmit} selectedChallenge={mockSelectedChallenge} />);

        expect(screen.getByTestId('audio-recorder')).toBeInTheDocument();
    });


    it('debería actualizar el valor de response correctamente al cambiar el textarea', () => {
        const setResponse = jest.fn();

        jest.spyOn(hooks, 'useStateChallenge').mockReturnValue({
            inputMode: 'text',
            setInputMode: jest.fn(),
            handleSubmit: jest.fn(),
            audioBlob: null,
            handleAudioRecorded: jest.fn(),
            response: '',
            setResponse,
            isSubmitDisabled: false,
        });

        render(<ChallengeLayout onClose={mockOnClose} onSubmit={mockOnSubmit} selectedChallenge={mockSelectedChallenge} />);

        fireEvent.change(screen.getByPlaceholderText('¿Cómo resuelves este problema?'), {
            target: { value: 'Nueva respuesta' },
        });

        expect(setResponse).toHaveBeenCalledWith('Nueva respuesta');
    });


});
