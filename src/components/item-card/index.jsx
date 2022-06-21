import React from "react";
import "./item-card.css"
import { formatNum } from "../helper_functions";

export const ItemCard = ({cake}) => {
    return (
        <div className="card cake-card">
            <img className="card-img-top cake-photo" src={cake.url} alt={cake.name}/>
            <div className="card-body">
                <p className="card-title">{cake.name}</p>
                <p className="card-text">{cake.description}</p>
            </div>
            <div className="cake-card-footer">
                <div class="price-section">
                    <div className="cake-price">{formatNum(cake.price)}</div>
                </div>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    )
};