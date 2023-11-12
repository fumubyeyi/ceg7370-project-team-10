import React from 'react';
import './Category.css';

class Category extends React.Component {
  state = {  } 
  render() { 
    return (
      <div className="welcome-cat">
        <h1>
          Category<br />
          <span>with great offers</span>
        </h1>
      </div>
    );
  }
}
 
export default Category;