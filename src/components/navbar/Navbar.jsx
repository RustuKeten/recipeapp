import "bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <ul className="nav justify-content-space-between">
        <Link to="/home" className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <small>&lt;Rustu</small>
            <small>KETEN</small> <big>R</big>
            <small>ECIPE/&gt;</small>
          </a>
        </Link>
        <Link to="/about" className="nav-item">
          <a className="nav-link" href="#">
            ABOUT
          </a>
        </Link>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/RustuKeten">
            GITHUB
          </a>
        </li>
        <Link to="/" className="nav-item">
          <a className="nav-link">LOG OUT</a>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
