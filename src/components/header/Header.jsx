import Form from "./Form";
import logo from "../../assets/meal2.svg";
import "./style.css";

const Header = () => {
  return (
    <div className="first-container">
      <img className="logo" src={logo} alt="" />
      <h2>
        <small>&lt;ED</small>
        <big>8</big>
        <small>EN</small> <big>R</big>
        <small>ECIPE/&gt;</small>
      </h2>
      <Form />
    </div>
  );
};

export default Header;
