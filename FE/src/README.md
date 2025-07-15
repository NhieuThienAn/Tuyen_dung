# EduAI - Sàn giáo dục thương mại điện tử tích hợp AI (FE)

## Mô tả
Giao diện web cho sàn thương mại điện tử giáo dục, nơi người dùng có thể tìm kiếm, khám phá, yêu thích các khoá học/sản phẩm giáo dục, nhận gợi ý thông minh từ AI, xem chi tiết, quản lý lịch sử xem, giỏ hàng, và chat tư vấn AI.

## Tính năng chính
- Hiển thị danh sách sản phẩm (mock data, ảnh thật)
- Tìm kiếm, lọc giá
- Gợi ý sản phẩm phù hợp (AI, mock API, dựa trên hành vi: đã thích, đã xem, đã thêm giỏ hàng)
- Xem chi tiết sản phẩm (modal)
- Đánh dấu yêu thích, trang quản lý yêu thích
- Lịch sử xem sản phẩm
- Giỏ hàng, thêm/xóa sản phẩm
- Loading skeleton khi fetch/gợi ý
- Xử lý lỗi API, toast thông báo
- Chatbot AI tư vấn sản phẩm (mock logic)
- Responsive, UI hiện đại, toast rõ ràng

## Điểm cộng & nâng cao
- Lịch sử xem: Trang riêng, loading skeleton
- Gợi ý nâng cao: Dựa trên sản phẩm đã thích, đã xem, đã thêm giỏ hàng
- Loading skeleton khi gọi API gợi ý/lịch sử
- Xử lý lỗi khi API fail (ví dụ: "Không thể lấy gợi ý lúc này")
- Toast thông báo rõ ràng khi thao tác yêu thích, giỏ hàng
- Giao diện hiện đại, hiệu ứng mượt mà, màu sắc đồng bộ thương hiệu

## Cấu trúc thư mục
- `components/`: Các component tái sử dụng (ProductCard, Modal, Toast, Chatbot...)
- `pages/`: Trang chính (Home, Favorites, Viewed, Cart, NotFound)
- `layouts/`: Layout tổng thể
- `services/`: Mock API
- `contexts/`: State toàn cục (yêu thích, lịch sử xem, giỏ hàng)
- `styles/`: SCSS global và từng component
- `assets/`: Ảnh, icon

## Cài đặt & chạy
```bash
cd FE
npm install
npm start
```
Truy cập: http://localhost:3000

## Công nghệ
- React, React Router, Context API, SCSS, Ant Design
- Mock API bằng Promise/Timeout (có thể chuyển sang Axios nếu muốn)

## Ghi chú
- Ảnh sản phẩm dùng file trong `assets/images/`
- Có thể mở rộng thêm sản phẩm, logic AI, v.v.

## Tác giả
- [Tên bạn] 