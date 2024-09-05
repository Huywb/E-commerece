import React, { createContext, ReactNode } from "react";
import { products } from '../assets/assets';

type ShopContextType = {
  products: any[]; // Replace `any` with the actual type of your products
  currency: string;
  delivery_fee: number;
};

export const ShopContext = createContext<ShopContextType>({
  products: [],
  currency: '$',
  delivery_fee: 10,
});

const ShopContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const currency = '$';
  const delivery_fee = 10;

  const value: ShopContextType = {
    products,
    currency,
    delivery_fee
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
