import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Cart = ({ cartItems, onRemoveFromCart, clearCart, addOrder }) => {
    const [showModal, setShowModal] = useState(false);
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    const handleOrderConfirmation = () => {
        const newOrder = {
            id: Math.random().toString(36).substr(2, 9),
            date: new Date().toISOString().split('T')[0],
            products: cartItems.map(({ name, price }) => ({ name, quantity: 1, price })),
            total,
        };
        addOrder(newOrder);
        setShowModal(true);
    };

    return (
        <div className="container mt-5">
            <h2>Koszyk</h2>
            {cartItems.length === 0 ? (
                <p>Twój koszyk jest pusty.</p>
            ) : (
                <>
                    <table className="table">
                        <thead>
                            <tr><th>Produkt</th><th>Cena (PLN)</th><th>Akcje</th></tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td><button className="btn btn-danger" onClick={() => onRemoveFromCart(index)}>Usuń</button></td>
                                </tr>
                            ))}
                            <tr>
                                <td><strong>Suma</strong></td>
                                <td><strong>{total} PLN</strong></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-success mt-3" onClick={handleOrderConfirmation}>Zatwierdź zamówienie</button>
                </>
            )}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton><Modal.Title>Potwierdzenie zamówienia</Modal.Title></Modal.Header>
                <Modal.Body><p>Twoje zamówienie zostało potwierdzone!</p></Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => { setShowModal(false); clearCart(); }}>OK</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Cart;
