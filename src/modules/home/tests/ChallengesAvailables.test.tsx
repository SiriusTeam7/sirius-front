import { render, screen, fireEvent } from '@testing-library/react';
import ChallengesAvailable from '../components/ChallengesAvailables';
import { useChallenges } from '@/modules/home/hooks/useChallenges';

jest.mock('@/modules/home/hooks/useChallenges');

describe('ChallengesAvailable Component', () => {


  const mockChallenges = [
    { id: 1, course_id:1, course_title: 'Challenge 1', icon: 'icon1.png', text:'Curso inteligencia artificial', course_color: 'bg-red-500' },
    { id: 2, course_id:2, course_title: 'Challenge 2', icon: 'icon2.png', text:'Curso inglés práctico', course_color: 'bg-blue-500' },
  ];

  const mockUseChallenges = {
    openDialog: false,
    selectedChallenge: null,
    dialogStatus: 'challenge',
    mutation: { data: { feedback: 'Well done!' } },
    handleCloseDialog: jest.fn(),
    handleChallengeSubmit: jest.fn(),
    handleCardClick: jest.fn(),
    handleRetry: jest.fn(),
  };

  beforeEach(() => {
    (useChallenges as jest.Mock).mockReturnValue(mockUseChallenges);
  });

  it('renders challenges and title', () => {
    render(<ChallengesAvailable challenges={mockChallenges} />);

    expect(screen.getByText('Retos disponibles')).toBeInTheDocument();

    mockChallenges.forEach((challenge) => {
      expect(screen.getByText(challenge.course_title)).toBeInTheDocument();
    });
  });

  it('opens dialog and shows ChallengeLayout when dialogStatus is "challenge"', () => {
    (useChallenges as jest.Mock).mockReturnValue({
      ...mockUseChallenges,
      openDialog: true,
      dialogStatus: 'challenge',
      selectedChallenge: mockChallenges[0],
    });

    render(<ChallengesAvailable challenges={mockChallenges} />);

    expect(screen.getByText(mockChallenges[0].course_title)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Iniciar/i })).toBeInTheDocument(); 
  });

  it('shows Loader with "Estamos procesando tu respuesta..." when dialogStatus is "loading"', () => {
    (useChallenges as jest.Mock).mockReturnValue({
      ...mockUseChallenges,
      openDialog: true,
      dialogStatus: 'loading',
    });

    render(<ChallengesAvailable challenges={mockChallenges} />);

    expect(screen.getByText('Estamos procesando tu respuesta...')).toBeInTheDocument();
  });

  it('shows FeedbackLayout with feedback text when dialogStatus is "feedback"', () => {
    (useChallenges as jest.Mock).mockReturnValue({
      ...mockUseChallenges,
      openDialog: true,
      dialogStatus: 'feedback',
      selectedChallenge: mockChallenges[0],
    });

    render(<ChallengesAvailable challenges={mockChallenges} />);

    expect(screen.getByText('Well done!')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Volver al inicio/i })).toBeInTheDocument(); 
  });

  it('shows error Loader with error message when dialogStatus is "error"', () => {
    (useChallenges as jest.Mock).mockReturnValue({
      ...mockUseChallenges,
      openDialog: true,
      dialogStatus: 'error',
    });

    render(<ChallengesAvailable challenges={mockChallenges} />);

    expect(screen.getByText('Ha ocurrido un error! Por favor intentalo nuevamente')).toBeInTheDocument();
  });

  it('calls handleCloseDialog when close button is clicked in FeedbackLayout', () => {
    (useChallenges as jest.Mock).mockReturnValue({
      ...mockUseChallenges,
      openDialog: true,
      dialogStatus: 'feedback',
    });

    render(<ChallengesAvailable challenges={mockChallenges} />);

    const closeButton = screen.getByRole('button', { name: 'X' });
    fireEvent.click(closeButton);

    expect(mockUseChallenges.handleCloseDialog).toHaveBeenCalled();
  });

  it('calls handleRetry when "Intentar de nuevo" button is clicked in FeedbackLayout', () => {
    (useChallenges as jest.Mock).mockReturnValue({
      ...mockUseChallenges,
      openDialog: true,
      dialogStatus: 'feedback',
    });

    render(<ChallengesAvailable challenges={mockChallenges} />);

    const retryButton = screen.getByRole('button', { name: /Intentar de nuevo/i });
    fireEvent.click(retryButton);

    expect(mockUseChallenges.handleRetry).toHaveBeenCalled();
  });

  it('calls handleCardClick when a ChallengeCard is clicked', () => {
    render(<ChallengesAvailable challenges={mockChallenges} />);

    const challengeCard = screen.getByText(mockChallenges[0].course_title);
    fireEvent.click(challengeCard);

    expect(mockUseChallenges.handleCardClick).toHaveBeenCalledWith(mockChallenges[0].id);
  });
});
