import axios, { AxiosInstance, AxiosResponse } from "axios";
import { API_BASE_URL } from "@core/config/hooksConfig";
import {
  ChallengeResponse,
  Feedback,
  GetChallengeRequest,
  GetFeedbackRequest,
  LoginRequest,
  LoginResponse,
  Rating,
  RatingChallengeRequest,
} from "@interfaces/Api.interface";
import { Challenge } from "../interfaces/Shared.interface";
import { Course, CourseSummary } from "../interfaces/Courses.interface";
import { MetricsResponse } from "../interfaces/Leaderboard.interface";

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token && config.headers) {
      config.headers.Authorization = `Token ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getLoginApi = async (
  data: LoginRequest
): Promise<AxiosResponse<LoginResponse>> => {
  const response = await apiClient.post<LoginResponse>("/login/", data);

  return response;
};

export const getCoursesApi = (): Promise<AxiosResponse<CourseSummary[]>> =>
  apiClient.get<CourseSummary[]>("/api/courses-summary", {
    withCredentials: true,
  });

export const getCoursesMomentsApi = (): Promise<AxiosResponse<Course[]>> =>
  apiClient.get<Course[]>("/api/spaced_repetition", {
    withCredentials: true,
  });

export const getScoreChallengeApi = (): Promise<
  AxiosResponse<CourseSummary[]>
> =>
  apiClient.get<CourseSummary[]>("/api/challenge_scores/8", {
    withCredentials: true,
  });

export const getChallengeApi = (
  data: GetChallengeRequest
): Promise<AxiosResponse<ChallengeResponse>> =>
  apiClient.post<ChallengeResponse>("/api/get-challenge/", data, {
    withCredentials: true,
  });

export const getFeedbackApi = (
  data: GetFeedbackRequest
): Promise<AxiosResponse<Feedback>> => {
  const formData = new FormData();
  formData.append("challenge_id", data.challenge_id!.toString());
  formData.append("answer_type", data.answer_type);
  formData.append("moment", data.moment!.toString());

  if ("answer_text" in data) {
    formData.append("answer_text", data.answer_text);
  } else if ("answer_audio" in data) {
    formData.append("answer_audio", data.answer_audio);
  }
  return apiClient.post<Feedback>("/api/get-feedback/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  });
};

export const getRatingChallengeApi = (
  data: RatingChallengeRequest
): Promise<AxiosResponse<Rating>> => {
  const formData = new FormData();
  formData.append("challenge_id", data.challenge_id.toString());
  formData.append("rating", data.rating.toString());

  return apiClient.post<Rating>("/api/register_rating/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  });
};

export const getAllChallengesApi = (): Promise<AxiosResponse<Challenge[]>> =>
  apiClient.get<Challenge[]>("/api/challenges/", {
    withCredentials: true,
  });

export const getValidateCookiesApi = (): Promise<AxiosResponse<Challenge[]>> =>
  apiClient.get<Challenge[]>("/api/validate-cookies/", {
    withCredentials: true,
  });

export const getCompanyMetricsApi = (): Promise<
  AxiosResponse<MetricsResponse>
> =>
  apiClient.get<MetricsResponse>("/api/company-metrics/", {
    withCredentials: true,
  });

export const getRegisterUserApi = async (data: LoginRequest) => {
  const response = await apiClient.post<LoginResponse>(
    "/api/user-register/",
    data
  );

  return response;
};

export default apiClient;
