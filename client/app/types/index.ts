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
