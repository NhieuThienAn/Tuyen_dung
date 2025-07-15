import React, { useContext } from "react";
import { Card, Button, Typography, Tooltip, Badge, Tag } from "antd";
import { EyeOutlined, HeartFilled, HeartOutlined, ShoppingCartOutlined, UserOutlined, BookOutlined, PercentageOutlined } from "@ant-design/icons";
import FavoriteButton from "./FavoriteButton";
import { CartContext } from "./CartContext";

const { Meta } = Card;

const ProductCard = ({ product, onViewDetail }) => {
    const { addToCart, cart } = useContext(CartContext);
    const inCart = cart.some((p) => p.id === product.id);
    return (
        <Badge.Ribbon text={`${product.price.toLocaleString()} đ`} color="blue">
            <Card
                hoverable
                cover={<img alt={product.name} src={product.image} style={{ objectFit: "contain", height: 140, background: "#f5f8fa" }} />}
                actions={[
                    <Tooltip title="Xem chi tiết" key="detail">
                        <Button type="link" icon={<EyeOutlined />} onClick={onViewDetail} />
                    </Tooltip>,
                    <FavoriteButton product={product} />,
                    <Tooltip title={inCart ? "Đã có trong giỏ" : "Thêm vào giỏ hàng"} key="cart">
                        <Button
                            type="text"
                            icon={<ShoppingCartOutlined style={{ color: inCart ? "#2d6cdf" : undefined }} />}
                            onClick={() => !inCart && addToCart(product)}
                            disabled={inCart}
                            aria-label="Thêm vào giỏ hàng"
                            style={{ fontSize: 20 }}
                        />
                    </Tooltip>
                ]}
                style={{ borderRadius: 12 }}
            >
                <div style={{ marginBottom: 8, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {product.category && <Tag icon={<BookOutlined />} color="blue">{product.category}</Tag>}
                    {product.level && <Tag color="purple">{product.level}</Tag>}
                    {product.instructor && <Tooltip title="Giảng viên"><Tag icon={<UserOutlined />} color="geekblue">{product.instructor}</Tag></Tooltip>}
                    {product.enrolled && <Tag color="green">{product.enrolled} HV</Tag>}
                    {product.discount && <Tag icon={<PercentageOutlined />} color="red">-{Math.round(product.discount * 100)}%</Tag>}
                </div>
                <Meta
                    title={<Typography.Text strong>{product.name}</Typography.Text>}
                    description={<Typography.Paragraph ellipsis={{ rows: 2 }}>{product.shortDesc}</Typography.Paragraph>}
                />
            </Card>
        </Badge.Ribbon>
    );
};

export default ProductCard; 