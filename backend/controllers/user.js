import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM tb_user";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const postUsers = (req, res) => {

    const body = req.body

    console.log(body)

  const q = "INSERT INTO tb_user(nome, category, telefone, obs ) VALUES(?)";

  const values = [req.body.name, req.body.category, req.body.tel, req.body.obs];

  db.query(q, [values], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao cadastrar usuário" });
    } else {
      return res.status(200).json("Usuário cadastrado com sucesso");
    }
  });
};
