import React from "react";
import { useParams, Link } from "react-router-dom";

import "./Products.css";

  const ProductDescription = ({ products }) => {
  const { id } = useParams(); // Get the product ID from the URL

  // Find the product with the matching ID
  const product = products.find((item) => item.pid === Number(id)); 

  //const PLAYCANVAS_URL = "https://playcanv.as/p/NERwz7Rf/";
  const PLAYCANVAS_URL = "https://playcanv.as/p/FKa9Uaiv";

  const options = { 
    modelName : product.name, 
    position: product.position,
    rotation: product.rotation,
    scale: product.scale, 
    colors: product.colors
  }
  const encodedstring = encodeURIComponent(JSON.stringify(options));

    const handleViewInAR = () => {
      //navigate(`/products/ar-view/${Number(id)}`);
      window.location.href = `${PLAYCANVAS_URL}?data=${encodedstring}`;
    }

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <br />
      <div className="card w-75 ml-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.subtitle}</p>

              <div className="row pb-3">
                <div className="col-4">
                  <button onClick={handleViewInAR} className="btn btn-primary btn-block">
                    View in AR
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <button className="btn btn-primary btn-block">
                    Add to Cart
                  </button>
                </div>
                <div className="col-4">
                  <Link to="/products" className="btn btn-secondary btn-block">
                    Back to Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDescription;
