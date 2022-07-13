import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  return (
    <div className="Login">
      <form>
        <input
          autoFocus
          type="email"
          value={email}
          placeholder="USERNAME"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          autoFocus
          type="password"
          value={password}
          placeholder="PASSWORD"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button
        block
        size="lg"
        type="submit"
        disabled={!validateForm()}
        onClick={() => navigate("/home")}
      >
        LOGIN
      </button>
    </div>
  );
};
export default Form;
