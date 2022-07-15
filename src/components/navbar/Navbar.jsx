import "bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid bg-light p-4 fs-4">
      <div className="row d-flex ">
        <div className="col-6 d-flex ">
          <Link to="/home" className="text-decoration-none ">
            <big>&lt;R</big>
            <small>USTU</small>
            <small>KETEN</small> <big>R</big>
            <small>ECIPE/&gt;</small>
          </Link>
        </div>
        <div className="col-6 d-flex justify-content-end gap-5 ">
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
