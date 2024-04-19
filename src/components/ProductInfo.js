import { useState, useEffect } from "react";

function ProductInfo(props) {
    let currency = "€";

    const selectedItems = JSON.parse(localStorage.getItem('basket'));

    return (
        <div>
            <div>


                <img src={props.item.images[0]} alt={props.item.title} width={200} />
                <p><strong>{props.item.title}</strong></p>
                <p>description: {props.item.description}</p>
                <p>Brand: {props.item.brand}</p>
                <p>Price: {currency}{props.item.price}</p>
                <p>Quantity: {props.item.quantity}</p>
                <select name="quantity" defaultValue={selectedItems[0].quantity} id="amount">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>


            </div>
        </div>
    )
}
export default ProductInfo;