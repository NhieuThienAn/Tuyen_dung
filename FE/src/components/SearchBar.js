import React from "react";
import "../styles/SearchBar.scss";

const SearchBar = ({ value, onChange }) => (
    <input
        className="search-bar"
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        value={value}
        onChange={e => onChange(e.target.value)}
    />
);

export default SearchBar; 