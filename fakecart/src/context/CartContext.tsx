import { Children, createContext, useContext, useState } from "react";
import type { CartItem, Product } from "../types";
import { updateCartItems } from "../utils/cartUtils";

// 1. Define the shape of our context
interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

// 2. Create the actual context with an initial undefined value
const CartContext = createContext<CartContextType | undefined>(undefined);
// 3. CartProvider wraps the app and gives children access to cart state.
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        const updatedItems = updateCartItems(cartItems, product)
        setCartItems(updatedItems);
    }
    return (
        <CartContext.Provider value={{ cartItems, addToCart,setCartItems }}>
            {children}
        </CartContext.Provider>
    );

};


// 4. Custom hook to safely access the CartContext.
// This makes consuming code cleaner and avoids repeating useContext everywhere.

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);

    if (!context){
        throw new Error('useCart must be used within a cart provider');
    }
    return context;

}
