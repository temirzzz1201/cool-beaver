import { ref } from "vue";
import { useRouter } from "vue-router";

const token = ref<string | null>(null);
const user = ref<any>(null);

export function useAuth() {
  const router = useRouter();

  if (import.meta.client && !token.value) {
    token.value = localStorage.getItem("token");
  }

  function redirectAfterAuth() {
    if (user.value?.role === "admin") {
      router.push("/admin");
    } else {
      router.push("/profile");
    }
  }

  async function login(email: string, password: string) {
    try {
      const res = await fetch(`${mainUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Login failed");

      const data = await res.json();
      token.value = data.access_token;
      user.value = data.user;

      if (import.meta.client) {
        localStorage.setItem("token", token.value ?? "");
      }

      redirectAfterAuth();
    } catch (error) {
      throw new Error(`Login error: ${error}`);
    }
  }

  async function register(name: string, email: string, password: string) {
    try {
      const res = await fetch(`${mainUrl}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) throw new Error("Registration failed");

      const data = await res.json();
      token.value = data.access_token;
      user.value = data.user;

      if (import.meta.client) {
        localStorage.setItem("token", token.value ?? "");
      }

      redirectAfterAuth();
    } catch (error) {
      throw new Error(`Register error: ${error}`);
    }
  }

  async function fetchUser() {
    if (!import.meta.client) return;

    const storedToken = localStorage.getItem("token");
    if (!storedToken) return;

    try {
      const res = await fetch(`${mainUrl}/api/auth/me`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      if (!res.ok) throw new Error("Unauthorized");

      const data = await res.json();
      user.value = data;

      token.value = storedToken;
    } catch (error) {
      logout();
      throw new Error(`Fetch user error: ${error}`);
    }
  }

  function logout() {
    token.value = null;
    user.value = null;

    if (import.meta.client) {
      localStorage.removeItem("token");
    }

    router.push("/login");
  }

  function isAdmin() {
    return user.value?.role === "admin";
  }

  async function getResetPasswordLink(email: string) {
    try {
      const response = await fetch(`${mainUrl}/api/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) return;

      const data = await response.json();

      return data;
    } catch (error) {
      throw new Error(`Link getting error: ${error}`);
    }
  }

  async function resetPassword(resetToken: string, password: string) {
    try {
      const response = await fetch(
        `${mainUrl}/api/auth/reset-password/${resetToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        throw new Error("Не удалось сбросить пароль. Попробуйте еще раз.");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      throw new Error(`Reset password error: ${error}`);
    }
  }

  return {
    token,
    user,
    login,
    register,
    logout,
    fetchUser,
    isAdmin,
    getResetPasswordLink,
    resetPassword,
  };
}
