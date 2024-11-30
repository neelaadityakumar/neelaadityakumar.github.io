export const getURL = (path: string) => {
  const isDev = process.env.NODE_ENV === "development";
  return isDev
    ? `http://localhost:3000${path}`
    : `https://neelaadityakumar.github.io${path}`;
};
