import { db } from "../db.js";


export const getUsers = (_, res) => {
  const query_users = "SELECT * FROM tb_user";

  db.query(query_users, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const postUsers = (req, res) => {
  const query_user =
    "INSERT INTO tb_user (name, category, tel, obs ) VALUES(?)";
  const values = [
    req.body.name,
    req.body.category,
    req.body.tel,
    req.body.obs,
  ];

  db.query(query_user, [values], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao cadastrar usuário" });
    } else {
      return res.status(200).json("Usuário cadastrado com sucesso");
    }
  });
};





