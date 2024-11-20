import { render, screen, fireEvent } from '@testing-library/react';
import FeedbackLayout from '../components/FeedbackLayout';
import { FeedbackLayoutProps } from '@interfaces/FeedbackLayout.interface';

describe('FeedbackLayout ', () => {
    const mockProps: FeedbackLayoutProps = {
        challengeTitle: 'Example Challenge',
        feedbackText: 'This is a sample feedback text.',
        followUpLinks: [
            { title: 'Link 1', url: '/link1' },
            { title: 'Link 2', url: '/link2' },
            { title: 'Link 3', url: '/link3' },
        ],
        onRetake: jest.fn(),
        onGoHome: jest.fn(),
        onClose: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('debe renderizar el titulo y el feedback', () => {
        render(<FeedbackLayout {...mockProps} />);

        expect(screen.getByText('Example Challenge')).toBeInTheDocument();
        expect(screen.getByText('This is a sample feedback text.')).toBeInTheDocument();
    });

    it('renderización de follow-up links', () => {
        render(<FeedbackLayout {...mockProps} />);

        mockProps.followUpLinks.forEach((link, index) => {
            expect(screen.getByText(link.title)).toBeInTheDocument();

            const anchorElement = screen.getAllByRole('link', { name: /Repasar clase/i })[index];
            expect(anchorElement).toHaveAttribute('href', link.url);

            expect(screen.getByText(index + 1)).toBeInTheDocument();

        });
    });

    it('llamado de  onClose cuando el boton de cerrar is clicked', () => {
        render(<FeedbackLayout {...mockProps} />);

        const closeButton = screen.getByRole('button', { name: 'X' });
        fireEvent.click(closeButton);

        expect(mockProps.onClose).toHaveBeenCalled();
    });

    it('llamado de onRetake cuando el boton de "Intentar de nuevo" is clicked', () => {
        render(<FeedbackLayout {...mockProps} />);

        const retakeButton = screen.getByRole('button', { name: /Intentar de nuevo/i });
        fireEvent.click(retakeButton);

        expect(mockProps.onRetake).toHaveBeenCalled();
    });

    it('llamado onGoHome cuando el boton de "Volver al inicio" is clicked', () => {
        render(<FeedbackLayout {...mockProps} />);

        const goHomeButton = screen.getByRole('button', { name: /Volver al inicio/i });
        fireEvent.click(goHomeButton);

        expect(mockProps.onGoHome).toHaveBeenCalled();
    });
});
