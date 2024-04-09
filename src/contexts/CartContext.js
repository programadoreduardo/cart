import { createContext, useState } from "react";

export const CartContext = createContext({})

function CartProvider({ children }) {
    const [cart, setCart] = useState([
        {id:'1', nome: 'Produto1'}
    ]);

    return (
        <CartContext.Provider
            value={{
                cart
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;