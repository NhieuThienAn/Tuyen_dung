import React, { useRef } from "react";
import ToastContext from "./ToastContext";
import { message } from "antd";

const ToastProvider = ({ children }) => {
    const api = useRef(message);
    const show = (msg) => {
        api.current.destroy();
        api.current.open({ type: "info", content: msg, duration: 2 });
    };
    return (
        <ToastContext.Provider value={{ show }}>{children}</ToastContext.Provider>
    );
};

export default ToastProvider; 