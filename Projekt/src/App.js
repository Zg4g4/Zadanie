import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import OrderHistory from './components/OrderHistory';
import { sampleProducts } from './utils/data';

const App = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState(localStorage.getItem('role') || '');
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
    const [userOrders, setUserOrders] = useState([]);
    const [adminOrders, setAdminOrders] = useState([]);

    const handleRoleChange = (newRole) => {
        setRole(newRole);
        localStorage.setItem('role', newRole);
    };

    const handleLogout = () => {
        setRole('');
        localStorage.removeItem('role');
        navigate('/login');
    };

    const updateCart = (updatedCart) => {
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const handleAddToCart = (product) => updateCart([...cartItems, product]);
    const handleRemoveFromCart = (index) => updateCart(cartItems.filter((_, i) => i !== index));
    const clearCart = () => updateCart([]);

    const handleAddOrder = (newOrder) => {
        setUserOrders(prev => [...prev, newOrder]);
        setAdminOrders(prev => [...prev, newOrder]);
    };

    useEffect(() => {
        if (role) setRole(localStorage.getItem('role'));
    }, [role]);

    return (
        <>
            {role && <Navbar onLogout={handleLogout} cartItems={cartItems} role={role} />}
            <Routes>
                <Route path="/login" element={<Login setRole={handleRoleChange} />} />
                <Route path="/" element={role === 'user' ? <ProductList products={sampleProducts} onAddToCart={handleAddToCart} /> : <Navigate to="/login" />} />
                <Route path="/cart" element={role === 'user' ? <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} clearCart={clearCart} addOrder={handleAddOrder} /> : <Navigate to="/login" />} />
                <Route path="/order-history" element={role === 'user' ? <OrderHistory orders={userOrders} /> : <Navigate to="/login" />} />
                <Route path="/admin" element={role === 'admin' ? <AdminPanel orders={adminOrders} /> : <Navigate to="/login" />} />
            </Routes>
        </>
    );
};

export default App;
