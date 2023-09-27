import React, { useEffect } from "react";

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
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/cadastro">Cadastrar</a>
            </li>
            <li>
              <a href="/vendas">Vendas</a>
            </li>
            <li>
              <a href="/produtos">Produtos</a>
            </li>
          </ul>

          <ul id="slide-out" className="sidenav">
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/cadastro">Cadastrar</a>
            </li>
            <li>
              <a href="/vendas">Vendas</a>
            </li>
            <li>
              <a href="/produtos">Produtos</a>
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
