import React, { useContext } from "react";
import { Typography, Empty, Button, List } from "antd";
import { CartContext } from "../components/CartContext";

const CartPage = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    return (
        <div className="cart-page">
            <Typography.Title level={2}>Giỏ hàng</Typography.Title>
            {cart.length === 0 ? (
                <Empty description="Giỏ hàng của bạn đang trống." />
            ) : (
                <List
                    itemLayout="horizontal"
                    dataSource={cart}
                    renderItem={item => (
                        <List.Item
                            actions={[
                                <Button danger onClick={() => removeFromCart(item.id)}>Xóa</Button>
                            ]}
                        >
                            <List.Item.Meta
                                avatar={<img src={item.image} alt={item.name} style={{ width: 60, height: 45, objectFit: "contain" }} />}
                                title={item.name}
                                description={item.shortDesc}
                            />
                            <div style={{ color: "#2d6cdf", fontWeight: 600 }}>{item.price.toLocaleString()} đ</div>
                        </List.Item>
                    )}
                />
            )}
        </div>
    );
};

export default CartPage; 