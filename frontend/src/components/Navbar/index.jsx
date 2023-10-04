import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      const elems = document.querySelectorAll(".sidenav");
      const instances = M.Sidenav.init(elems);
    });

    M.AutoInit();
  }, []);

  return (
    <div>
      <nav className="red darken-4">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            CrediPro
          </a>
          <ul id="nav-mobile-desktop" className="right hide-on-med-and-down">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastrar</Link>
            </li>
            <li>
              <Link to="/vendas">Vendas</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
          </ul>

          <ul id="slide-out" className="sidenav">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastrar</Link>
            </li>
            <li>
              <Link to="/vendas">Vendas</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
          </ul>
          <a href="#" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    </div>
  );
}
