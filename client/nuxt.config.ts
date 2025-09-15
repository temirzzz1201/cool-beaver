import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: false },
  pages: true,
  css: ["~/assets/styles/main.css", "leaflet/dist/leaflet.css"],

  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: "terser",
      terserOptions: { compress: { drop_console: true } },
    },
    resolve: {
      dedupe: ["vue", "swiper", "@vueuse/core"],
    },
  },

  nitro: {
    compressPublicAssets: true,
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
    viewTransition: true,
  },

  imports: {
    autoImport: true,
  },
});
