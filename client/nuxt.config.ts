import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  pages: true,
  css: ["~/assets/styles/main.css", "leaflet/dist/leaflet.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/image", "nuxt-swiper", "@pinia/nuxt", "@nuxt/ui"],
});
