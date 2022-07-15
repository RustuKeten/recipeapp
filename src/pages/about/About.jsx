import codinglogo from "../../assets/coding.svg";
import "bootstrap";
import Navbar from "../../components/navbar/Navbar";

const About = () => {
  return (
    <div className="container-fluid ">
      <Navbar />
      <div className="row d-flex justify-content-center">
        <div className="col-5 d-flex justify-content-center">
          <img src={codinglogo} alt="" />
        </div>
        <div className="row d-flex justify-content-center">
          <p className="col-12 text-danger fs-3 text-center">
            <span className="h2">Hi, I'm Rustu KETEN</span> <br />
            I'm a Full Stack Developer, graduated from Anadolu University, 💻 I
            love writing code and learn new things. Currently diving to IT
            World! Some of my skills are;
            JAVASCRIPT,REACT,HTML,CSS,Python,Django etc. Check out my profil;
          </p>
          <a className="col-2 fs-3 " href="https://github.com/RustuKeten">
            <i className="fa-brands fa-github">GITHUB</i>
          </a>
          <a
            className="col-2 fs-3"
            href="https://www.linkedin.com/in/rustuketen/"
          >
            <i className="fa-brands fa-linkedin">LINKEDIN</i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
