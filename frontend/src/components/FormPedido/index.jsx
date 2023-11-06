import React from "react";

export default function FormPedido() {
  const [data, setData] = React.useState([]);

  const fields = (e) => {
    e.preventDefault();
    console.log(data)
  };

  const cadastrar = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/cadastro/pedido", {
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
  };
 
  return (
    <div className="container">
      <form >
        <div className="row">
          <div className="input-field col s4">
            <select multiple onChange={(item) => setData(item)}>
              <optgroup label="Pratinho">
                <option value="Pratinho 10">Pratinho 10</option>
                <option value="Pratinho 15">Pratinho 15</option>
              </optgroup>
              <optgroup label="Travessa">
                <option value="Lasanha">Lasanha</option>
                <option value="Arroz de forno">Arroz de forno</option>
              </optgroup>
              <optgroup label="Salgado">
                <option value="Coxinha">Coxinha</option>
                <option value="Pastel">Pastel</option>
                <option value="Torta">Torta</option>
              </optgroup>
            </select>
            <label>Comidas</label>
          </div>

          <div className="input-field col s4">
            <select multiple onChange={(item) => setData(item)}>
              <optgroup label="Garrafinha">
                <option value="Coquinha">Coquinha</option>
                <option value="São Gerardo">São Gerardo</option>
                <option value="Guaraná">Guaraná</option>
                <option value="Grappet/Uva">Grappet/Uva</option>
                <option value="Fanta/Laranja">Fanta/Laranja</option>
                <option value="Soda/Limão">Soda/Limão</option>
                <option value="Pepsi">Pepsi</option>
              </optgroup>
              <optgroup label="Lata">
                <option value="Coca Cola">Coca Cola</option>
                <option value="Guaraná">Guaraná</option>
                <option value="Fanta/Laranja">Fanta/Laranja</option>
                <option value="Fanta/Uva">Fanta/Uva</option>
                <option value="Sprite/Limão">Sprite/Limão</option>
                <option value="Pepsi">Pepsi</option>
              </optgroup>
              <optgroup label="Suco">
                <option value="Goiaba">Goiaba</option>
                <option value="Tamarindo">Tamarindo</option>
                <option value="Acerola">Acerola</option>
                <option value="Cajá">Cajá</option>
                <option value="Cajú">Cajú</option>
                <option value="Limão">Limão</option>
                <option value="Manga">Manga</option>
                <option value="Maracujá">Maracujá</option>
              </optgroup>
            </select>
            <label>Bebidas</label>
          </div>
          <div className="input-field col s4">
            <select multiple onChange={(item) => setData(item)}>
              <optgroup label="Chocolates">
                <option value="Bolo">Bolo</option>
                <option value="Barra">Barra</option>
                <option value="Kit-Kat">Kit-Kat</option>
                <option value="Snickers">Snickers</option>
              </optgroup>
              <optgroup label="Bombom">
                <option value="Bombom 3">Bombom 3</option>
                <option value="Bombom 4">Bombom 4</option>
                <option value="Pirulito">Pirulito</option>
              </optgroup>
            </select>
            <label>Doces</label>
          </div>
            <input
              name="obs"
              id="obs"
              type="text"
              className="validate"
            />
            <label htmlFor="obs">Observações:</label>
            
            <button onClick={fields} className="btn waves-effect waves-light" type="submit">
              Finalizar
              <i className="material-icons right">done</i>
            </button>
        
        </div>
      </form>
    </div>
  );
}
