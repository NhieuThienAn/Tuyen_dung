import React, { useContext, useState, useEffect } from "react";
import { Typography, Empty } from "antd";
import ProductList from "../components/ProductList";
import { ViewedContext } from "../contexts/ViewedContext";
import Skeleton from "../components/Skeleton";

const ViewedPage = () => {
    const { viewed } = useContext(ViewedContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const t = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(t);
    }, [viewed]);
    return (
        <div className="viewed-page">
            <Typography.Title level={2}>Lịch sử xem</Typography.Title>
            {loading ? (
                <Skeleton count={6} />
            ) : viewed.length === 0 ? (
                <Empty description="Bạn chưa xem sản phẩm nào." />
            ) : (
                <ProductList products={viewed} />
            )}
        </div>
    );
};

export default ViewedPage; 