import useSWR from 'swr';

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useContactForm() {
  const { data, error, mutate } = useSWR('/api/contact', fetcher);

  return {
    data,
    error,
    isLoading: !error && !data,
    mutate,
  };
}