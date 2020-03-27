const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();//instanciando a aplicação, criando;

app.use(cors());
app.use(express.json());//informa que o formato utilizado para o corpo das requisições será JSON 
app.use(routes);

/**
 * Rota / recurso
 */
/**
 * Métodos HTTP
 * 
 * GET: Buscar/listar uma informação do back-end;
 * POST: Criar uma informação no back-end; como cadastro
 * PUT: Alterar uma informação no back-end;
 * DELETE: Deletar uma informação no back-end;
 * 
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviado na rota após "?" (Filtros, paginação) ?nome=thallys&idade=18
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * Banco de dados:
   * SQL: MySQL, SQLite, PostgreSQL...
   * NoSQL: MongoDB, couchDB...
   */

app.listen(3333);//fica "ouvindo" a porta, não apenas executa