import type { FetchOptions, FetchRequest } from "ofetch";

declare global {
  const $api: <T = any>(
    input: string | FetchRequest,
    init?: FetchOptions<T>
  ) => Promise<T>;
}

export {};
