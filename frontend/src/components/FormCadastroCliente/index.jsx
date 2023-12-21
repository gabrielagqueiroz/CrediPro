import React from "react";

export default function FormCadastroCliente() {
  const [data, setData] = React.useState({
    name: '',       
    tel: '',
    category: '',
    obs: '',
  });

  const fields = (e) => {
    const {name, value} = e.target;

    setData({...data, [name]: value});
    
  };

  const limparCampos = () => {
    setData({
      name: '',
      tel: '',
      category: '',
      obs: '',
    });
  };

  const cadastrar = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/cadastro', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        M.toast({ html: 'Cadastrado!' });
        limparCampos();

      } else {
        M.toast({ html: 'Erro ao cadastrar.' });
      }

    } catch (error) {
      console.error('Erro na solicitação', error);
    }
  

  }

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
            <label htmlFor="name">Nome do Cliente</label>
          </div>

          <div className="input-field col s6">
            <input
              value={data.tel}
              onChange={fields}
              name="tel"
              id="tel"
              type="text"
              className="validate"
            />
            <label htmlFor="tel">Telefone</label>
          </div>
          <div className="input-field col s6">
            <input
              value={data.category}
              onChange={fields}
              name="category"
              id="category"
              type="text"
              className="validate"
            />
            <label htmlFor="category">Categoria</label>
          </div>  
        </div> 
        <div className="row">
          <div className="input-field col s7">
            <input
              value={data.obs}
              onChange={fields}
              name="obs"
              id="obs"
              type="text"
              className="validate"
            />
            <label htmlFor="obs">Observações:</label>
          </div>
          <div className="input-field col s5">
            <button className="btn waves-effect waves-light" type="submit">
              Finalizar
              <i className="material-icons right">done</i>
            </button>
           
          </div>
        </div>
      </form>
    </div>
  );
}
