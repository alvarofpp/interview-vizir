/* Código simplório, apenas para fornecer o serviço para a aplicação */

// Create express app
var express = require('express')
  , app = express()
  , routes = require('../app/routes')
  , path = require('path')
  , cors = require("cors")
  , bodyParser = require('body-parser')
  , db = require("../databases/database.js");

app.use(cors());

// Server port
const HTTP_PORT = 8000

// Start server
app.listen(HTTP_PORT, () => {
  console.log(`Servidor rodando na porta ${HTTP_PORT}`)
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
routes(app);


module.exports = app;