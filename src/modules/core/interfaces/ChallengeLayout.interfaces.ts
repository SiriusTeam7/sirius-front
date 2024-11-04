import { Challenge } from "./ChallengeCard.interface";

export interface ChallengeLayoutProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedChallenge: Challenge | null;
}
