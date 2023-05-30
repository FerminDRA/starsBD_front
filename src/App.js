import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//import AddStars from "./components/add-stars.component";
import StarsList from "./components/stars-list.component";
import Stars from "./components/show-stars";
import Perfil from "./components/perfil";
import Login from "./components/google_signin";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to="/inicio" className="navbar-brand">
            Estrellas
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/inicio" className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/stars" className="nav-link">
                Stars List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/perfil" className="nav-link">
                Perfil
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h2>Stars of Universe</h2>
          <Routes>
            <Route exact path="/stars" element={<StarsList />} />
            <Route exact path="/add" element={<Login />} />
            <Route exact path="/inicio" element={<Stars />} />
            <Route exact path="/perfil" element={<Perfil />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
