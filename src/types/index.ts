export type Category =
  | "doctors"
  | "lawyers"
  | "masters"
  | "nannies"
  | "tutors"
  | "accountants"
  | "other";

export type ListingType =
  | "sell"
  | "buy"
  | "free"
  | "wanted"
  | "rent"
  | "rentout";

export interface Specialist {
  id: string;
  name: string;
  category: Category;
  description: string;
  contact: string;
  photo?: string;
  addedBy: string;
  createdAt: string;
}

export interface Listing {
  id: string;
  type: ListingType;
  title: string;
  description: string;
  price?: number;
  photo?: string;
  contact: string;
  addedBy: string;
  createdAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date?: string;
  address?: string;
  link?: string;
  isPlace: boolean;
  addedBy: string;
  createdAt: string;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  doctors: "Врачи",
  lawyers: "Юристы",
  masters: "Мастера",
  nannies: "Няни",
  tutors: "Репетиторы",
  accountants: "Бухгалтеры",
  other: "Другое",
};

export const CATEGORY_ICONS: Record<Category, string> = {
  doctors: "🩺",
  lawyers: "⚖️",
  masters: "🔧",
  nannies: "👶",
  tutors: "📚",
  accountants: "📊",
  other: "✨",
};

export const LISTING_TYPE_LABELS: Record<ListingType, string> = {
  sell: "Продам",
  buy: "Куплю",
  free: "Отдам",
  wanted: "Ищу",
  rent: "Сниму",
  rentout: "Сдам",
};

export interface BlacklistEntry {
  id: string;
  name: string;
  type: "person" | "employer" | "company" | "landlord" | "other";
  description: string;
  contact?: string;
  proof?: string;
  addedBy: string;
  createdAt: string;
}

export const BLACKLIST_TYPE_LABELS: Record<BlacklistEntry["type"], string> = {
  person: "Мошенник",
  employer: "Работодатель",
  company: "Компания",
  landlord: "Арендодатель",
  other: "Другое",
};

export const BLACKLIST_TYPE_ICONS: Record<BlacklistEntry["type"], string> = {
  person: "👤",
  employer: "💼",
  company: "🏢",
  landlord: "🏠",
  other: "⚠️",
};
