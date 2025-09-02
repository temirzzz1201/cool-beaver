import { useAuth } from "#imports";

const { token } = useAuth();

export default defineNuxtPlugin(() => {
  const api = $fetch.create({
    baseURL: `${mainUrl}`,

    onRequest({ options }) {
      let headers: Headers;
      if (options.headers instanceof Headers) {
        headers = options.headers;
      } else {
        headers = new Headers(
          options.headers as Record<string, string> | undefined
        );
        options.headers = headers;
      }

      if (token.value) {
        headers.set("Authorization", `Bearer ${token.value}`);
      }
    },

    onResponseError({ response }) {
      if (import.meta.server && response.status === 401) {
        const router = useRouter();
        router.push("/login");
      }
    },
  });

  return { provide: { api } };
});
