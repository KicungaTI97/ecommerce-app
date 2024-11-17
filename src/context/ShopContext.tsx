import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface CartItem {
  [size: string]: number;
}

interface CartData {
  [productId: string]: CartItem;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  date: number;
  bestseller: boolean;
}

export interface CartItemType {
  _id: string;
  size: string;
  quantity: number;
}

interface SearchProps {
  search: string;
  setSearch: (search: string) => void;
  showSearch: boolean;
  setShowSearch: (showSearch: boolean) => void;
}

interface NavigateFunction {
  (to: string): void;
}

// Interface principal do contexto
interface ShopContextType extends SearchProps {
  products: ReadonlyArray<Product>;
  currency: string;
  delivery_free: number;
  cartItems: CartData;
  navigate: NavigateFunction;
  addToCart: (itemId: string, size: string) => Promise<void>;
  getCartCount: () => number;
  updateQuantity: (_id: string, size: string, quantity: number) => Promise<void>;
  getCartAmount: () => number;
}

// Hook customizado para gerenciar a funcionalidade de busca
const useSearch = (): SearchProps => {
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  return { search, setSearch, showSearch, setShowSearch };
};

// Valor inicial do contexto, usado como fallback
const initialContextValue: ShopContextType = {
  products: [],
  currency: 'AOA',
  delivery_free: 0,
  cartItems: {},
  search: '',
  showSearch: false,
  setSearch: () => {},
  setShowSearch: () => {},
  addToCart: async () => {},
  getCartCount: () => 0,
  updateQuantity: async () => {},
  getCartAmount: () => 0,
  navigate: () => {},
};

// Criação do contexto
export const ShopContext = createContext<ShopContextType>(initialContextValue);

// Provider Component
export const ShopContextProvider = ({ children }) => {
  const { search, setSearch, setShowSearch, showSearch } = useSearch();
  const [cartItems, setCartItems] = useState<CartData>({});
  const navigate = useNavigate();

  const currency = 'AOA ';
  const delivery_free = 10;

  // Função helper para validar entrada
  const validateCartInput = (itemId: string, size: string): boolean => {
    if (!size) {
      toast.error('Selecione o tamanho do produto');
      return false;
    }
    if (!itemId) {
      toast.error('Produto inválido');
      return false;
    }
    return true;
  };

  // Função melhorada para adicionar ao carrinho
  const addToCart = async (itemId: string, size: string): Promise<void> => {
    try {
      if (!validateCartInput(itemId, size)) return;

      setCartItems(prevCart => {
        const newCart = structuredClone(prevCart);

        if (!newCart[itemId]) {
          newCart[itemId] = {};
        }

        newCart[itemId][size] = (newCart[itemId][size] || 0) + 1;

        return newCart;
      });

      toast.success('Produto adicionado ao carrinho');
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
      toast.error('Erro ao adicionar produto ao carrinho');
    }
  };

  // Função melhorada para contar itens
  const getCartCount = (): number => {
    try {
      return Object.entries(cartItems).reduce((total, [_, sizes]) => {
        return total + Object.values(sizes).reduce((sum, quantity) => sum + quantity, 0);
      }, 0);
    } catch (error) {
      console.error('Erro ao calcular quantidade do carrinho:', error);
      return 0;
    }
  };

  // Função melhorada para atualizar quantidade
  const updateQuantity = async (_id: string, size: string, quantity: number): Promise<void> => {
    try {
      if (!validateCartInput(_id, size)) return;
      if (quantity < 0) {
        toast.error('Quantidade inválida');
        return;
      }

      setCartItems(prevCart => {
        const newCart = structuredClone(prevCart);

        if (!newCart[_id]) {
          newCart[_id] = {};
        }

        if (quantity === 0) {
          delete newCart[_id][size];
          // Remover o produto se não houver mais tamanhos
          if (Object.keys(newCart[_id]).length === 0) {
            delete newCart[_id];
          }
        } else {
          newCart[_id][size] = quantity;
        }

        return newCart;
      });

      toast.success('Carrinho atualizado');
    } catch (error) {
      console.error('Erro ao atualizar quantidade:', error);
      toast.error('Erro ao atualizar carrinho');
    }
  };

  // Obter a quantidade total de itens no carrinho
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      const itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          totalAmount += itemInfo.price * cartItems[items][item];
        } catch (error) {
          console.error('Erro ao calcular total:', error);
        }
      }
    }
    return totalAmount;
  };

  // Debug useEffect
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Cart items updated:', cartItems);
    }
  }, [cartItems]);

  const contextValue: ShopContextType = {
    products: products as Product[],
    currency,
    delivery_free,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};