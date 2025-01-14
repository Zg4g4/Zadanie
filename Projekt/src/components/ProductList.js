import React from 'react';

const ProductList = ({ products, onAddToCart }) => (
    <div className="container mt-5">
        <h2>Lista Produktów</h2>
        <div className="row">
            {products.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">Cena: {product.price} PLN</p>
                            <p className="card-text">Stan: {product.stock}</p>
                            <button
                                className="btn btn-primary"
                                onClick={() => onAddToCart(product)}
                                disabled={product.stock === 0}
                            >
                                {product.stock > 0 ? 'Dodaj do koszyka' : 'Brak w magazynie'}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default ProductList;
