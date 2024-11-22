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
} from "@core/config/apiConfig";
import {
  GetChallengeRequest,
  GetFeedbackRequest,
  Feedback,
  LoginRequest,
  LoginResponse,
} from "@interfaces/Api.interface";
import { Challenge } from "@interfaces/Shared.interface";
import { getRandomIcon } from "@/modules/core/lib/utils";

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
      // Get csrftoken and sessionid to save in cookies
      const { csrftoken, sessionid } = data.user;

      // Set cookies
      document.cookie = `csrftoken=${csrftoken}; path=/;`;
      document.cookie = `sessionid=${sessionid}; path=/;`;
    },
    onError: (error) => {
      console.error("Error en el inicio de sesión:", error);
    },
  });
}

export function useGetChallenge(): UseMutationResult<
  Challenge,
  Error,
  GetChallengeRequest
> {
  return useMutation({
    mutationFn: (data: GetChallengeRequest) =>
      getChallengeApi(data).then((res) => res.data),
    onError: (error) => {
      console.error("Error fetching challenge:", error);
    },
  });
}

export function useGetFeedback(
  setDialogStatus: React.Dispatch<
    React.SetStateAction<"challenge" | "loading" | "feedback" | "error">
  >
): UseMutationResult<Feedback, Error, GetFeedbackRequest> {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: GetFeedbackRequest) =>
      getFeedbackApi(data).then((res) => res.data),
    onError: (error) => {
      setDialogStatus("error");
      console.error("Error fetching feedback:", error);
    },
    onSuccess: (data) => {
      console.log("🚀 ~ data:", data);
      queryClient.setQueryData(["feedback", data], data);
      setDialogStatus("feedback");
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
        icon: challenge.icon || getRandomIcon(),
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
