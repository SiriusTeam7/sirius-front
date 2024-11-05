import axios, { AxiosInstance, AxiosResponse } from "axios";
import { API_BASE_URL, API_AUTH_TOKEN } from "@core/config/hooksConfig";
import {
  Feedback,
  GetChallengeRequest,
  GetFeedbackRequest,
} from "@interfaces/Api.interface";
import { Challenge } from "../interfaces/Shared.interface";

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token ${API_AUTH_TOKEN}`,
  },
});

export const getChallengeApi = (
  data: GetChallengeRequest
): Promise<AxiosResponse<Challenge>> =>
  apiClient.post<Challenge>("/api/get-challenge/", data);

export const getFeedbackApi = (
  data: GetFeedbackRequest
): Promise<AxiosResponse<Feedback>> =>
  apiClient.post<Feedback>("/api/get-feedback/", data);

export const getAllChallengesApi = (): Promise<AxiosResponse<Challenge[]>> =>
  apiClient.get<Challenge[]>("/api/challenges/");

export default apiClient;
