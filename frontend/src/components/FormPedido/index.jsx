import React from "react";

export default function FormPedido({ userId }) {
  const [data, setData] = React.useState([]);
  const [quantidade, setQuantidade] = React.useState({
      pratinho10: 0,
      pratinho15: 0,
      pratinhoL: 0,
      lasanha: 0,
      torta: 0,
      arrozdeforno: 0,
      salgado: 0,
      pastel: 0,
      sanduicheNatural: 0
  });


  const alterarQuantidade = (button, item) => {
    setQuantidade((prevQuantidades) => {
      const novasQuantidades = {...prevQuantidades};

      if (button === "+" && novasQuantidades[item] < 20) {
        novasQuantidades[item] += 1;
      } else if (button === "-" && novasQuantidades[item] > 0) {
        novasQuantidades[item] -= 1;
      }

      return novasQuantidades;
    });

    console.log(quantidade)
  };


  const pegarDados = (e) => {
    setData(e.target.value)
  };

  const cadastrar = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8000/cadastro/pedido/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data, quantidade),
        }
      );

      if (response.ok) {
        M.toast({ html: "Cadastrado!" });
      } else {
        M.toast({ html: "Erro ao cadastrar." });
      }
    } catch (error) {
      console.error("Erro na solicitação", error);
    }
  };

  

  return (
    <div className="container">
      <form onSubmit={cadastrar}>
        <div className="row">
          <ul className="collapsible expandable">
            <li className="active">
              <div className="collapsible-header">
                <i className="material-icons">restaurant_menu</i>
                COMIDAS
              </div>
              <div className="collapsible-body">
                <div className="row">
                  <div className="input-field col s4">
                    PRATINHOS
                    <p>
                      <label>
                        <input onChange={pegarDados} value="1" type="checkbox" />
                        <span>Pratinho - 10</span>
                      </label>
                      <button onClick={() => alterarQuantidade("-", "pratinho10")}>-</button>
                      <span>{quantidade.pratinho10}</span>
                      <button onClick={() => alterarQuantidade("+", "pratinho10")}>+</button>
                    </p>
                    <p>
                      <label>
                        <input onChange={pegarDados} value="2" type="checkbox" />
                        <span>Pratinho - 15</span>
                      </label>
                      <button onClick={() => alterarQuantidade("-", "pratinho15")}>-</button>
                      <span>{quantidade.pratinho15}</span>
                      <button onClick={() => alterarQuantidade("+", "pratinho15")}>+</button>
                    </p>
                    <p>
                      <label>
                        <input onChange={pegarDados} value="3" type="checkbox" />
                        <span>Pratinho com Lasanha</span>
                      </label>
                      <button onClick={() => alterarQuantidade("-", "pratinhoL")}>-</button>
                      <span>{quantidade.pratinhoL}</span>
                      <button onClick={() => alterarQuantidade("+", "pratinhoL")}>+</button>
                    </p>
                  </div>
                  <div className="input-field col s4">
                    TRAVESSA
                    <p>
                      <label>
                        <input onChange={pegarDados} value="4" type="checkbox" />
                        <span>Lasanha</span>
                      </label>
                      <button onClick={() => alterarQuantidade("-", "lasanha")}>-</button>
                      <span>{quantidade.lasanha}</span>
                      <button onClick={() => alterarQuantidade("+", "lasanha")}>+</button>
                    </p>
                    <p>
                      <label>
                        <input onChange={pegarDados} value="5" type="checkbox" />
                        <span>Torta</span>
                      </label>
                      <button onClick={() => alterarQuantidade("-", "torta")}>-</button>
                      <span>{quantidade.torta}</span>
                      <button onClick={() => alterarQuantidade("+", "torta")}>+</button>
                    </p>
                    <p>
                      <label>
                        <input onChange={pegarDados} value="6" type="checkbox" />
                        <span>Arroz de Forno</span>
                      </label>
                      <button onClick={() => alterarQuantidade("-", "arrozdeforno")}>-</button>
                      <span>{quantidade.arrozdeforno}</span>
                      <button onClick={() => alterarQuantidade("+", "arrozdeforno")}>+</button>
                    </p>
                  </div>
                  <div className="input-field col s4">
                    SALGADOS
                    <p>
                      <label>
                        <input onChange={pegarDados} value="7" type="checkbox" />
                        <span>Salgado</span>
                      </label>
                      <button onClick={() => alterarQuantidade("-", "salgado")}>-</button>
                      <span>{quantidade.salgado}</span>
                      <button onClick={() => alterarQuantidade("+", "salgado")}>+</button>
                    </p>
                    <p>
                      <label>
                        <input onChange={pegarDados} value="8" type="checkbox" />
                        <span>Pastel</span>
                      </label>
                      <button onClick={() => alterarQuantidade("-", "pastel")}>-</button>
                      <span>{quantidade.pastel}</span>
                      <button onClick={() => alterarQuantidade("+", "pastel")}>+</button>
                    </p>
                    <p>
                      <label>
                        <input onChange={pegarDados} value="9" type="checkbox" />
                        <span>Sanduiche Natural</span>
                      </label>
                      <button onClick={() => alterarQuantidade("-", "sanduicheNatural")}>-</button>
                      <span>{quantidade.sanduicheNatural}</span>
                      <button onClick={() => alterarQuantidade("+", "sanduicheNatural")}>+</button>
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">local_drink</i>
                BEBIDAS
              </div>
              <div className="collapsible-body">
                <div className="row">
                  <div className="input-field col s4">
                    PET
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Coca-Cola</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>São Gerardo</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Guaraná</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Pepsi</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Laranja</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Limão</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Uva</span>
                      </label>
                    </p>
                  </div>
                  <div className="input-field col s4">
                    LATA
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Coca-Cola</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Guaraná</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Pepsi</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Laranja</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Limão</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Uva</span>
                      </label>
                    </p>
                  </div>
                  <div className="input-field col s4">
                    SUCO
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Acerola</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Cajá</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Cajú</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Goiaba</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Limão</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Manga</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Maracujá</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Tamarindo</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Agua</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Agua c/ gás</span>
                      </label>
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">favorite</i>
                DOCES
              </div>
              <div className="collapsible-body">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Red</span>
                  </label>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <span>detalhes do pedido</span>
        </div>
      </form>
    </div>
  );
}

{
  /* <div className="input-field col s4">
<select multiple onChange={selectData}>
  <optgroup label="Pratinho">
    <option value="1">Pratinho 10</option>
    <option value="2">Pratinho 15</option>
  </optgroup>
  <optgroup label="Travessa">
    <option value="3">Lasanha</option>
    <option value="4">Arroz de forno</option>
  </optgroup>
  <optgroup label="Salgado">
    <option value="5">Coxinha</option>
    <option value="6">Pastel</option>
    <option value="7">Torta</option>
  </optgroup>
</select>
<label>Comidas</label>
</div>

<div className="input-field col s4">
<select multiple onChange={selectData}>
  <optgroup label="Garrafinha">
    <option value="8">Coquinha</option>
    <option value="9">São Gerardo</option>
    <option value="10">Guaraná</option>
    <option value="11">Grappet/Uva</option>
    <option value="12">Fanta/Laranja</option>
    <option value="13">Soda/Limão</option>
    <option value="14">Pepsi</option>
  </optgroup>
  <optgroup label="Lata">
    <option value="15">Coca Cola</option>
    <option value="16">Guaraná</option>
    <option value="17">Fanta/Laranja</option>
    <option value="18">Fanta/Uva</option>
    <option value="19">Sprite/Limão</option>
    <option value="20">Pepsi</option>
  </optgroup>
  <optgroup label="Suco">
    <option value="21">Goiaba</option>
    <option value="22">Tamarindo</option>
    <option value="23">Acerola</option>
    <option value="24">Cajá</option>
    <option value="25">Cajú</option>
    <option value="26">Limão</option>
    <option value="27">Manga</option>
    <option value="28">Maracujá</option>
  </optgroup>
</select>
<label>Bebidas</label>
</div>
<div className="input-field col s4">
<select multiple onChange={selectData}>
  <optgroup label="Chocolates">
    <option value="29">Bolo</option>
    <option value="30">Barra</option>
    <option value="31">Kit-Kat</option>
    <option value="32">Snickers</option>
  </optgroup>
  <optgroup label="Bombom">
    <option value="33">Bombom 3</option>
    <option value="34">Bombom 4</option>
    <option value="35">Pirulito</option>
  </optgroup>
</select>
<label>Doces</label>
</div>

<label htmlFor="obs">Observações:</label>
<input
  name="obs"
  id="obs"
  type="text"
  className="validate"
/>

<button className="btn waves-effect waves-light" type="submit">
  Finalizar
  <i className="material-icons right">done</i>
</button> */
}
