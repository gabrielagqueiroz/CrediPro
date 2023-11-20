import React from "react";

export default function FormPedido() {
  const [data, setData] = React.useState([]);

  const selectData = (e) => {
    const fields = Array.from(e.target.fields, (option) => option.value);
    setData(fields);
    console.log(data)
  }
 
  return (
    <div className="container">
      <form >
        <div className="row">
          <div className="input-field col s4">
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
            </button>
          
        </div>
      </form>
    </div>
  );
}




/* const cadastrar = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:8000/cadastro/pedido/:userId", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      M.toast({ html: "Cadastrado!" });
      
    } else {
      M.toast({ html: "Erro ao cadastrar." });
    }
  } catch (error) {
    console.error("Erro na solicitação", error);
  }
}; */