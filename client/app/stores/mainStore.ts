import { defineStore } from "pinia";
import { type NavLinks } from "~/types";

export const useMainStore = defineStore("mainStore", () => {
  const navLinks = ref<NavLinks[]>([
    {
      id: 1,
      title: "Все статьи",
      link: "/articles",
    },
    {
      id: 2,
      title: "О нас",
      link: "/about",
    },
    {
      id: 3,
      title: "Контакты",
      link: "/contacts",
    },
    {
      id: 4,
      title: "Авторизация",
      link: "/login",
    },
  ]);
  const contactsMapPoints = ref([
    { lat: 45.025661, lng: 39.100718, name: "Пашковка" },
    { lat: 45.034413, lng: 38.971855, name: "Рашпилевская" },
  ]);

  return {
    contactsMapPoints,
    navLinks,
  };
});
