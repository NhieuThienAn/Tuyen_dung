import React, { useState, useRef, useEffect } from "react";
import { Drawer, Input, Button, Typography, FloatButton, List, Avatar, Empty } from "antd";
import { SendOutlined, MessageOutlined, BulbOutlined } from "@ant-design/icons";
import { fetchProducts } from "../services/productService";

const mockReply = async (msg) => {
    const products = await fetchProducts();
    const lower = msg.toLowerCase();
    // Gợi ý theo từ khóa
    if (/tiếng anh|english|mỹ|giao tiếp/i.test(lower))
        return products.filter(p => /anh|english/i.test(p.name));
    if (/python|lập trình|code|react|web/i.test(lower))
        return products.filter(p => /python|lập trình|react|web/i.test(p.name));
    if (/toán|math|logic/i.test(lower))
        return products.filter(p => /toán|math|logic/i.test(p.name));
    if (/khoa học|stem|robot|vật lý|science/i.test(lower))
        return products.filter(p => /khoa học|stem|robot|vật lý|science/i.test(p.name));
    if (/trẻ em|thiếu nhi|kids/i.test(lower))
        return products.filter(p => /trẻ em|thiếu nhi|kids|scratch/i.test(p.name + p.shortDesc));
    // Nếu không khớp, trả về 1 câu trả lời mặc định
    return [];
};

const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { from: "bot", text: "Xin chào! Bạn muốn tìm khoá học gì?" },
    ]);
    const [suggested, setSuggested] = useState([]);
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const send = async () => {
        if (!input.trim()) return;
        setMessages((prev) => [...prev, { from: "user", text: input }]);
        setLoading(true);
        setInput("");
        const result = await mockReply(input);
        setLoading(false);
        if (result.length > 0) {
            setMessages((prev) => [
                ...prev,
                { from: "bot", text: `Tôi gợi ý cho bạn ${result.length} khoá học phù hợp:` }
            ]);
            setSuggested(result);
        } else {
            setMessages((prev) => [
                ...prev,
                { from: "bot", text: "Xin lỗi, tôi chưa tìm thấy khoá học phù hợp với yêu cầu của bạn." }
            ]);
            setSuggested([]);
        }
    };

    useEffect(() => {
        if (open && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, open, suggested]);

    return (
        <>
            <FloatButton
                icon={<MessageOutlined />}
                type="primary"
                style={{ right: 32, bottom: 32 }}
                onClick={() => setOpen(true)}
                tooltip={<div>Chatbot AI tư vấn</div>}
            />
            <Drawer
                title="Chatbot AI tư vấn sản phẩm"
                placement="right"
                onClose={() => setOpen(false)}
                open={open}
                width={360}
            >
                <div style={{ maxHeight: 260, overflowY: "auto", marginBottom: 12 }}>
                    {messages.map((m, i) => (
                        <div key={i} style={{
                            textAlign: m.from === "bot" ? "left" : "right",
                            marginBottom: 8
                        }}>
                            <Typography.Text
                                style={{
                                    background: m.from === "bot" ? "#f5f8fa" : "#e6f7ff",
                                    color: m.from === "bot" ? "#2d6cdf" : "#333",
                                    borderRadius: 8,
                                    padding: "6px 12px",
                                    display: "inline-block",
                                    maxWidth: 220
                                }}
                            >
                                {m.text}
                            </Typography.Text>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                {loading && <div style={{ textAlign: 'center', margin: 12 }}><BulbOutlined spin style={{ fontSize: 28, color: '#2d6cdf' }} /></div>}
                {suggested.length > 0 && !loading && (
                    <List
                        size="small"
                        header={<b>Khoá học gợi ý</b>}
                        dataSource={suggested}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.image} shape="square" />}
                                    title={item.name}
                                    description={<>
                                        <span style={{ color: '#2d6cdf', fontWeight: 500 }}>{item.price.toLocaleString()} đ</span>
                                        <br />
                                        <span style={{ fontSize: 13 }}>{item.shortDesc}</span>
                                    </>}
                                />
                            </List.Item>
                        )}
                    />
                )}
                {suggested.length === 0 && !loading && messages.length > 1 && (
                    <Empty description="Không có gợi ý phù hợp" style={{ margin: 12 }} />
                )}
                <Input.Group compact style={{ marginTop: 8 }}>
                    <Input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onPressEnter={send}
                        placeholder="Nhập câu hỏi..."
                        style={{ width: "calc(100% - 48px)" }}
                    />
                    <Button type="primary" icon={<SendOutlined />} onClick={send} />
                </Input.Group>
            </Drawer>
        </>
    );
};

export default Chatbot; 