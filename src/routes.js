import React from "react";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Home from "./pages/home";
import Customer from "./pages/customer";
import Login from "./pages/Login";
import Products from "./pages/products";
import Quotes from "./pages/quotes";
import Suppliers from "./pages/suppliers";

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
             <Route element={<Home />} path="/" />        
            <Route element={<Customer />} path="customer" />
            <Route element={<Login />} path="login" />
            <Route element={<Products />} path="products" />
            <Route element={<Quotes />} path="quotes" />
            <Route element={<Suppliers />} path="suppliers" />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;