import { ref } from "vue";
import { useRouter } from "vue-router";
import { type AuthUser } from "~/types";

const token = ref<string | null>(
  import.meta.client ? localStorage.getItem("token") : null
);
const user = ref<AuthUser | null>(null);

export function useAuth() {
  const router = useRouter();

  async function login(email: string, password: string) {
    const res = await fetch(`${mainUrl}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("Login failed");
    const data = await res.json();

    token.value = data.access_token;
    user.value = data.user;

    if (import.meta.client && token.value) {
      localStorage.setItem("token", token.value);
    }

    router.push("/admin");
  }

  async function register(email: string, password: string) {
    const res = await fetch(`${mainUrl}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("Registration failed");
    const data = await res.json();

    token.value = data.access_token;
    user.value = data.user;

    if (import.meta.client && token.value) {
      localStorage.setItem("token", token.value);
    }

    router.push("/admin");
  }

  function logout() {
    token.value = null;
    user.value = null;
    if (import.meta.client) {
      localStorage.removeItem("token");
    }
    router.push("/login");
  }

  function isAdmin(): boolean {
    return user.value?.role === "admin";
  }

  return {
    token,
    user,
    login,
    register,
    logout,
    isAdmin,
  };
}
