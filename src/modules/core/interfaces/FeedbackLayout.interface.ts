interface FeedbackLink {
  title: string;
  url: string;
}
export interface FeedbackLayoutProps {
  challengeTitle: string;
  feedbackText: string;
  followUpLinks: FeedbackLink[];
  onClose: () => void;
  onRetake: () => void;
  onGoHome: () => void;
}
