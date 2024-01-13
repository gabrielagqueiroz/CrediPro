import React from "react";

export default function FormPedido({ userId }) {
  const [item, setItem] = React.useState([]);

  React.useEffect(() => {
  const produto = async (e) => {
    try {
      const response = await fetch(`http://localhost:8000/cadastro/pedido/${userId}`);
      if(!response.ok) {
        M.toast({ html: "Erro na solicitação da API" });
      }

      const data = await response.json();
      const itemsQtd = data.map((item) => ({...item, qtd:0}));
      setItem(itemsQtd);
      console.log("pedidos", itemsQtd);

    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  produto()
}, [userId])

  const alterarQtd = (button, itemId) => {
    console.log(`alterarQtd chamada com botao: ${button}, itemId: ${itemId}`);
    setItem((prevItems) => {
      return prevItems.map((prevItem) => {
        if (prevItem.id === itemId) {
          const novaQtd =
            button === "+" ? (prevItem.qtd < 20 ? prevItem.qtd + 1 : prevItem.qtd) : (prevItem.qtd > 0 ? prevItem.qtd - 1 : prevItem.qtd);

            console.log(`Nova quantidade para item ${prevItem.id}: ${novaQtd}`);

          return { ...prevItem, qtd: novaQtd };
        }
        return prevItem;
      });
    });
  };

  const pegarDados = (e) => {
  const itemId = e.target.id;
  const itemQtd = e.target.checked ? 1 : 0;

  setItem((prevItems) => {
    return prevItems.map((prevItem) =>
      prevItem.id === itemId ? { ...prevItem, qtd: itemQtd } : prevItem
    );
  });
};


  


  const cadastrar = async (e) => {
    e.preventDefault();

   /*  try {
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
    } */
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
                    {item.map((currentItem) => {
                      if(currentItem.category_id === 1) {
                        return (
                          <p key={currentItem.id}>
                      <label>
                        <input
                          onChange={pegarDados}
                          name= {currentItem.name}
                          id= {currentItem.id}
                          value={currentItem.qtd}
                          type="checkbox"
                        />
                        <span>{currentItem.name}</span>
                      </label>
                      <button
                        onClick={() => alterarQtd("-", `${currentItem.id}`)}
                      >
                        -
                      </button>
                      <span>{currentItem.qtd}</span>
                      <button
                        onClick={() => alterarQtd("+", `${currentItem.id}`)}
                      >
                        +
                      </button>
                    </p>
                        )
                      }
                    })}
                  </div>
                  <div className="col s4">
                    TRAVESSA
                    {item.map((currentItem) => {
                      if (currentItem.category_id === 2) {
                        return (
                          <p key={currentItem.id}>
                      <label>
                        <input
                          onChange={pegarDados}
                          name= {currentItem.name}
                          id= {currentItem.id}
                          value={currentItem.qtd}
                          type="checkbox"
                        />
                        <span>{currentItem.name}</span>
                      </label>
                      <button
                        onClick={() => alterarQtd("-", `${currentItem.id}`)}
                      >
                        -
                      </button>
                      <span>{currentItem.qtd}</span>
                      <button
                        onClick={() => alterarQtd("+", `${currentItem.id}`)}
                      >
                        +
                      </button>
                    </p>
                        )
                      }
                    })}
                  </div>
                  <div className="col s4">
                    SALGADO
                    {item.map((currentItem) => {
                      if(currentItem.category_id === 3) {
                        return (
                          <p key={currentItem.id}>
                      <label>
                        <input
                          onChange={pegarDados}
                          name= {currentItem.name}
                          id= {currentItem.id}
                          value={currentItem.qtd}
                          type="checkbox"
                        />
                        <span>{currentItem.name}</span>
                      </label>
                      <button
                        onClick={() => alterarQtd("-", `${currentItem.id}`)}
                      >
                        -
                      </button>
                      <span>{currentItem.qtd}</span>
                      <button
                        onClick={() => alterarQtd("+", `${currentItem.id}`)}
                      >
                        +
                      </button>
                    </p>
                        )
                      }
                    })}
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
                    {item.map((currentItem) => {
                      if(currentItem.category_id === 4) {
                        return (
                          <p key={currentItem.id}>
                      <label>
                        <input
                          onChange={pegarDados}
                          name= {currentItem.name}
                          id= {currentItem.id}
                          value={currentItem.qtd}
                          type="checkbox"
                        />
                        <span>{currentItem.name}</span>
                      </label>
                      <button
                        onClick={() => alterarQtd("-", `${currentItem.id}`)}
                      >
                        -
                      </button>
                      <span>{currentItem.qtd}</span>
                      <button
                        onClick={() => alterarQtd("+", `${currentItem.id}`)}
                      >
                        +
                      </button>
                    </p>
                        )
                      }
                    })}
                  </div>
                  <div className="col s4">
                    LATA
                    {item.map((item) => {
                      if(item.category_id === 5) {
                        return (
                          <p key={item.id}>
                      <label>
                        <input
                          onChange={pegarDados}
                          name= {item.name}
                          id= {item.id}
                          value={item.qtd}
                          type="checkbox"
                        />
                        <span>{item.name}</span>
                      </label>
                      <button
                        onClick={() => alterarQtd("-", `${item.id}`)}
                      >
                        -
                      </button>
                      <span>{item.qtd}</span>
                      <button
                        onClick={() => alterarQtd("+", `${item.id}`)}
                      >
                        +
                      </button>
                    </p>
                        )
                      }
                    })}
                  </div>
                  <div className="col s4">
                    SUCO
                    {item.map((item) => {
                      if(item.category_id === 6) {
                        return (
                          <p key={item.id}>
                      <label>
                        <input
                          onChange={pegarDados}
                          name= {item.name}
                          id= {item.id}
                          value={item.qtd}
                          type="checkbox"
                        />
                        <span>{item.name}</span>
                      </label>
                      <button
                        onClick={() => alterarQtd("-", `${item.id}`)}
                      >
                        -
                      </button>
                      <span>{item.qtd}</span>
                      <button
                        onClick={() => alterarQtd("+", `${item.id}`)}
                      >
                        +
                      </button>
                    </p>
                        )
                      }
                    })}
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
                  {item.map((item) => {
                      if(item.category_id === 7) {
                        return (
                          <p key={item.id}>
                      <label>
                        <input
                          onChange={pegarDados}
                          name= {item.name}
                          id= {item.id}
                          value={item.qtd}
                          type="checkbox"
                        />
                        <span>{item.name}</span>
                      </label>
                      <button
                        onClick={() => alterarQtd("-", `${item.id}`)}
                      >
                        -
                      </button>
                      <span>{item.qtd}</span>
                      <button
                        onClick={() => alterarQtd("+", `${item.id}`)}
                      >
                        +
                      </button>
                    </p>
                        )
                      }
                    })}
                  </div>
                  <div className="col s4">
                  BISCOITO
                  {item.map((item) => {
                      if(item.category_id === 8) {
                        return (
                          <p key={item.id}>
                      <label>
                        <input
                          onChange={pegarDados}
                          name= {item.name}
                          id= {item.id}
                          value={item.qtd}
                          type="checkbox"
                        />
                        <span>{item.name}</span>
                      </label>
                      <button
                        onClick={() => alterarQtd("-", `${item.id}`)}
                      >
                        -
                      </button>
                      <span>{item.qtd}</span>
                      <button
                        onClick={() => alterarQtd("+", `${item.id}`)}
                      >
                        +
                      </button>
                    </p>
                        )
                      }
                    })}
                  </div>
                  <div className="col s4">
                    BOMBONS
                    {item.map((item) => {
                      if(item.category_id === 9) {
                        return (
                          <p key={item.id}>
                      <label>
                        <input
                          onChange={pegarDados}
                          name= {item.name}
                          id= {item.id}
                          value={item.qtd}
                          type="checkbox"
                        />
                        <span>{item.name}</span>
                      </label>
                      <button
                        onClick={() => alterarQtd("-", `${item.id}`)}
                      >
                        -
                      </button>
                      <span>{item.qtd}</span>
                      <button
                        onClick={() => alterarQtd("+", `${item.id}`)}
                      >
                        +
                      </button>
                    </p>
                        )
                      }
                    })}
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <button>Finalizar Pedido</button>
        </div>
        <div>
          <span>detalhes do pedido</span>
        </div>
      </form>
    </div>
  );
}
