import React from "react";

export default function FormPedido({ userId }) {
  const [item, setItem] = React.useState([]);

  const alterarQuantidade = (button, item) => {
    setItem((prevQuantidades) => {
      const novasQuantidades = { ...prevQuantidades };

      if (button === "+" && novasQuantidades[item] < 20) {
        novasQuantidades[item] += 1;
      } else if (button === "-" && novasQuantidades[item] > 0) {
        novasQuantidades[item] -= 1;
      }

      return novasQuantidades;
    });

    console.log(item);
  };

  const pegarDados = (e) => {
   /*  setData(e.target.value); */
   console.log(e.target.id, e.target.value);
  };


  const produto = async (e) => {
    try {
      const response = await fetch(`http://localhost:8000/cadastro/pedido/${userId}`);
      if(!response.ok) {
        M.toast({ html: "Erro na solicitação da API" });
      }

      const data = await response.json();
      setItem(data);

    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
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
          body: JSON.stringify(item),
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
                  <div className="col s4">
                    PRATINHOS
                    <p>
                      <label>
                        <input
                          onChange={pegarDados}
                          value="1"
                          type="checkbox"
                        />
                        <span>Pratinho - 10</span>
                      </label>
                      <button
                        onClick={() => alterarQuantidade("-", "1")}
                      >
                        -
                      </button>
                      <span>{item.pratinho10}</span>
                      <button
                        onClick={() => alterarQuantidade("+", "1")}
                      >
                        +
                      </button>
                    </p>
                    <p>
                      <label>
                        <input
                          onChange={pegarDados}
                          value="2"
                          type="checkbox"
                        />
                        <span>Pratinho - 15</span>
                      </label>
                      <button
                        onClick={() => alterarQuantidade("-", "pratinho15")}
                      >
                        -
                      </button>
                      <span>{item.pratinho15}</span>
                      <button
                        onClick={() => alterarQuantidade("+", "pratinho15")}
                      >
                        +
                      </button>
                    </p>
                    <p>
                      <label>
                        <input
                          onChange={pegarDados}
                          value="3"
                          type="checkbox"
                        />
                        <span>Pratinho com Lasanha</span>
                      </label>
                      <button
                        onClick={() => alterarQuantidade("-", "pratinhoL")}
                      >
                        -
                      </button>
                      <span>{item.pratinhoL}</span>
                      <button
                        onClick={() => alterarQuantidade("+", "pratinhoL")}
                      >
                        +
                      </button>
                    </p>
                  </div>
                  <div className="col s4">
                    TRAVESSA
                    <p>
                      <label>
                        <input
                          onChange={pegarDados}
                          value="4"
                          type="checkbox"
                        />
                        <span>Lasanha</span>
                      </label>
                      <button onClick={() => alterarQuantidade("-", "lasanha")}>
                        -
                      </button>
                      <span>{item.lasanha}</span>
                      <button onClick={() => alterarQuantidade("+", "lasanha")}>
                        +
                      </button>
                    </p>
                    <p>
                      <label>
                        <input
                          onChange={pegarDados}
                          value="5"
                          type="checkbox"
                        />
                        <span>Torta</span>
                      </label>
                      <button onClick={() => alterarQuantidade("-", "torta")}>
                        -
                      </button>
                      <span>{item.torta}</span>
                      <button onClick={() => alterarQuantidade("+", "torta")}>
                        +
                      </button>
                    </p>
                    <p>
                      <label>
                        <input
                          onChange={pegarDados}
                          value="6"
                          type="checkbox"
                        />
                        <span>Arroz de Forno</span>
                      </label>
                      <button
                        onClick={() => alterarQuantidade("-", "arrozdeforno")}
                      >
                        -
                      </button>
                      <span>{item.arrozdeforno}</span>
                      <button
                        onClick={() => alterarQuantidade("+", "arrozdeforno")}
                      >
                        +
                      </button>
                    </p>
                  </div>
                  <div className="col s4">
                    SALGADOS
                    <p>
                      <label>
                        <input
                          onChange={pegarDados}
                          value="7"
                          type="checkbox"
                        />
                        <span>Salgado</span>
                      </label>
                      <button onClick={() => alterarQuantidade("-", "salgado")}>
                        -
                      </button>
                      <span>{item.salgado}</span>
                      <button onClick={() => alterarQuantidade("+", "salgado")}>
                        +
                      </button>
                    </p>
                    <p>
                      <label>
                        <input
                          onChange={pegarDados}
                          value="8"
                          type="checkbox"
                        />
                        <span>Pastel</span>
                      </label>
                      <button onClick={() => alterarQuantidade("-", "pastel")}>
                        -
                      </button>
                      <span>{item.pastel}</span>
                      <button onClick={() => alterarQuantidade("+", "pastel")}>
                        +
                      </button>
                    </p>
                    <p>
                      <label>
                        <input
                          onChange={pegarDados}
                          value="9"
                          type="checkbox"
                        />
                        <span>Sanduiche Natural</span>
                      </label>
                      <button
                        onClick={() =>
                          alterarQuantidade("-", "sanduicheNatural")
                        }
                      >
                        -
                      </button>
                      <span>{item.sanduicheNatural}</span>
                      <button
                        onClick={() =>
                          alterarQuantidade("+", "sanduicheNatural")
                        }
                      >
                        +
                      </button>
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
                  <div className="col s4">
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
                  <div className="col s4">
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
                  <div className="col s4">
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
                <div className="row">
                  <div className="col s4">
                  CHOCOLATES
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Bolo</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Barra de Chocolate</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Kit-Kat</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Snickers</span>
                      </label>
                    </p>
                  </div>
                  <div className="col s4">
                  BISCOITO
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>RECHEADO - 2.5</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>RECHEADO - 4</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>RECHEADO - 6</span>
                      </label>
                    </p>
                  </div>
                  <div className="col s4">
                    BOMBONS
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Bombom - 3</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Bombom - 4</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Pirulito</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Doce - 1</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Doce - 0.6</span>
                      </label>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <button onClick={produto}>Finalizar Pedido</button>
        </div>
        <div>
          <span>detalhes do pedido</span>
        </div>
      </form>
    </div>
  );
}

