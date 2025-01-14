import React, { useState } from 'react';
import { sampleProducts } from '../utils/data';

const AdminPanel = ({ orders }) => {
    const [products, setProducts] = useState(sampleProducts);
    const [nextId, setNextId] = useState(sampleProducts.length + 1);

    const handleDelete = (id) => setProducts(products.filter(p => p.id !== id));
    const handleAdd = () => {
        const newProduct = { id: nextId, name: "Nowy Produkt", description: "Opis", price: 0, stock: 0 };
        setProducts([...products, newProduct]);
        setNextId(nextId + 1);
    };
    const handleUpdate = (id, field, value) => {
        setProducts(products.map(p => p.id === id ? { ...p, [field]: value } : p));
    };

    return (
        <div className="container mt-5">
            <h2>Panel Administratora</h2>
            <button className="btn btn-success mb-3" onClick={handleAdd}>Dodaj produkt</button>
            <table className="table table-bordered">
                <thead>
                    <tr><th>Nazwa</th><th>Opis</th><th>Cena (PLN)</th><th>Stan</th><th>Akcje</th></tr>
                </thead>
                <tbody>
                    {products.map(({ id, name, description, price, stock }) => (
                        <tr key={id}>
                            <td><input type="text" value={name} onChange={(e) => handleUpdate(id, 'name', e.target.value)} className="form-control" /></td>
                            <td><input type="text" value={description} onChange={(e) => handleUpdate(id, 'description', e.target.value)} className="form-control" /></td>
                            <td><input type="number" value={price} onChange={(e) => handleUpdate(id, 'price', parseFloat(e.target.value))} className="form-control" /></td>
                            <td><input type="number" value={stock} onChange={(e) => handleUpdate(id, 'stock', parseInt(e.target.value, 10))} className="form-control" /></td>
                            <td><button className="btn btn-danger" onClick={() => handleDelete(id)}>Usuń</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3>Historia Zamówień</h3>
            <table className="table table-bordered">
                <thead><tr><th>Numer Zamówienia</th><th>Data</th><th>Produkty</th><th>Całkowita Kwota (PLN)</th></tr></thead>
                <tbody>
                    {orders.length === 0 ? <tr><td colSpan="4">Brak zamówień.</td></tr> : orders.map((order, idx) => (
                        <tr key={idx}>
                            <td>{order.id}</td>
                            <td>{order.date}</td>
                            <td>{order.products.map(p => `${p.name} x${p.quantity} (${p.price} PLN)`).join(', ')}</td>
                            <td>{order.total} PLN</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPanel;
