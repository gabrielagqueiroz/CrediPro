import React from 'react';
import './index.css'
import Excluir from '../BtnExcluir';
import Vendas from '../BtnVendas';

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
            <table className="centered striped responsive-table mx-auto">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Tipo</th>
                  <th>Telefone</th>
                  <th>Valor</th>
                  <th>Observações</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {props.data.map((user, index) => {
                  return (
                    <tr key={index}>
                      <th className="center-align" scope="row">{user.id}</th>
                      <th className="center-align">{user.name}</th>
                      <th className="center-align">{user.category}</th>
                      <th className="center-align">{user.tel}</th>
                      <th className="center-align">{user.tel}</th>
                      <th className="center-align">{user.obs}</th>
                      <th className="center-align"><Vendas userId={user.id}/></th>
                      <th className="center-align"><Excluir/></th>
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
