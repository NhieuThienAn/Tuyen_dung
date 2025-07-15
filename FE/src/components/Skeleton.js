import React from "react";
import "../styles/Skeleton.scss";

const Skeleton = ({ count = 8 }) => (
    <div className="skeleton-list">
        {Array.from({ length: count }).map((_, i) => (
            <div className="skeleton-card" key={i}>
                <div className="skeleton-img" />
                <div className="skeleton-line short" />
                <div className="skeleton-line" />
                <div className="skeleton-line long" />
            </div>
        ))}
    </div>
);

export default Skeleton; 