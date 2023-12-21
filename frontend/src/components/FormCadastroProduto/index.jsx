import React from "react";

export default function FormCadastroProduto() {
  const [data, setData] = React.useState({
    name: "",
    value: "",
    categoryId: ""
  });

  const fields = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const limparCampos = () => {
    setData({
      name: "",
      value: "",
      categoryId: ""
    });
  };

  const cadastrar = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        M.toast({ html: "Cadastrado!" });
        limparCampos();
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
          <div className="input-field col s12">
            <input
              value={data.name}
              onChange={fields}
              name="name"
              id="name"
              type="text"
              className="validate"
            />
            <label htmlFor="name">Nome</label>
          </div>

          <div className="input-field col s6">
            <input
              value={data.value}
              onChange={fields}
              name="value"
              id="value"
              type="text"
              className="validate"
            />
            <label htmlFor="value">Valor</label>
          </div>
          <div className="input-field col s6">
            <input
              value={data.categoryId}
              onChange={fields}
              name="categoryId"
              id="categoryId"
              type="text"
              className="validate"
            />
            <label htmlFor="categoryId">Categoria</label>
          </div>
        </div>
        <div className="row">
            <button className="btn waves-effect waves-light" type="submit">
              Finalizar
              <i className="material-icons right">done</i>
            </button>
        </div>
      </form>
    </div>
  );
}
