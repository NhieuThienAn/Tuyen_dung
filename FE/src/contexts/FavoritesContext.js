import React, { createContext, useState } from "react";

export const FavoritesContext = createContext({
    favorites: [],
    addFavorite: () => { },
    removeFavorite: () => { },
});

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (product) => {
        setFavorites((prev) =>
            prev.some((p) => p.id === product.id) ? prev : [...prev, product]
        );
    };
    const removeFavorite = (id) => {
        setFavorites((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}; 