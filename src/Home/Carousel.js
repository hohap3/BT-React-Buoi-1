import { Component } from "react";
import "../SASS/Layout/_carousel.scss";

export default class Carousel extends Component {
  render() {
    return (
      <section className="carousel my-5">
        <div className="container carousel__content">
          <div className="carousel__main px-4 d-flex">
            <h2 className="carousel__title">A Warm Welcome!</h2>
            <p className="carousel__des my-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="carousel__button">Call to action!</button>
          </div>
        </div>
      </section>
    );
  }
}
