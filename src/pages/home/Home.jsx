import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
const Home = () => {
  return (
    <div className="container-fluid ">
      <div className="row row-1">
        <Navbar />
      </div>
      <div className="row row-2 justify-content-center d-flex mt-5">
        <div className="d-flex w-50 ">
          <input type="text" className="form-control" placeholder="FOOD" />
          <button
            className="btn bg-warning btn-outline-secondary"
            type="button"
          >
            SEARCH
          </button>
          <select className="form-select w-50">
            <option selected>BREAKFAST</option>
            <option value="1">LUNCH</option>
            <option value="2">DINNER</option>
            <option value="3">SNACK</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Home;
