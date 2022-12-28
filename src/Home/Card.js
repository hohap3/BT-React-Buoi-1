import { Component } from "react";
import "../SASS/Layout/_card.scss";

export default class Card extends Component {
  render() {
    return (
      <section className="card mb-4">
        <div className="container card__content">
          <div className="row g-5">
            <div className="card__col col-lg-3">
              <div className="card__item">
                <img
                  src="https://via.placeholder.com/500x325"
                  className="img-fluid"
                />
                <div className="card__info">
                  <h2>Card title</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <button className="mt-4 card__button">Find Out More!</button>
                </div>
              </div>
            </div>

            <div className="card__col col-lg-3">
              <div className="card__item">
                <img
                  src="https://via.placeholder.com/500x325"
                  className="img-fluid"
                />
                <div className="card__info">
                  <h2>Card title</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <button className="mt-4 card__button">Find Out More!</button>
                </div>
              </div>
            </div>

            <div className="card__col col-lg-3">
              <div className="card__item">
                <img
                  src="https://via.placeholder.com/500x325"
                  className="img-fluid"
                />
                <div className="card__info">
                  <h2>Card title</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <button className="mt-4 card__button">Find Out More!</button>
                </div>
              </div>
            </div>

            <div className="card__col col-lg-3">
              <div className="card__item">
                <img
                  src="https://via.placeholder.com/500x325"
                  className="img-fluid"
                />
                <div className="card__info">
                  <h2>Card title</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <button className="mt-4 card__button">Find Out More!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
