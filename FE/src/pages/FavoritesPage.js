import React, { useContext } from "react";
import { Typography, Empty } from "antd";
import ProductList from "../components/ProductList";
import { FavoritesContext } from "../contexts/FavoritesContext";

const FavoritesPage = () => {
    const { favorites } = useContext(FavoritesContext);
    return (
        <div className="favorites-page">
            <Typography.Title level={2}>Sản phẩm yêu thích</Typography.Title>
            {favorites.length === 0 ? (
                <Empty description="Bạn chưa có sản phẩm yêu thích nào." />
            ) : (
                <ProductList products={favorites} />
            )}
        </div>
    );
};

export default FavoritesPage; 