import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/queryKeys";
import { getTasks } from "@/services/task.services";

export function useGetTasks() {
  return useQuery({
    queryKey: queryKeys.tasks.all,
    queryFn: getTasks,
  });
}