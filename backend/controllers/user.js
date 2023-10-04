import {db} from '../db.js';

export const getUsers = (_, res) => {
    const q = "SELECT * FROM tb_user";

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};


export const postUsers = (req, res) => {
    const q = "INSERT INT tb_user('nome', 'telefone', 'obs' ) VALUES(?)";

    const values = [
        req.body.name,
        req.body.tel,
        req.body.obs,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário cadastrado com sucesso")
    })
}







