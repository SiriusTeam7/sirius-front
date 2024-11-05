import { Challenge } from "./Shared.interface";

export interface ChallengeLayoutProps {
  onClose: () => void;
  onSubmit: () => void;
  selectedChallenge: Challenge | null;
}
