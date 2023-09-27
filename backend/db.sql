CREATE TABLE tb_user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    user_category INT NOT NULL,
    telefone VARCHAR(45),
    valor_total DECIMAL(10,2)
);


INSERT INTO tb_user (nome, user_category, telefone) 
VALUES 
('Gabriela', 4, '85994351703'), 
('Jonas', 4, '85999303298');

ALTER TABLE tb_user
MODIFY COLUMN telefone VARCHAR NULL;


CREATE TABLE tb_categoria_cliente(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30)
);

INSERT INTO tb_categoria (nome) VALUES ('Comidas');




CREATE TABLE tb_produtos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    valor DECIMAL(10,2) NOT NULL, 
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES tb_categoria(id)
);


INSERT INTO tb_produtos (nome, valor, categoria_id) VALUES ('Pratinho 10', 10.00, 1);

INSERT INTO tb_categoria_cliente (nome)
VALUES
    ('Funcionário'),
    ('Acomapanhante'),
    ('Cliente'),
    ('Outro');


UPDATE tb_produtos
SET nome = 'Lasanha'
WHERE id = 3;




CREATE TABLE tb_order (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT,
    produto_id INT,
    quantidade INT,
    valor_total DECIMAL(10, 2),
    FOREIGN KEY (usuario_id) REFERENCES tb_user(id),
    FOREIGN KEY (produto_id) REFERENCES tb_product(id)
);


 INSERT INTO tb_order (usuario_id, produto_id, quantidade)
VALUES
    (1, 1, 1), 
    (1, 1, 1); 


    ALTER TABLE tb_user
ADD COLUMN data_insercao TIMESTAMP DEFAULT CURRENT_TIMESTAMP;