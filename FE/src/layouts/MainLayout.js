import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
    HomeOutlined,
    HeartOutlined,
    HistoryOutlined,
    ShoppingCartOutlined
} from "@ant-design/icons";
import { FavoritesProvider } from "../contexts/FavoritesContext";
import { ViewedProvider } from "../contexts/ViewedContext";
import { CartProvider } from "../components/CartContext";

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => {
    const location = useLocation();
    return (
        <CartProvider>
            <FavoritesProvider>
                <ViewedProvider>
                    <Layout style={{ minHeight: "100vh" }}>
                        <Header style={{ background: "#fff", boxShadow: "0 2px 8px #f0f1f2" }}>
                            <div style={{ float: "left", fontWeight: 700, fontSize: 22, color: "#2d6cdf", marginRight: 32 }}>
                                EduAI
                            </div>
                            <Menu
                                mode="horizontal"
                                selectedKeys={[location.pathname]}
                                style={{ background: "#fff", fontWeight: 500 }}
                            >
                                <Menu.Item key="/" icon={<HomeOutlined />}>
                                    <Link to="/">Trang chủ</Link>
                                </Menu.Item>
                                <Menu.Item key="/favorites" icon={<HeartOutlined />}>
                                    <Link to="/favorites">Yêu thích</Link>
                                </Menu.Item>
                                <Menu.Item key="/viewed" icon={<HistoryOutlined />}>
                                    <Link to="/viewed">Lịch sử xem</Link>
                                </Menu.Item>
                                <Menu.Item key="/cart" icon={<ShoppingCartOutlined />}>
                                    <Link to="/cart">Giỏ hàng</Link>
                                </Menu.Item>
                            </Menu>
                        </Header>
                        <Content style={{ padding: "32px 0", background: "#f5f8fa" }}>
                            <div style={{ maxWidth: 1100, margin: "0 auto" }}>{children}</div>
                        </Content>
                        <Footer style={{ textAlign: "center", color: "#888" }}>
                            © 2024 EduAI. All rights reserved.
                        </Footer>
                    </Layout>
                </ViewedProvider>
            </FavoritesProvider>
        </CartProvider>
    );
};

export default MainLayout; 