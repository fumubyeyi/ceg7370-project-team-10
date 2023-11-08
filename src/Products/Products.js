import React from "react";
import { Link } from "react-router-dom";
import './Products.css'

class Products extends React.Component {
  render() { 
    return ( 
          <>
                <div className="row container-fluid">
            {this.props.products.map((product) => (
              <div key={product.pid} className="col-xl-3" id="products">
                <div className="card h-100">
                  <img
                    src={product.image}
                    className="card-img-top w-100 h-75"
                    alt="Product"
                  />
                  <div className="card-body">
                    <Link to={`/products/${product.pid}`} className="btn btn-primary stretched-link" >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </> );
  }
}
 
export default Products;