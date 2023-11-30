import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './Products.css'

class Products extends React.Component {
  state = {
    sortBy: '', // Initially no sorting
  };

  handleSortChange = (sortBy) => {
    this.setState({ sortBy });
  };
  render() { 
    const { sortBy } = this.state;
    let sortedProducts = [...this.props.products];
    switch (sortBy) {
      case 'Price High to Low':
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'Price Low to High':
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'Name Z to A':
        sortedProducts = sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'Name A to Z':
        sortedProducts = sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // No sorting
        break;
    }
    return ( 
          <>
            <div className="col-12 mb-3">
            <DropdownButton style={{textAlign:'right'}} id="dropdown-basic-button" title={`Sort By: ${sortBy || 'None'}`}>
              <Dropdown.Item onClick={() => this.handleSortChange('Price High to Low')}>Price High to Low</Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleSortChange('Price Low to High')}>Price Low to High</Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleSortChange('Name Z to A')}>Name Z to A</Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleSortChange('Name A to Z')}>Name A to Z</Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleSortChange('')}>None</Dropdown.Item>
            </DropdownButton>
            </div>
            <div className="row container-fluid">
            {sortedProducts.map((product) => (
              <div key={product.pid} className="col-xl-3" id="products">
                <div className="card h-100">
                  <img
                    src={product.image}
                    className="card-img-top w-100 h-75"
                    alt="Product"
                  />
                  <div className="card-body">
                    <div className="product-title">
                     <span>{product.title}</span> 
                     <span>{`${product.price}`}</span> 
                    </div>
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