import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const token = ref<string | null>(null);
const user = ref<any>(null);

export function useAuth() {
  const router = useRouter();

  async function loadUser() {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      token.value = storedToken;

      try {
        const res = await fetch(`${mainUrl}/api/auth/profile`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });

        if (!res.ok) throw new Error("Failed to load profile");
        const data = await res.json();
        user.value = data;
      } catch (error) {
        logout();
      }
    }
  }

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
    localStorage.removeItem("token");
    router.push("/login");
  }

  function isAdmin() {
    return user.value?.role === "admin";
  }

  // Загружаем пользователя при старте
  onMounted(loadUser);

  return { token, user, login, register, logout, isAdmin, loadUser };
}
