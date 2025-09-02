import { defineNuxtRouteMiddleware, navigateTo } from "#app";
import { useAuth } from "~/composables/useAuth";

export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return;

  const { fetchUser, token, user, isAdmin } = useAuth();

  if (token.value && !user.value) {
    await fetchUser();
  }

  if (!user.value) {
    return navigateTo("/login");
  }

  if (!isAdmin() && to.path !== "/profile") {
    return navigateTo("/profile");
  }
});
