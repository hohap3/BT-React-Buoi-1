import { Component } from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Card from "./Card";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Carousel />
        <Card />
        <Footer />
      </div>
    );
  }
}
