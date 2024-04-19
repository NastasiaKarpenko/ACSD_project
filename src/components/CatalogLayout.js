// import { Link } from "react-router-dom";


// function CatalogLayout(props) {
//     let currency = "€";

//     const selectedItems = JSON.parse(localStorage.getItem('basket'));

//     return (
//         <div>
//             <div>
//                 <Link to={{ pathname: '/ProductPage', state: props.item.id }}>
//                     <img src={props.item.images[0]} alt={props.item.title} width={200} />
//                     <p><strong>{props.item.title}</strong></p>
//                     <p>description: {props.item.description}</p>
//                     <p>Brand: {props.item.brand}</p>
//                     <p>Price: {currency}{props.item.price}</p>
//                     <p>Quantity: {props.item.quantity}</p>

//                 </Link>


//             </div>
//         </div>
//     )
// }
// export default CatalogLayout;


import { Link } from "react-router-dom";

function CatalogLayout(props) {
    let currency = "€";
    function handleId() {
        localStorage.setItem("single", JSON.stringify(props.item.id));
    }

    return (
        <div>
            <div>

                <Link to='/ProductPage' onClick={handleId}>
                    <img src={props.item.images[0]} alt={props.item.title} width={200} />
                    <p><strong>{props.item.title}</strong></p>
                    <p>description: {props.item.description}</p>
                    <p>Brand: {props.item.brand}</p>
                    <p>Price: {currency}{props.item.price}</p>
                    Quantity:
                    <input>{props.item.quantity}</input>
                </Link>
            </div>
        </div>
    );
}

export default CatalogLayout;