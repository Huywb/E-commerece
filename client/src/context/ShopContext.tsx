import React, { createContext, ReactNode, useState } from "react";
import { products } from '../assets/assets';

type ShopContextType = {
  products: any[]; // Replace `any` with the actual type of your products
  currency: string;
  delivery_fee: number;
  search:string,
  setSearch: (value:string)=>void;
  showSearch: boolean;
  setShowSearch: (value:boolean)=>void
};

export const ShopContext = createContext<ShopContextType>({
  products: [],
  currency: '$',
  delivery_fee: 10,
  search: '',
  setSearch:()=>{},
  showSearch : true,
  setShowSearch : ()=>{}
});

const ShopContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const currency = '$';
  const delivery_fee = 10;
  const [search,setSearch] = useState('')
  const [showSearch,setShowSearch] = useState(true)

  const value: ShopContextType = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
