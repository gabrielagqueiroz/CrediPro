import { db } from "../db.js";

/* export const getProducts = (_, res) => {
  const query_products = "SELECT * FROM tb_products";

  db.query(query_products, (err, data) => {
    if (err) {
      console.error("Erro ao executar a consulta ao banco de dados:", err);
      return res.status(500).json({ error: "Erro ao buscar produtos." });
    }

    console.log("Dados da tabela de produtos:", data);
    return res.status(200).json(data);
  });
}; */

export const postProducts = (req, res) => {
  const query_products =
    "INSERT INTO tb_products (name, value, category_id ) VALUES(?)";
  const values = [req.body.name, req.body.value, parseInt(req.body.categoryId)];

  db.query(query_products, [values], (err) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({
          error: "Erro ao cadastrar produto",
          errorMessage: err.message,
        });
    } else {
      return res.status(200).json("Produto cadastrado com sucesso");
    }
  });
};
