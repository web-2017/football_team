import React from "react";
import Header from "../components/Header_footer/Header";
import Footer from "../components/Header_footer/Footer";

class layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
export default layout;
