export interface ArticleImage {
  id: number;
  articleId: number;
  path: string;
}

export interface Article {
  id: number;
  images: ArticleImage[];
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Order {
  createdAt: string;
  description: string;
  id: number;
  phone: string;
  status: string;
  title: string;
  updatedAt: string;
  user: Users;
}

export interface NavLinks {
  id: number;
  title: string;
  link: string;
}

export interface AuthUser {
  id: number;
  email: string;
  role: "user" | "admin";
}

export interface Users {
  id: number;
  name: string;
  email: string;
  password?: string;
  creationDate: string;
  phone: string;
  role?: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: string;
}

export interface TabsItems {
  id: number;
  label: TabLabel;
  icon: string;
  slot?: string;
}

export enum TabLabel {
  Chart = "График зарег. пользователей",
  Create = "Создать статью",
  Update = "Все статьи",
  Users = "Все пользователи",
  Profile = "Профиль",
  MyOrders = "Мои заказы",
  CreateOrder = "Создать заказ",
  Orders = "Все заказы",
}

export interface MapPoints {
  lat: number;
  lng: number;
  name: string;
}

export interface AppFeature {
  id: number;
  icon: string;
  title?: string;
  text: string;
}
