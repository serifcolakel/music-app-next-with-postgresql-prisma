import fetcher from "./fetcher";

export const auth = (
  mode: "signin" | "signup" | "signout" | "check" | "refresh" | "delete",
  body: {
    email: string;
    password: string;
  }
) => {
  console.log("auth", mode, body);
  return fetcher(`/${mode}`, body);
};

/**
 * 
 * @param mode 
 * @returns 
export const playlists = (mode: "get" | "create" | "update" | "delete") => {
  return fetcher(`/playlists/${mode}`);
};

export const songs = (mode: "get" | "create" | "update" | "delete") => {
  return fetcher(`/songs/${mode}`);
};

export const artists = (mode: "get" | "create" | "update" | "delete") => {
  return fetcher(`/artists/${mode}`);
};
 */
