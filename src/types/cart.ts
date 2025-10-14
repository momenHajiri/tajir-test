import { Product } from "./products";
import { UserInfo } from "./user";

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CartContextType = {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  userInfo: UserInfo;
  setUserInfo: (info: UserInfo) => void;
};
