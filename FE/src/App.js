import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";
import ViewedPage from "./pages/ViewedPage";
import CartPage from "./pages/CartPage";
import ToastProvider from "./components/ToastProvider";
import Chatbot from "./components/Chatbot";

function App() {
    return (
        <>
            <ToastProvider>
                <Router>
                    <MainLayout>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/favorites" element={<FavoritesPage />} />
                            <Route path="/viewed" element={<ViewedPage />} />
                            <Route path="/cart" element={<CartPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                        <Chatbot />
                    </MainLayout>
                </Router>
            </ToastProvider>
        </>
    );
}

export default App; 