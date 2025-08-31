// import tailwindcss from "@tailwindcss/vite";
// export default defineNuxtConfig({
//   compatibilityDate: "2025-07-15",
//   devtools: { enabled: true },
//   pages: true,
//   css: ["~/assets/styles/main.css", "leaflet/dist/leaflet.css"],
//   vite: {
//     plugins: [tailwindcss()],
//   },
//   modules: ["@nuxt/image", "nuxt-swiper", "@pinia/nuxt", "@nuxt/ui"],
// });
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  css: ["~/assets/styles/main.css", "leaflet/dist/leaflet.css"],

  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: "terser",
      terserOptions: { compress: { drop_console: true } },
    },
  },

  modules: ["@nuxt/image", "nuxt-swiper", "@pinia/nuxt", "@nuxt/ui"],

  image: {
    domains: ["localhost", "example.com"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
    presets: {
      article: {
        modifiers: {
          format: "webp",
          quality: 80,
        },
      },
    },
  },

  experimental: {
    renderJsonPayloads: true,
  },
});
