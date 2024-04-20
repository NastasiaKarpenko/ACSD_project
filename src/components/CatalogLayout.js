
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
                    <div className="col mb-4" >
                        <div className="card h-100 border border-dark rounded shadow catalog-card">
                            <img src={props.item.thumbnail} className="card-img-top img-fluid" style={{ maxHeight: '200px' }} alt={props.item.title} />
                            <div className="card-body">
                                <h5 className="card-title">{props.item.title}</h5>
                                <p className="card-text">{props.item.description}</p>
                                <p className="card-text">Price: {currency}{props.item.price}</p>
                                <p className="card-text">Rating: {props.item.rating}</p>
                            </div>
                            <div className="card-footer bg-transparent border-0">
                                <button onClick={handleId} className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default CatalogLayout;