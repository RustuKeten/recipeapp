import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const navigate = useNavigate();
  // console.log(nameInput);
  // console.log(passwordInput);

  const name = "rustu";
  const password = "1234";

  const handleSubmit = () => {
    if (nameInput !== name && passwordInput !== password) {
      alert("Invalid name/password!");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="Login">
      <form>
        <input
          autoFocus
          type="text"
          placeholder="USERNAME"
          onChange={(e) => setNameInput(e.target.value)}
        />
        <br />
        <input
          autoFocus
          type="password"
          placeholder="PASSWORD"
          onChange={(e) => setPasswordInput(e.target.value)}
        />
      </form>
      <button
        block
        size="lg"
        type="submit"
        // disabled={!validateForm()}
        onClick={handleSubmit}
      >
        LOGIN
      </button>
    </div>
  );
};
export default Form;
