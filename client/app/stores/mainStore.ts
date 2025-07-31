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
    { lat: 55.751244, lng: 37.618423, name: "Москва" },
    { lat: 59.9342802, lng: 30.3350986, name: "Санкт-Петербург" },
  ]);

  return {
    contactsMapPoints,
    navLinks,
  };
});
