import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM tb_user";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};



export const postUsers = (req, res) => {

  const query_user = "INSERT INTO tb_user (nome, category, telefone, obs ) VALUES(?)";
  const values = [req.body.name, req.body.category, req.body.telefone, req.body.obs];

  db.query(query_user, [values], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao cadastrar usuário" });
    } else {
      return res.status(200).json("Usuário cadastrado com sucesso");
    }
  });
};


export const postOrder = (req, res) => {

  const {userId} = req.params;
  
  const query_order = "INSERT INTO tb_orders (user_id) VALUES(?)";
  const values_order = [userId];

  const query_items = "INSERT INTO tb_items () VALUES(?)"
  const values_items = [req.body.value]

  db.query(query_order, values_order, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao cadastrar pedido" });
    } else {
      db.query(query_items, values_items, (errItems) => {
        if (errItems) {
          console.error(errItems);
          return res.status(500).json({ error: "Erro ao cadastrar itens" });
        } else {
          return res.status(200).json("Pedido cadastrado com sucesso");
        }
      });
    }
  });
};