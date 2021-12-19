export interface IPost {
  title?: string;
  description?: string;
  city?: { slug: string; name: string; isCapital: boolean };
  createdAt?: number;
  creator?: { value: string; label: string };
  images?: string[];
  phone?: string;
  position?: { lng: number; lat: number };
  price?: string;
  shortid?: string;
  status?: { value: string; label: string };
}

export type StatusType = 'empty' | 'success' | 'loading' | 'error';

export interface CategoryType {
  parent_slug?: string | null;
  isFinal?: boolean;
  slug?: string;
  title?: string;
  old_meta_id?: number;
  full_title?: string;
}

export type CurrentCategoryType = CategoryType & {
  children?: CategoryType[];
  tree?: CategoryType[];
};
export interface ICategoryState {
  categories?: CategoryType[];
  currentCategory?: CurrentCategoryType;
}
export interface IFilters {
  currentCategory?: CategoryType | null;
}

export interface FilterItemType {
  name: string;
  value: string;
}
