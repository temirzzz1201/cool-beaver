export interface Article {
  id: number;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
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
}

export interface TabsItems {
  label: TabLabel;
  icon: string;
}

export enum TabLabel {
  Chart = "График",
  Create = "Создать статью",
  Update = "Обновить/Удалить статью",
}

export interface MapPoints {
  lat: number;
  lng: number;
  name: string;
}

export interface AppFeature {
  icon: string;
  title: string;
  text: string;
}
