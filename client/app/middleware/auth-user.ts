export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return;

  const { fetchUser, token, user, isAdmin } = useAuth();

  if (token.value && !user.value) {
    try {
      await fetchUser();
    } catch {
      return navigateTo("/login");
    }
  }

  if (!user.value) {
    return navigateTo("/login");
  }

  if (isAdmin() && to.path !== "/admin") {
    return navigateTo("/admin");
  }
});
