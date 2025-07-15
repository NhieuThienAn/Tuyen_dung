import React from "react";
import { Modal, Typography, Rate, Tag, Descriptions, Divider } from "antd";

const ProductDetailModal = ({ product, onClose }) => (
    <Modal
        open={!!product}
        onCancel={onClose}
        footer={null}
        title={product?.name}
        centered
        width={520}
    >
        <div style={{ textAlign: "center" }}>
            <img
                src={product.image}
                alt={product.name}
                style={{ maxWidth: 260, maxHeight: 180, width: "100%", objectFit: "contain", borderRadius: 10, marginBottom: 16 }}
            />
            <Typography.Paragraph>{product.longDesc || product.shortDesc}</Typography.Paragraph>
            <Divider />
            <Descriptions column={1} size="small" bordered>
                {product.category && <Descriptions.Item label="Danh mục">{product.category}</Descriptions.Item>}
                {product.level && <Descriptions.Item label="Trình độ">{product.level}</Descriptions.Item>}
                {product.duration && <Descriptions.Item label="Thời lượng">{product.duration}</Descriptions.Item>}
                {product.instructor && <Descriptions.Item label="Giảng viên">{product.instructor}</Descriptions.Item>}
                {product.schedule && <Descriptions.Item label="Lịch học">{product.schedule}</Descriptions.Item>}
                {product.enrolled && <Descriptions.Item label="Số học viên">{product.enrolled}</Descriptions.Item>}
                {product.lessons && <Descriptions.Item label="Số bài học">{product.lessons}</Descriptions.Item>}
                {product.pages && <Descriptions.Item label="Số trang">{product.pages}</Descriptions.Item>}
                {product.ageGroup && <Descriptions.Item label="Độ tuổi">{product.ageGroup}</Descriptions.Item>}
                {product.tools && <Descriptions.Item label="Công cụ">{product.tools}</Descriptions.Item>}
                {product.technologies && <Descriptions.Item label="Công nghệ">{product.technologies.join(', ')}</Descriptions.Item>}
                {product.skills && <Descriptions.Item label="Kỹ năng">{product.skills.join(', ')}</Descriptions.Item>}
                {product.topics && <Descriptions.Item label="Chủ đề">{product.topics.join(', ')}</Descriptions.Item>}
                {product.difficultyLevel && <Descriptions.Item label="Độ khó">{product.difficultyLevel}</Descriptions.Item>}
                {product.discount && <Descriptions.Item label="Giảm giá">{Math.round(product.discount * 100)}%</Descriptions.Item>}
                {product.price && <Descriptions.Item label="Giá">
                    <span style={{ color: '#2d6cdf', fontWeight: 600 }}>{product.price.toLocaleString()} đ</span>
                </Descriptions.Item>}
            </Descriptions>
            <Divider />
            <div style={{ margin: "8px 0" }}>
                <Rate disabled defaultValue={product.rating || 4.5} allowHalf />
                <span style={{ marginLeft: 8, color: "#888" }}>{product.rating || 4.5} / 5</span>
                {product.certificate && <Tag color="green" style={{ marginLeft: 8 }}>Có chứng chỉ</Tag>}
                {product.examTips && <Tag color="blue" style={{ marginLeft: 8 }}>Exam Tips</Tag>}
                {product.practiceTests && <Tag color="purple" style={{ marginLeft: 8 }}>Practice Tests</Tag>}
                {product.careerSupport && <Tag color="gold" style={{ marginLeft: 8 }}>Hỗ trợ nghề nghiệp</Tag>}
                {product.parentReports && <Tag color="cyan" style={{ marginLeft: 8 }}>Báo cáo cho phụ huynh</Tag>}
                {product.mentorship && <Tag color="magenta" style={{ marginLeft: 8 }}>Mentorship</Tag>}
                {product.olympiadPrep && <Tag color="volcano" style={{ marginLeft: 8 }}>Olympiad Prep</Tag>}
                {product.competitions && <Tag color="geekblue" style={{ marginLeft: 8 }}>Thi đấu</Tag>}
                {product.confidenceBuilding && <Tag color="lime" style={{ marginLeft: 8 }}>Tự tin</Tag>}
            </div>
        </div>
    </Modal>
);

export default ProductDetailModal; 