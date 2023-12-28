import { db } from "../db.js";

 export const postOrder = (req, res) => {
    const { userId } = req.params;
  
    const query_order = "INSERT INTO tb_orders (user_id) VALUES(?)";
    const values_order = [parseInt(userId)];
  
    db.query(query_order, values_order, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Erro ao cadastrar pedido" });
      } 
      
      const orderId = result.insertId;
      
      const query_Items =
        "INSERT INTO tb_orderItems (order_id, product_id, quantidade, total, desconto) VALUES (?)";
       const values_Items = req.body.map((item) => [
        orderId,
        item.product_id,
        item.quantidade,
        item.total,
        item.desconto,
      ]);
  
      console.log(req.body)
      
      db.query(query_Items, [values_Items], (errItems) => {
        if (errItems) {
          console.error(errItems);
          return res.status(500).json({ error: "Erro ao cadastrar itens" });
        }
  
        return res.status(200).json("Pedido cadastrado com sucesso");
      });
    });
  };