type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: HeadersInit;
  body?: BodyInit | null;
  cache?: RequestCache;
};

export async function apiFetch<T>(
  url: string,
  options: FetchOptions = { method: "GET", headers: {} }
): Promise<T> {
  const { method, headers, body, cache } = options;

  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body,
      cache,
    });

    if (!response.ok) {
      const errorMessage = `Error ${response.status}: ${response.statusText}`;
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error("API Fetch error:", error);
    throw error;
  }
}
