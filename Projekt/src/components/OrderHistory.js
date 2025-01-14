import React from 'react';

const OrderHistory = ({ orders }) => (
    <div className="container mt-5">
        <h2>Historia Zamówień</h2>
        <table className="table">
            <thead>
                <tr><th>Numer Zamówienia</th><th>Data</th><th>Produkty</th><th>Całkowita Kwota</th></tr>
            </thead>
            <tbody>
                {orders.length === 0 ? (
                    <tr><td colSpan="4">Brak zamówień.</td></tr>
                ) : (
                    orders.map(({ id, date, products, total }) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{date}</td>
                            <td>{products.map((product, index) => `${product.name} x${product.quantity} (${product.price} PLN)`).join(', ')}</td>
                            <td>{total} PLN</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    </div>
);

export default OrderHistory;
