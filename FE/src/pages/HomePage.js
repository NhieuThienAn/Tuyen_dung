import React, { useState, useEffect, useContext } from "react";
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import { Input, Select, Button, Alert, Spin } from "antd";
import { BulbOutlined, SearchOutlined } from "@ant-design/icons";
import ProductList from "../components/ProductList";
import { fetchProducts, fetchSuggestions } from "../services/productService";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { ViewedContext } from "../contexts/ViewedContext";
import { CartContext } from "../components/CartContext";
import ToastContext from "../components/ToastContext";

const { Option } = Select;

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [suggesting, setSuggesting] = useState(false);
  const [error, setError] = useState("");
  const { favorites } = useContext(FavoritesContext);
  const { viewed, addViewed } = useContext(ViewedContext);
  const { cart } = useContext(CartContext);
  const toast = useContext(ToastContext);

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Không thể tải sản phẩm.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    if (price === 1) result = result.filter((p) => p.price < 500000);
    if (price === 2) result = result.filter((p) => p.price >= 500000 && p.price <= 1000000);
    if (price === 3) result = result.filter((p) => p.price > 1000000);
    setFiltered(result);
  }, [search, price, products]);

  const handleSuggest = async () => {
    setSuggesting(true);
    setError("");
    try {
      // Gợi ý dựa trên hành vi: đã thích, đã xem, đã thêm giỏ hàng
      const data = await fetchSuggestions("user1", favorites, [...viewed, ...cart]);
      setFiltered(data);
      toast.show("Đã gợi ý sản phẩm phù hợp!");
    } catch {
      setError("Không thể lấy gợi ý lúc này");
    }
    setSuggesting(false);
  };

  return (
    <div className="home-page">
      <Row gutter={[16, 16]} align="middle" style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} md={10}>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Tìm kiếm sản phẩm..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            allowClear
            size="large"
          />
        </Col>
        <Col xs={12} sm={6} md={5}>
          <Select
            value={price}
            onChange={setPrice}
            size="large"
            style={{ width: "100%" }}
          >
            <Option value={0}>Tất cả giá</Option>
            <Option value={1}>{"< 500K"}</Option>
            <Option value={2}>500K–1 triệu</Option>
            <Option value={3}>{"> 1 triệu"}</Option>
          </Select>
        </Col>
        <Col xs={12} sm={6} md={5}>
          <Button
            type="primary"
            icon={<BulbOutlined />}
            loading={suggesting}
            onClick={handleSuggest}
            size="large"
            style={{ width: "100%" }}
          >
            Gợi ý sản phẩm phù hợp
          </Button>
        </Col>
      </Row>
      {error && <Alert type="error" message={error} style={{ marginBottom: 16 }} />}
      {(loading || suggesting) ? (
        <div style={{ textAlign: "center", padding: 48 }}>
          <Spin size="large" />
        </div>
      ) : (
        <ProductList products={filtered} onView={addViewed} />
      )}
    </div>
  );
};

export default HomePage; 