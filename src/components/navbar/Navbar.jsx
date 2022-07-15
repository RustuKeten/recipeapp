import "bootstrap";
import { Link } from "react-router-dom";
import headerlogo from "../../assets/home.svg";

const Navbar = () => {
  return (
    <div className="container-fluid bg-dark p-4 fs-4 text-warning">
      <div className="row d-flex ">
        <div className="col-6 d-flex ">
          <Link to="/home" className="text-decoration-none text-warning">
            <big>&lt;R</big>
            <small>USTU</small>
            <small>KETEN</small>
            <img className="col-1" src={headerlogo} alt="" />
            <big>R</big>
            <small>ECIPE/&gt;</small>
          </Link>
        </div>
        <div className="col-6 d-flex justify-content-end gap-5  text-dark">
          <Link to="/about" className="text-decoration-none ">
            ABOUT
          </Link>
          <a
            href="https://github.com/RustuKeten"
            className="text-decoration-none "
          >
            GITHUB
          </a>
          <Link to="/" className="text-decoration-none ">
            LOG OUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
