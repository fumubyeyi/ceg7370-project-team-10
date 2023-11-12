import React from "react";
import "./ScrollToTopButton.css";
import ScrollToTop from "react-scroll-to-top";
class ScrollToTopButton extends React.Component {
  render() { 
    return (
      <div className="scroll">
        <ScrollToTop smooth />
      </div>
    );
  }
}
 
export default ScrollToTopButton;