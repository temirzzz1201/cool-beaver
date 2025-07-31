import { defineNuxtRouteMiddleware, navigateTo } from "#app";
import { useAuth } from "~/composables/useAuth";

export default defineNuxtRouteMiddleware(async () => {
  const { user, loadUser, isAdmin } = useAuth();

  if (!user.value) {
    await loadUser();
  }

  if (!isAdmin()) {
    return navigateTo("/login");
  }
});
