import React from "react";
import "./item-card.css"

export const ItemCard = ({cake}) => {
    return (
        <div className="card cake-card h-100 mx-3">
            <img className="card-img-top cake-photo" src={cake.url} />
            <div className="card-body">
                <p className="card-title">{cake.name}</p>
                <p className="card-text">{cake.description}</p>
                <div className="cake-card-footer">
                    <p className="cake-price">{cake.price}</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>
        </div>
    )
};