export interface GetChallengeRequest {
  student_id: number;
  course_id: number;
}

interface GetFeedbackTextRequest {
  student_id: number;
  challenge_id: number;
  answer_type: string;
  answer_text: string;
}

interface GetFeedbackAudioRequest {
  student_id: number;
  challenge_id: number;
  answer_type: string;
  answer_audio: File;
}

export type GetFeedbackRequest =
  | GetFeedbackTextRequest
  | GetFeedbackAudioRequest;

export interface Feedback {
  feedback: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

