import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="search-bar">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Recipient's username"
          />
          <button class="btn btn-outline-secondary" type="button">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
