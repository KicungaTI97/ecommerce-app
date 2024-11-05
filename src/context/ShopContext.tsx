import { createContext } from "react";
import { products } from "../assets/assets"

interface Product {
    _id: string,
    name: string,
    description: string,
    price: number
    image: string,
    category: string,
    subCategory: string,
    sizes: [],
    date: number,
    bestseller: boolean,
  }
  
  interface ShopContextType {
    products: Product[];
    currency: string;
    delivery_free: number;
  }

export const  ShopContext = createContext({} as ShopContextType)

export const ShopContextProvider = ({children}) =>{

    const currency = 'AOA';
    const delivery_free = 10;


    const value = {
        products, 
        currency, 
        delivery_free
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}