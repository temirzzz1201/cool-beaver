import { defineNuxtRouteMiddleware, navigateTo } from "#app";
import { useAuth } from "~/composables/useAuth";

export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.server) return;

  const { fetchUser, token, user, isAdmin } = useAuth();

  if (token.value && !user.value) {
    await fetchUser();
  }

  if (!user.value) {
    return navigateTo("/login");
  }

  if (isAdmin()) {
    return navigateTo("/admin");
  }
});
