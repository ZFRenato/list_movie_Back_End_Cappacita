<h1 align="center">
    Cappacita List Movies
</h1>

# Índice

- [Índice](#índice)
  - [Problemática](#problemática)
  - [Solução](#solução)
  - [🚀 Tecnologias utilizadas](#-tecnologias-utilizadas)
  - [Repositorio Front End](#repositorio-front-end)
  - [- Repositorio Frond End o Git)](#--repositorio-frond-end-o-git)
  - [💾 Como baixar o projeto](#-como-baixar-o-projeto)
  - [Tabelas criadas no Workbench](#tabelas-criadas-no-workbench)

---

## Problemática

"Resolução do Desafio Final Cappacita Dev Fase Hero"

---

## Solução

Uma Página Web com lista de Filmes e Séries


---

## 🚀 Tecnologias utilizadas

o projeto foi desenvolvido usando as seguintes tecnologias:

- [Node.js](https://nodejs.org/pt-br/docs/)
- [Express.js](http://expressjs.com/pt-br/)
- [Knex](http://knexjs.org/)
- [MySQL](https://dev.mysql.com/doc/)
- Cors

---
## Repositorio Front End 

- Repositorio Frond End o [Git](https://github.com/ZFRenato/frondEndHero.git))
---

## 💾 Como baixar o projeto

- Primeiro instale o [Git](https://git-scm.com/), [Node.jS](https://nodejs.org/pt-br/download/) + [npm](https://www.npmjs.com/get-npm)
```bash
# Clonar o repositório
git clone https://github.com/ZFRenato/list_movie_Back_End_Cappacita.git

# Entrar no diretório

# Instalar as dependências
npm install

# Rodar o projeto
npm run dev
```
---

- Crie um arquivo .env na pasta raíz do projeto com as suas informações:

```
# Port on Server

PORT=3003

# API KEY TMDB

API_KEY='afa2c6121abf0d5491a44c14a200b3a0'

# CONNECTION DATABASE

MYSQL_HOST= Host database
MYSQL_USER= user
MYSQL_PASS= password
MYSQL_DATABASE= database
```

## Tabelas criadas no Workbench

```sql
/* CRIAR TABELA USER */

CREATE TABLE IF NOT EXISTS user(
    `id` INT PRIMARY KEY AUTO_INCREMENT ,
    `nome` VARCHAR (100) NOT NULL,
    `email` VARCHAR (50) NOT NULL,
    `senha` VARCHAR (6) NOT NULL
);



/* CRIAR TABELA MY_LIST  */

CREATE TABLE IF NOT EXISTS my_list(
    `id_user` INT NOT NULL,
    `id_tmdb` INT NOT NULL,
    `type` VARCHAR(6) NOT NULL,    
    CONSTRAINT fk_id_user FOREIGN KEY (id_user) REFERENCES user (id)
);
```


```

Desenvolvido com 🧡 por:
  
- Renato Carlos 
   [GitHub](https://github.com/ZFRenato) | [Linkedin](https://www.linkedin.com/in/renato-carvalho-82129420b)
