import { createContext, useState } from "react";
import Product from "../components/Product";

export const CartContext = createContext({})

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addItemCart(newItem) {
        // Ver se o item já está no carrinho e então adicionamos +1
        // Adicionamos no carrinho
        const indexItem = cart.findIndex(item => item.id === newItem.id)
    
        if (indexItem !== -1) {
            // Se entrou aqui quer dizer que temos que adicionar +1 quantidade pq ele já está na sua lista
            let cartList = [...cart];
    
            cartList[indexItem].amount = cartList[indexItem].amount + 1
    
            cartList[indexItem].total = (cartList[indexItem].amount * cartList[indexItem].price).toFixed(2);
    
            setCart(cartList)
            console.log(cartList) // Corrigido aqui, substituído `data` por `newItem`
            return;
        }
    
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }
    
        setCart(products => [...products, data])
        console.log([...cart, data])
    }


    return (
        <CartContext.Provider
            value={{
                cart,
                addItemCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;