import { defineNuxtRouteMiddleware, navigateTo } from "#app";
import { useAuth } from "~/composables/useAuth";

export default defineNuxtRouteMiddleware(() => {
  const { token, isAdmin } = useAuth();

  if (!token.value || !isAdmin()) {
    return navigateTo("/login");
  }
});
