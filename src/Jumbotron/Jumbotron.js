import React from 'react';
import './Jumbotron.css';

class Jumbotron extends React.Component {
  state = {  } 
  render() { 
    return (
          <div className="jumbotron" >
            <h1>
              <span>Company</span> is an innovative e-commerceplatform designed <br/>
          for retailersto interact with augmented reality immersive experiences with mobile or web browsers. <br/>
            </h1>
          </div>
      
        );
  }
}
 
export default Jumbotron;