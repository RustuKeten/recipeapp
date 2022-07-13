import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Header from "../header/Header";
import Login from "../../pages/login/Login";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
