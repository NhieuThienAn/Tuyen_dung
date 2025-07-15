import React, { useState } from "react";
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";

const ProductList = ({ products, onView }) => {
    const [selected, setSelected] = useState(null);

    const handleViewDetail = (product) => {
        setSelected(product);
        if (onView) onView(product);
    };

    return (
        <>
            <Row gutter={[24, 24]}>
                {products.map((p) => (
                    <Col key={p.id} xs={24} sm={12} md={8} lg={6}>
                        <ProductCard
                            product={p}
                            onViewDetail={() => handleViewDetail(p)}
                        />
                    </Col>
                ))}
            </Row>
            {selected && (
                <ProductDetailModal
                    product={selected}
                    onClose={() => setSelected(null)}
                />
            )}
        </>
    );
};

export default ProductList; 