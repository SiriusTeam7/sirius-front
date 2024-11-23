export interface GetChallengeRequest {
  student_id: number;
  course_id: number;
}

export interface ChallengeResponse {
  challenge: string;
  challenge_id: number;
}

interface GetFeedbackTextRequest {
  student_id: number;
  challenge_id?: number;
  answer_type: string;
  answer_text: string;
  moment? : number;
}

interface GetFeedbackAudioRequest {
  student_id: number;
  challenge_id?: number;
  answer_type: string;
  answer_audio: File;
  moment? : number;
}

export type GetFeedbackRequest =
  | GetFeedbackTextRequest
  | GetFeedbackAudioRequest;

export interface Feedback {
  feedback: string;
  score_average: number;
  class_recommendations: string[];
  challenge_id: number;
}

export interface Rating {
  rating: number;
}

export interface RatingChallengeRequest {
  challenge_id: number;
  rating: number;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

