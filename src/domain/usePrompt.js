import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import promptClient from "../data/prompt-client";
import queryKeys from "./query-keys";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export const emptyPrompt = {
  id: 0,
  title: "",
  answers: [],
  answered: false,
};

dayjs.extend(relativeTime);

function formatPrompt(prompt) {
  if (prompt.answers && prompt.answers.length > 0) {
    const formattedAnswers = prompt.answers.map((answer) =>
      dayjs(answer.createdAt).fromNow(true)
    );

    return {
      ...prompt,
      answers: formattedAnswers,
    };
  }

  return prompt;
}

export function usePrompt() {
  const queryClient = useQueryClient();

  // Fetching prompt data
  const {
    data: prompt,
    isLoading,
    isError,
  } = useQuery({
    queryKey: queryKeys.prompt,
    queryFn: promptClient.getActivePrompt,
    initialData: emptyPrompt,
    select: formatPrompt,
  });

  // Handling answer submission
  const mutation = useMutation({
    mutationFn: promptClient.createAnswer,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("prompt");
    },
  });

  const handleSubmit = (answer) => {
    mutation.mutate(answer);
  };

  return {
    prompt,
    isLoading,
    isError,
    handleSubmit,
  };
}
