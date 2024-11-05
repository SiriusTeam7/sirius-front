export interface GetChallengeRequest {
  student_id: number;
  course_id: number;
}

export interface GetFeedbackRequest {
  student_id: number;
  challenge_id: number;
  answer_type: string;
  answer_text: string;
}

export interface Challenge {
  id: number;
  title: string;
  description: string;
  course_id: number;
  // Add other challenge properties as needed
}

export interface Feedback {
  id: number;
  content: string;
  challenge_id: number;
  student_id: number;
  // Add other feedback properties as needed
}
