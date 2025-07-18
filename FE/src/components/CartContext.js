import React, { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prev) =>
            prev.some((p) => p.id === product.id) ? prev : [...prev, product]
        );
    };
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}; 