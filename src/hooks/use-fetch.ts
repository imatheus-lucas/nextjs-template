import useSWR from "swr";

export function useFetch<data = any, error = any>(url: string) {
  const { data, error, isLoading, mutate } = useSWR<data, error>(
    url,
    async (url: string) => {
      const response = await fetch(url);
      const data = await response.json();

      return data;
    }
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}
