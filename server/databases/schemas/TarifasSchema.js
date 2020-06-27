var Schema = require('./Schema');
var TarifaDao = require('../dao/TarifaDao');


module.exports = class TarifasSchema extends Schema {
  constructor() {
    super();
    this.dao = new TarifaDao();
  }

  schema() {
    return `CREATE TABLE tarifas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            origem VARCHAR(2),
            destino VARCHAR(2),
            preco REAL,
            CONSTRAINT nome_unique UNIQUE (origem,destino),
            FOREIGN KEY (origem) 
              REFERENCES ddds (ddd) 
                 ON DELETE CASCADE 
                 ON UPDATE NO ACTION,
            FOREIGN KEY (destino) 
              REFERENCES ddds (ddd) 
                 ON DELETE CASCADE 
                 ON UPDATE NO ACTION
            )`;
  }

  seeders() {
    return [
      ['011', '016', 1.9],
      ['016', '011', 2.9],
      ['011', '017', 1.7],
      ['017', '011', 2.7],
      ['011', '018', 0.9],
      ['018', '011', 1.9],
    ];
  }
}