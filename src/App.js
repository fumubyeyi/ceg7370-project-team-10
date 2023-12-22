import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Jumbotron from "./Jumbotron/Jumbotron";
import Category from "./Category/Category";
import Products from "./Products/Products";
import ProductDescription from "./Products/ProductDescription";
import Chair from "./Images/chair.jpeg";
import CushionChair from "./Images/chusionchair.jpeg";
import Dresser from "./Images/drawer.jpeg";
import Sofa from "./Images/sofa.jpeg";
import Items from "./Data/Items.json";
import ScrollToTopButton from "./ScrollToTopButton/ScrollToTopButton";
import "./App.css";
import ProductARView from "./ProductARView/ProductARView";

class App extends React.Component {
  state = {
    products_list: Items.map((item) => {
      let image = Dresser;
      if (item.category === "Chair") {
        image = Chair;
      } else if (item.category === "Couch") {
        image = CushionChair;
      } else if (item.category === "Sofa") {
        image = Sofa;
      }
      else {
        image = Dresser;
      }

      return { ...item, image };
    }),
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Jumbotron />
                <Category /> <br />
                <Products products={this.state.products_list} /> <br />
                <ScrollToTopButton />
              </>
            }
          />
          <Route
            path="/products"
            element={<Products products={this.state.products_list} />}
          />
          <Route
            path="/products/:id"
            element={<ProductDescription products={this.state.products_list} />}
          />
          <Route
            path="/products/ar-view/:id"
            element={<ProductARView products={this.state.products_list} />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
