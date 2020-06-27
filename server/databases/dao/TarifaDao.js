var Dao = require('./Dao');


module.exports = class DddsDao extends Dao {
  constructor() {
    super();
    this.table = 'tarifas';
    this.attributes = ['origem', 'destino', 'preco',];
  }
}