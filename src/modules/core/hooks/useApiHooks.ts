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
} from "@core/config/apiConfig";
import {
  GetChallengeRequest,
  GetFeedbackRequest,
  Feedback,
} from "@interfaces/Api.interface";
import { Challenge } from "../interfaces/Shared.interface";

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
  setDialogStatus: React.Dispatch<React.SetStateAction<'challenge' | 'loading' | 'feedback' |'error'>>
): UseMutationResult<
  Feedback,
  Error,
  GetFeedbackRequest
> {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: GetFeedbackRequest) =>
      getFeedbackApi(data).then((res) => res.data),
    onError: (error) => {
      setDialogStatus('error')
      console.error("Error fetching feedback:", error);
    },
    onSuccess: (data) => {
      console.log("🚀 ~ data:", data);
      queryClient.setQueryData(["feedback", data], data);
      setDialogStatus('feedback')
    },
  });
}

export function useGetAllChallenges(): UseQueryResult<Challenge[], Error> {
  return useQuery({
    queryKey: ["challenges"],
    queryFn: () => getAllChallengesApi().then((res) => res.data),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes (formerly cacheTime)
    throwOnError: (error) => {
      console.error("Error fetching all challenges:", error);
      return false;
    },
  });
}
