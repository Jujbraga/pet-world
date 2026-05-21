const isProduction = window.location.hostname !== "localhost";

export const apiConfig = {
  baseURL: isProduction ? null : "http://localhost:3333",
  useLocalStorage: isProduction,
};
