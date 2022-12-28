import { Component } from "react";
import "../SASS/Layout/_footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container footer__content">
          <p>Copyright &copy; Your Website 2019</p>
        </div>
      </footer>
    );
  }
}
