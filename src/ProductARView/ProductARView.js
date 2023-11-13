import React from "react";
import { useParams} from "react-router-dom";

const ProductARView = ({products}) => {
    const { id } = useParams(); // Get the product ID from the URL
  // Find the product with the matching ID
  const product = products.find((item) => item.pid === Number(id)); 
  console.log("product", product);  
  return (
    <>
        <h1>{`${product.title} AR View`}</h1>
        <iframe src="https://playcanvas.as/e/p/NERwz7Rf" 
        title="AR View"
        style={{width:"80%" ,height:"80vh"}} >
        </iframe>
    </>
    )
}

export default ProductARView;