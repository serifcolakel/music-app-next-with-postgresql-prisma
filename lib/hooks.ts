import useSWR from "swr";
import fetcher from "./fetcher";

export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher);
  return {
    user: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};

export const usePlayList = () => {
  const { data, error } = useSWR("/playlists", fetcher);

  return {
    playlists: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
