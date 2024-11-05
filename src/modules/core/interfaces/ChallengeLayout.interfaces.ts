import { Challenge } from "./Shared.interface";

export interface ChallengeLayoutProps {
  onClose: () => void;
  onSubmit: (type: string, response: string | Blob) => void;
  selectedChallenge: Challenge | null;
}
