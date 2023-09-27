import React from 'react';
import './index.css'

export default function Table(props) {
  return (
    <div className="row">
      <div className="col s12">
        <ul className="tabs amber accent-4">
          <li className="tab col s12">
            <a href="#test1">CLIENTES</a>
          </li>
        </ul>
      </div>

      <div id="test1" className="col s12">
        <div className="row">
          <div id="day1" className="col s12">
            <table className="centered striped responsive-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Tipo</th>
                  <th>Telefone</th>
                  <th>Valor</th>
                  <th>Observações</th>
                </tr>
              </thead>
              <tbody>
                {props.data.map((user, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{user.id}</th>
                      <th>{user.name}</th>
                      <th>{user.username}</th>
                      <th>{user.phone}</th>
                      <th>{user.website}</th>
                      <th>{user.email}</th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
