

function ProductInfo(props) {
    let currency = "€";

    const selectedItems = JSON.parse(localStorage.getItem('basket'));

    return (
        <div>
            <div>
                hello

                <img src={props.item.images[0]} alt={props.item.title} width={200} />
                <p><strong>{props.item.title}</strong></p>
                <p>description: {props.item.description}</p>
                <p>Brand: {props.item.brand}</p>
                <p>Price: {currency}{props.item.price}</p>
                <p>Quantity: {props.item.quantity}</p>
                <button onClick={() => props.removeItem(props.item.id)}>Remove</button>


            </div>
        </div>
    )
}
export default ProductInfo;