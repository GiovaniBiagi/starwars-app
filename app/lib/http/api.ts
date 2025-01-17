export const api = async <T>(
  path: string,
  options: RequestInit = {}
): Promise<T> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${path}`, {
    ...options,
    headers: {
      ...options.headers,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return data;
};
