import React from "react";
import "../styles/PriceFilter.scss";

const PriceFilter = ({ value, onChange }) => (
    <select
        className="price-filter"
        value={value}
        onChange={e => onChange(Number(e.target.value))}
    >
        <option value={0}>Tất cả giá</option>
        <option value={1}>{"< 500K"}</option>
        <option value={2}>500K–1 triệu</option>
        <option value={3}>{"> 1 triệu"}</option>
    </select>
);

export default PriceFilter; 