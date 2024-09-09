import React, { createContext, ReactNode, useEffect, useState } from "react";
import { products } from '../assets/assets';
import { toast } from "react-toastify";

type ShopContextType = {
  products: any[]; // Replace `any` with the actual type of your products
  currency: string;
  delivery_fee: number;
  search:string,
  setSearch: (value:string)=>void;
  showSearch: boolean;
  setShowSearch: (value:boolean)=>void;
  cartItem: {};
  setCartItem: (value:string)=>void;
  addToCart: (itemId: any, size:any)=>void;
  totalCount: number;
  updateQuatity: (itemId: any, size: any, quatity:any)=>void
  getAmount: () => Promise<number>;
};

export const ShopContext = createContext<ShopContextType>({
  products: [],
  currency: '$',
  delivery_fee: 10,
  search: '',
  setSearch:()=>{},
  showSearch : true,
  setShowSearch : ()=>{},
  cartItem: {},
  setCartItem: ()=>{},
  addToCart: ()=>{},
  totalCount: 0,
  updateQuatity: ()=>{},
  getAmount: async () => 0
});

const ShopContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const currency = '$';
  const delivery_fee = 10;
  const [search,setSearch] = useState('')
  const [showSearch,setShowSearch] = useState(true)
  const [cartItem,setCartItem] = useState<any>({})
  const [totalCount,setTotalCount] = useState(0)

  const addToCart = async (itemId: any,size: any)=>{

    if(!size){
      toast.error("Select Product Size")
      return
    }
    let cartData = structuredClone(cartItem)

    if(cartData[itemId]){
        if(cartData[itemId][size]){
            cartData[itemId][size] +=1
        }else{
          cartData[itemId][size] = 1
        }
    }else{
      cartData[itemId] = {}
      cartData[itemId][size] = 1
    }

    setCartItem(cartData)
  }

  const getCartCount = async()=>{
    let Count = 0

    for(let items in cartItem){
      for(let item in cartItem[items]){
        try {
          if(cartItem[items][item]){
            Count += cartItem[items][item]
          }
        } catch (error) {

        }
      }
    }
    setTotalCount(Count)
  }

  const getAmount = async (): Promise<number> => {
    let totalAmount = 0;
  
    for (const items in cartItem) {
      const itemInfo = products.find((product: any) => product._id === items);
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0 && itemInfo) {
            totalAmount += itemInfo.price * cartItem[items][item];
          }
        } catch (error) {
          console.error(error); // Handle the error properly
        }
      }
    }
    
    // Simulate async behavior with a delay and resolve the calculated totalAmount
    return new Promise((resolve) => setTimeout(() => resolve(totalAmount), 1000));
  };


  const updateQuatity =async (itemId:any,size:any,quatity:any)=>{
    let cartData = structuredClone(cartItem)
    cartData[itemId][size] = quatity

    setCartItem(cartData)
  }

  useEffect(()=>{
    getCartCount()
  },[cartItem])

  const value: ShopContextType = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    setCartItem,
    addToCart,
    totalCount,
    updateQuatity,
    getAmount
  };


  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
