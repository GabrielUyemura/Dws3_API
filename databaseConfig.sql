CREATE TABLE salasdeaula (
    salasdeaulaid SERIAL PRIMARY KEY,       
    descricao VARCHAR(255) NOT NULL,        
    localizacao VARCHAR(255) NOT NULL,      
    capacidade INTEGER NOT NULL,            
    removido BOOLEAN NOT NULL DEFAULT FALSE 
);

INSERT INTO salasdeaula (descricao, localizacao, capacidade, removido) 
VALUES ('Sala de Aula 101', 'Prédio A - 1º andar', 30, FALSE);

INSERT INTO salasdeaula (descricao, localizacao, capacidade, removido) 
VALUES ('Sala de Aula 202', 'Prédio B - 2º andar', 50, FALSE);

INSERT INTO salasdeaula (descricao, localizacao, capacidade, removido) 
VALUES ('Laboratório de Informática', 'Prédio C - 3º andar', 25, FALSE);

INSERT INTO salasdeaula (descricao, localizacao, capacidade, removido) 
VALUES ('Sala de Conferências', 'Prédio D - Térreo', 100, TRUE);

INSERT INTO salasdeaula (descricao, localizacao, capacidade, removido) 
VALUES ('Auditório Principal', 'Prédio E - Subsolo', 200, FALSE);
