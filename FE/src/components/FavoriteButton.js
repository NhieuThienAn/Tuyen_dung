import React, { useContext } from "react";
import { Button, Tooltip } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { FavoritesContext } from "../contexts/FavoritesContext";
import ToastContext from "./ToastContext";

const FavoriteButton = ({ product }) => {
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
    const toast = useContext(ToastContext);
    const isFav = favorites.some((f) => f.id === product.id);

    const handleClick = (e) => {
        e.stopPropagation();
        if (isFav) {
            removeFavorite(product.id);
            toast.show("Đã xóa khỏi yêu thích");
        } else {
            addFavorite(product);
            toast.show("Đã thêm vào yêu thích");
        }
    };

    return (
        <Tooltip title={isFav ? "Bỏ yêu thích" : "Yêu thích"}>
            <Button
                type="text"
                icon={isFav ? <HeartFilled style={{ color: "#e74c3c" }} /> : <HeartOutlined />}
                onClick={handleClick}
                aria-label={isFav ? "Bỏ yêu thích" : "Yêu thích"}
                style={{ fontSize: 20 }}
            />
        </Tooltip>
    );
};

export default FavoriteButton; 