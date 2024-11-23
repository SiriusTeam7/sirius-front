import {
  useMutation,
  useQuery,
  UseMutationResult,
  UseQueryResult,
  useQueryClient,
} from "@tanstack/react-query";
import {
  getChallengeApi,
  getFeedbackApi,
  getAllChallengesApi,
  getLoginApi,
  getValidateCookiesApi,
  getCoursesApi,
  getCoursesMomentsApi,
  getScoreChallengeApi,
  getRatingChallengeApi,
  getCompanyMetricsApi,
} from "@core/config/apiConfig";
import {
  GetChallengeRequest,
  GetFeedbackRequest,
  Feedback,
  LoginRequest,
  LoginResponse,
  RatingChallengeRequest,
  Rating,
} from "@interfaces/Api.interface";
import { Challenge, ChallengeCover } from "@interfaces/Shared.interface";
import { getRandomIcon } from "@/modules/core/lib/utils";
import { Course, CourseSummary } from "../interfaces/Courses.interface";
import { MetricsResponse } from "../interfaces/Leaderboard.interface";

export function useGetLogin(): UseMutationResult<
  LoginResponse,
  Error,
  LoginRequest
> {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: LoginRequest) =>
      getLoginApi(data).then((res) => res.data),

    onSuccess: (data) => {
      queryClient.setQueryData(["user", data], data);
      const { token } = data;
      localStorage.setItem("authToken", token);
    },
    onError: (error) => {
      console.error("Error en el inicio de sesión:", error);
    },
  });
}

export function useGetCourses(): UseQueryResult<CourseSummary[], Error> {
  return useQuery({
    queryKey: ["coursesCompleted"],
    queryFn: async () => {
      const res = await getCoursesApi();
      return res.data;
    },
    throwOnError: (error) => {
      console.error("Error fetching all courses sumary:", error);
      return false;
    },
  });
}

export function useGetScoreChallenge(): UseQueryResult<
  ChallengeCover[],
  Error
> {
  return useQuery({
    queryKey: ["challengesScore"],
    queryFn: async () => {
      const res = await getScoreChallengeApi();
      return res.data;
    },
    throwOnError: (error) => {
      console.error("Error fetching all courses sumary:", error);
      return false;
    },
  });
}

export function useGetMomentsCourses(): UseQueryResult<Course[], Error> {
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await getCoursesMomentsApi();
      return res.data;
    },
    throwOnError: (error) => {
      console.error("Error fetching all courses sumary:", error);
      return false;
    },
  });
}

export function useGetChallenge(): UseMutationResult<
  Challenge,
  Error,
  GetChallengeRequest
> {
  return useMutation({
    mutationFn: async (data: GetChallengeRequest) => {
      const res = await getChallengeApi(data);
      const parsedChallenge: Challenge = JSON.parse(res.data.challenge);
      parsedChallenge.id = res.data.challenge_id;
      return parsedChallenge;
    },
    onSuccess: (data) => {
      console.log("🚀 ~ data:", data);
      //queryClient.setQueryData(["feedback", data], data);
    },
  });
}
//getFeedbackApi
export function useGetFeedback(): UseMutationResult<
  Feedback,
  Error,
  GetFeedbackRequest
> {
  return useMutation({
    mutationFn: async (data: GetFeedbackRequest) => {
      const res = await getFeedbackApi(data);
      const feedbackParsed: Feedback = JSON.parse(res.data.feedback);
      return feedbackParsed;
    },
    onError: (error) => {
      console.error("Error fetching feedback:", error);
    },
  });
}

//getRatingChallengeApi
export function useRatingChallenge(): UseMutationResult<
  Rating,
  Error,
  RatingChallengeRequest
> {
  return useMutation({
    mutationFn: async (data: RatingChallengeRequest) => {
      const res = await getRatingChallengeApi(data);
      return res.data;
    },
    onError: (error) => {
      console.error("Error fetching feedback:", error);
    },
  });
}

export function useGetAllChallenges(): UseQueryResult<Challenge[], Error> {
  return useQuery({
    queryKey: ["challenges"],
    queryFn: async () => {
      const res = await getAllChallengesApi();
      return res.data.map((challenge: Challenge) => ({
        ...challenge,
        icon: getRandomIcon(),
      }));
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes (formerly cacheTime)
    throwOnError: (error) => {
      console.error("Error fetching all challenges:", error);
      return false;
    },
  });
}
export function useValidateCookies(): UseQueryResult<LoginResponse, Error> {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await getValidateCookiesApi();
      return res.data;
    },
    throwOnError: (error) => {
      console.error("Error validating cookies:", error);
      return false;
    },
  });
}

export function useCompanyMetrics(): UseQueryResult<MetricsResponse, Error> {
  return useQuery({
    queryKey: ["companyMetrics"],
    queryFn: async () => {
      const res = await getCompanyMetricsApi();
      return res.data;
    },
    throwOnError: (error) => {
      console.error("Error fetching company metrics:", error);
      return false;
    },
  });
}
