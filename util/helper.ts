import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const getURL = (path: string) => {
  const isDev = process.env.NODE_ENV === "development";
  return isDev
    ? `http://localhost:3000${path}`
    : `https://neelaadityakumar.github.io${path}`;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
