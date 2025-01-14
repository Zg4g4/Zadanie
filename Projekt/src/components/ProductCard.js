import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="card bg-secondary text-light" style={{ width: '18rem' }}>
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Cena: {product.price} PLN</p>
                <button className="btn btn-dark" onClick={() => onAddToCart(product)}>Dodaj do koszyka</button>
            </div>
        </div>
    );
};

export default ProductCard;