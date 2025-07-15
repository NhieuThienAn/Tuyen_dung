import React, { createContext, useState } from "react";

export const ViewedContext = createContext({
    viewed: [],
    addViewed: () => { },
});

export const ViewedProvider = ({ children }) => {
    const [viewed, setViewed] = useState([]);

    const addViewed = (product) => {
        setViewed((prev) => {
            if (prev.some((p) => p.id === product.id)) return prev;
            return [product, ...prev].slice(0, 20);
        });
    };

    return (
        <ViewedContext.Provider value={{ viewed, addViewed }}>
            {children}
        </ViewedContext.Provider>
    );
}; 