import React, { useEffect, useState } from 'react'

function Summary(props) {
    let deliveryCharge = 0.00;
    const [total, setTotal] = useState(deliveryCharge)
    let currency = "€";
    const selectedItems = JSON.parse(localStorage.getItem('basket'));
    let taxText = "Total (VAT included)"


    useEffect(() => {
        if (selectedItems.length === props.items.length) {
            setTotal(deliveryCharge)
            calcutateTotal();
            console.log("caculate run")
        }
    }, [props.items, selectedItems]);

    function calcutateTotal() {
        let cost = 0;
        props.items.map((i) => {
            let allTogether = parseFloat(i.price) * parseFloat(i.quantity);
            cost += allTogether;

        })
        setTotal(cost)
    }

    return (
        <div>
            <div>
                <h3><strong>Total</strong></h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Total</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Subtotal</td>
                            <td>{currency}price</td>
                        </tr>
                        <tr>
                            <td>Delivery</td>
                            <td>{currency}{deliveryCharge}</td>
                        </tr>
                        <tr>
                            <td><strong>{taxText}</strong></td>
                            <td>{currency}{total}</td>
                        </tr>
                    </tbody>
                </table>
                <button>CHECKOUT</button>
            </div>
        </div>
    )
}
export default Summary;