import React from "react";
import Home from "./Home";
import About from "./About";
import Admin from "./Admin";
import Signin from "./Signin";
import Signup from "./Signup";
import Logout from "./Logout";
import unicornPic from "../src/pics/unicorns_inc.jpg";
import { Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="main-container">
      <img src={unicornPic} alt="Unicorns Inc" />
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="admin">Admin</Link>
        </li>
        <li>
          <Link to="signin">Signin</Link>
        </li>
        <li>
          <Link to="signup">Signup</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="admin" element={<Admin />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      {true && <Logout />}
    </div>
  );
};

export default App;
