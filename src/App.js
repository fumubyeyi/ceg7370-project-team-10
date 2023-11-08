import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Products from "./Products/Products";
import Chair from "./Images/chair.jpeg";
import Chusionchair from "./Images/chusionchair.jpeg";
import Drawer from "./Images/drawer.jpeg";
import sofa from "./Images/sofa.jpeg";
import "./App.css";

class App extends React.Component {
  state = {
  products_list :[
        {
          pid: "1",
          image: Chair,
          title: "All natural nontoxic",
          subtitle: "Best of Beauty",
        },
        {
          pid: "2",
          image: Chusionchair,
          title: "Best deals for",
          subtitle: "Supplements and Vitamins",
        },
        {
          pid: "3",
          image: Drawer,
          title: "Everyday savings on",
          subtitle: "Fitness and Nutrition",
        },
        {
          pid: "4",
          image: sofa,
          title: "Best deals for",
          subtitle: "Supplements and Vitamins",
        },
      ]
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
                <Category /> <br />
                <Products products={this.state.products_list} /> <br />
              </>
            }
          />
          <Route
            path="/products"
            element={<Products products={this.state.products_list} />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
