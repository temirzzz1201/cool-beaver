import { defineStore } from "pinia";
import {
  type NavLinks,
  TabLabel,
  type MapPoints,
  type TabsItems,
  type AppFeature,
} from "~/types";

export const useMainStore = defineStore("mainStore", () => {
  const navLinks = ref<NavLinks[]>([
    {
      id: 1,
      title: "Наша работа",
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

  const contactsMapPoints = ref<MapPoints[]>([
    { lat: 45.025661, lng: 39.100718, name: "Пашковка" },
    { lat: 45.034413, lng: 38.971855, name: "Рашпилевская" },
  ]);

  const tabsItems = ref<TabsItems[]>([
    {
      label: TabLabel.Chart,
      icon: "i-lucide-bar-chart",
    },
    {
      label: TabLabel.Create,
      icon: "i-lucide-file-text",
    },
    {
      label: TabLabel.Update,
      icon: "i-lucide-file-text",
    },
  ]);

  const appFeatureServicesArray = ref<AppFeature[]>([
    {
      icon: "i-lucide-hammer",
      title: "Бетонные работы",
      text: "Фундаменты, стяжка полов, опалубка. Быстро и надёжно.",
    },
    {
      icon: "i-lucide-users",
      title: "Подсобные работы",
      text: "Помощь на стройке, погрузка/разгрузка, мелкие поручения.",
    },
    {
      icon: "i-lucide-shovel",
      title: "Земельные работы",
      text: "Траншеи, котлованы, подготовка и благоустройство участков.",
    },
    {
      icon: "i-lucide-building-2",
      title: "Демонтаж сооружений",
      text: "Разборка стен/перегородок. Организуем вывоз мусора.",
    },
    {
      icon: "i-lucide-trash-2",
      title: "Вынос мусора",
      text: "Строительный и бытовой мусор. Быстро и аккуратно.",
    },
    {
      icon: "i-lucide-leaf",
      title: "Уборка территорий",
      text: "Чистота на участках, складах, дворах и прилегающих зонах.",
    },
  ]);

  const appFeatureBenefitsArray = ref<AppFeature[]>([
    {
      icon: "i-lucide-award",
      title: "Опытные рабочие",
      text: "Проверенные специалисты с опытом от 3 лет.",
    },
    {
      icon: "i-lucide-wallet",
      title: "Доступные цены",
      text: "Честные расценки без скрытых платежей.",
    },
    {
      icon: "i-lucide-truck",
      title: "Быстрый выезд",
      text: "Приезжаем в день обращения или на следующий.",
    },
    {
      icon: "i-lucide-check-circle",
      title: "Ответственный подход",
      text: "Соблюдаем сроки и поддерживаем связь на объекте.",
    },
  ]);

  return {
    contactsMapPoints,
    navLinks,
    tabsItems,
    appFeatureServicesArray,
    appFeatureBenefitsArray,
  };
});
