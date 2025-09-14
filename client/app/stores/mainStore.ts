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
      title: "Личный кабинет",
      link: "/profile",
    },
    {
      id: 5,
      title: "Авторизация",
      link: "/login",
    },
  ]);

  const contactsMapPoints = ref<MapPoints[]>([
    { lat: 45.025661, lng: 39.100718, name: "Пашковка" },
    { lat: 45.034413, lng: 38.971855, name: "Рашпилевская" },
  ]);

  const adminTabsItems = ref<TabsItems[]>([
    {
      id: 1,
      label: TabLabel.Chart,
      icon: "i-lucide-bar-chart",
    },
    {
      id: 2,
      label: TabLabel.Create,
      icon: "i-lucide-file-text",
    },
    {
      id: 3,
      label: TabLabel.Update,
      icon: "i-lucide-table",
    },
    {
      id: 4,
      label: TabLabel.Users,
      icon: "i-lucide-table",
    },
    {
      id: 5,
      label: TabLabel.Orders,
      icon: "i-lucide-table",
    },
  ]);

  const profileTabsItems = ref<TabsItems[]>([
    { id: 1, label: TabLabel.Profile, icon: "i-lucide-user", slot: "profile" },
    { id: 2, label: TabLabel.MyOrders, icon: "i-lucide-list", slot: "orders" },
    {
      id: 3,
      label: TabLabel.CreateOrder,
      icon: "i-lucide-plus-circle",
      slot: "create",
    },
  ]);

  const appFeatureServicesArray = ref<AppFeature[]>([
    {
      id: 1,
      icon: "i-lucide-hammer",
      title: "Бетонные работы",
      text: "Фундаменты, стяжка полов, опалубка. Быстро и надёжно.",
    },
    {
      id: 2,
      icon: "i-lucide-users",
      title: "Подсобные работы",
      text: "Помощь на стройке, погрузка/разгрузка, мелкие поручения.",
    },
    {
      id: 3,
      icon: "i-lucide-shovel",
      title: "Земельные работы",
      text: "Траншеи, котлованы, подготовка и благоустройство участков.",
    },
    {
      id: 4,
      icon: "i-lucide-building-2",
      title: "Демонтаж сооружений",
      text: "Разборка стен/перегородок. Организуем вывоз мусора.",
    },
    {
      id: 5,
      icon: "i-lucide-trash-2",
      title: "Вынос мусора",
      text: "Строительный и бытовой мусор. Быстро и аккуратно.",
    },
    {
      id: 6,
      icon: "i-lucide-leaf",
      title: "Уборка территорий",
      text: "Чистота на участках, складах, дворах и прилегающих зонах.",
    },
  ]);

  const appFeatureBenefitsArray = ref<AppFeature[]>([
    {
      id: 1,
      icon: "i-lucide-award",
      title: "Опытные рабочие",
      text: "Проверенные специалисты с опытом от 3 лет.",
    },
    {
      id: 2,
      icon: "i-lucide-wallet",
      title: "Доступные цены",
      text: "Честные расценки без скрытых платежей.",
    },
    {
      id: 3,
      icon: "i-lucide-truck",
      title: "Быстрый выезд",
      text: "Приезжаем в день обращения или на следующий.",
    },
    {
      id: 4,
      icon: "i-lucide-check-circle",
      title: "Ответственный подход",
      text: "Соблюдаем сроки и поддерживаем связь на объекте.",
    },
  ]);

  const footerFeatureArray = ref<AppFeature[]>([
    { id: 1, icon: "i-lucide-hammer", text: "Стройка" },
    { id: 2, icon: "i-lucide-building-2", text: "Демонтаж" },
    { id: 3, icon: "i-lucide-leaf", text: "Уборка" },
    { id: 4, icon: "i-lucide-shovel", text: "Земельные работы" },
    { id: 5, icon: "i-lucide-clock", text: "Работаем быстро и честно" },
  ]);

  const contactsFeatureArray = ref<AppFeature[]>([
    {
      id: 1,
      title: "Наш телефон",
      icon: "i-lucide-phone",
      text: "+7 (900) 123-45-67",
    },
    {
      id: 2,
      title: "Электронная почта",
      icon: "i-lucide-mail",
      text: "help@yourdomain.org",
    },
    {
      id: 3,
      title: "Наш адрес",
      icon: "i-lucide-map-pin",
      text: " г. Москва, ул. Добрая, д. 12",
    },
    {
      id: 4,
      title: "Часы работы",
      icon: "i-lucide-clock",
      text: "Пн–Пт: 10:00 – 18:00",
    },
  ]);

  const aboutFeatureServicesArray = ref<AppFeature[]>([
    {
      id: 1,
      title: "Подсобные рабочие",
      text: "Помощь на стройке, уборка, вынос мусора, подача материалов.",
    },
    {
      id: 2,
      title: "Грузчики",
      text: "Погрузка и разгрузка мебели, оборудования, работа на складах.",
    },
    {
      id: 3,
      title: "Разнорабочие на час",
      text: "Мелкие задачи срочно — специалисты готовы выйти в тот же день.",
    },
    {
      id: 4,
      title: "Долгосрочные проекты",
      text: "Бригады разнорабочих для длительных строительных объектов.",
    },
  ]);
  const aboutFeatureReasonsArray = ref<AppFeature[]>([
    {
      id: 1,
      title: "Опытные разнорабочие",
      text: "Только проверенные сотрудники с опытом работы на стройках, складах и при погрузке.",
    },
    {
      id: 2,
      title: "Гибкий подход",
      text: "Предоставляем персонал на любое время — от пары часов до долгосрочных проектов.",
    },
    {
      id: 3,
      title: "Доступные цены",
      text: "Честные расценки без скрытых доплат при высоком качестве работы.",
    },
  ]);

  return {
    contactsMapPoints,
    navLinks,
    adminTabsItems,
    appFeatureServicesArray,
    appFeatureBenefitsArray,
    footerFeatureArray,
    contactsFeatureArray,
    profileTabsItems,
    aboutFeatureServicesArray,
    aboutFeatureReasonsArray,
  };
});
