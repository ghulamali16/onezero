import "./ProductCardStyles.css";
import {Link} from "react-router-dom";
const ProductCard = (props) => {
  return (
    <div className="card pcard">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      <div className="card-body">
        <Link to={`/product/${1}`} className="btn btn-sm btn-info">View Product</Link>
      </div>
    </div>
  );
};

export default ProductCard;
