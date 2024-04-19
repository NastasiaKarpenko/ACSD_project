
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

                </Link>
            </div>
        </div>
    );
}

export default CatalogLayout;