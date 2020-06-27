var Schema = require('./Schema');
var DddsDao = require('../dao/DddDao');


module.exports = class DddsSchema extends Schema {
  constructor() {
    super();
    this.dao = new DddsDao();
  }

  schema() {
    return `CREATE TABLE ddds (
            ddd VARCHAR(3) PRIMARY KEY,
            regiao TEXT,
            uf VARCHAR(2)
            )`;
  }

  seeders() {
    return [
      ['011', 'São Paulo', 'SP',],
      ['016', 'Ribeirão Preto', 'SP',],
      ['017', 'São José do Rio Preto', 'SP',],
      ['018', 'Presidente Prudente', 'SP',],
    ];
  }
}