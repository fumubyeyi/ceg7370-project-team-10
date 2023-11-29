import { useState } from "react";
import { useParams} from "react-router-dom";

const PLAYCANVAS_ORIGIN = "https://playcanv.as";
const PLAYCANVAS_URL = "https://playcanv.as/e/p/NERwz7Rf/";

const ProductARView = ({products}) => {
  const { id } = useParams(); // Get the product ID from the URL

  const [canvasLoaded, setCanvasLoaded] = useState(false);

  // Find the product with the matching ID
  const product = products.find((item) => item.pid === Number(id)); 

  window.addEventListener('message', function(event){
    if (event.origin === PLAYCANVAS_ORIGIN){
      if(event.data === "app:ready"){
        setCanvasLoaded(true);
        
      }
    }
  });

  if (canvasLoaded){
    loadModelEventHandler(product);
  }

  function loadModelEventHandler(product){
    let iframe = document.getElementById("playcanvasIframe"); 
    console.error(iframe.contentWindow);
    iframe.contentWindow.postMessage(
      {
        name:"LOAD_MODEL", 
        options : 
          { modelName : product.name, 
            position: product.position,
            rotation: product.rotation,
            scale: product.scale, 
            colors: product.colors
          }
      }, PLAYCANVAS_ORIGIN);
    };

  return (
    <>
        <h1>{`${product.title} AR View`}</h1>
        <iframe src={PLAYCANVAS_URL} 
        id="playcanvasIframe"
        title="AR View"
        style={{width:"100%" ,height:"80vh"}} >
        </iframe>
    </>
    )
}

export default ProductARView;