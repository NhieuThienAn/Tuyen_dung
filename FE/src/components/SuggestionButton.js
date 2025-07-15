import React from "react";
import "../styles/SuggestionButton.scss";

const SuggestionButton = ({ loading, onClick }) => (
    <button className="suggest-btn" onClick={onClick} disabled={loading}>
        {loading ? "Đang gợi ý..." : "Gợi ý sản phẩm phù hợp"}
    </button>
);

export default SuggestionButton; 