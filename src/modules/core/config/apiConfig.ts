import axios, { AxiosInstance, AxiosResponse } from "axios";
import { API_BASE_URL } from "@core/config/hooksConfig";
import {
  Feedback,
  GetChallengeRequest,
  GetFeedbackRequest,
  LoginRequest,
  LoginResponse,
} from "@interfaces/Api.interface";
import { Challenge } from "../interfaces/Shared.interface";

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const prepareCookies = (cookies: string[]): Record<string, string> => {
  const cookieObject: Record<string, string> = {};
  cookies.forEach((cookie) => {
    const [key, value] = cookie.split("=");
    cookieObject[key.trim()] = value.trim();
  });
  return cookieObject;
};
const getCookiesHeader = (): Record<string, string> => {
  const cookies = document.cookie.split(";");
  console.log("🚀 ~ getCookiesHeader ~ cookies:", cookies);
  const preparedCookies = prepareCookies(cookies);
  return {
    Cookie: Object.entries(preparedCookies)
      .map(([key, value]) => `${key}=${value}`)
      .join("; "),
  };
};

const setCookiesFromResponse = (response: AxiosResponse): void => {
  const cookies = response.headers["set-cookie"];
  console.log("🚀 ~ setCookiesFromResponse ~ response:", response);
  document.cookie =
    "csrftoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  if (cookies) {
    cookies.forEach((cookie) => {
      document.cookie = cookie;
    });
  }
};
export const getLoginApi = async (
  data: LoginRequest
): Promise<AxiosResponse<LoginResponse>> => {
  const response = await apiClient.post<LoginResponse>("/login/", data, {
    withCredentials: true,
  });

  const csrfToken = response.headers["X-CSRFToken"];
  console.log(csrfToken);
  setCookiesFromResponse(response);

  return response;
};

export const getChallengeApi = (
  data: GetChallengeRequest
): Promise<AxiosResponse<Challenge>> =>
  apiClient.post<Challenge>("/api/get-challenge/", data, {
    headers: {
      ...getCookiesHeader(),
    },
  });

export const getFeedbackApi = (
  data: GetFeedbackRequest
): Promise<AxiosResponse<Feedback>> => {
  const formData = new FormData();
  formData.append("challenge_id", data.challenge_id.toString());
  formData.append("answer_type", data.answer_type);

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

export const getAllChallengesApi = (): Promise<AxiosResponse<Challenge[]>> =>
  apiClient.get<Challenge[]>("/api/challenges/", {
    headers: {
      ...getCookiesHeader(),
    },
  });

export const getValidateCookiesApi = (): Promise<AxiosResponse<Challenge[]>> =>
  apiClient.get<Challenge[]>("/api/validate-cookies/", {
    withCredentials: true,
  });

export default apiClient;
