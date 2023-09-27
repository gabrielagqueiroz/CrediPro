
export default function Cadastro() {

  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="input-field col s12">
            <input id="first_name" type="text" className="validate" />
            <label htmlFor="first_name">Nome do Cliente</label>
          </div>

          <div className="input-field col s6">
            <input id="tel" type="tel" className="validate" />
            <label htmlFor="tel">Telefone</label>
          </div>
          <div class="input-field col s6">
            <select>
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="1">São Carlos</option>
              <option value="2">cliente</option>
              <option value="3">Outro</option>
            </select>
            <label>Tipo Cliente</label>
          </div>
        </div>
        <div className="row">
          <div class="input-field col s4">
            <select multiple>
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
          <div class="input-field col s4">
            <select multiple>
              <optgroup label="Garrafinha">
                <option value="1">Coquinha</option>
                <option value="2">São Gerardo</option>
                <option value="3">Guaraná</option>
                <option value="4">Grappet/Uva</option>
                <option value="5">Fanta/Laranja</option>
                <option value="6">Soda/Limão</option>
                <option value="7">Pepsi</option>
              </optgroup>
              <optgroup label="Lata">
                <option value="8">Coca Cola</option>
                <option value="9">Guaraná</option>
                <option value="10">Fanta/Laranja</option>
                <option value="11">Fanta/Uva</option>
                <option value="12">Sprite/Limão</option>
                <option value="13">Pepsi</option>
              </optgroup>
              <optgroup label="Suco">
                <option value="14">Goiaba</option>
                <option value="15">Tamarindo</option>
                <option value="16">Acerola</option>
                <option value="17">Cajá</option>
                <option value="18">Cajú</option>
                <option value="19">Limão</option>
                <option value="20">Manga</option>
                <option value="21">Maracujá</option>
              </optgroup>
            </select>
            <label>Bebidas</label>
          </div>
          <div class="input-field col s4">
            <select multiple>
              <optgroup label="Chocolates">
                <option value="1">Barra</option>
                <option value="2">KitKat</option>
                <option value="3">Snickers</option>
              </optgroup>
              <optgroup label="Bombom">
                <option value="4">Bombom 3</option>
                <option value="5">Bombom 4</option>
                <option value="6">Pirulito</option>
              </optgroup>
            </select>
            <label>Doces</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
           <input id="first_name" type="text" className="validate" />
            <label htmlFor="first_name">Observações:</label>
          </div>
        </div>
      </form>
    </div>
  );
}
