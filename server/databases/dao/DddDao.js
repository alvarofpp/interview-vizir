var Dao = require('./Dao');


module.exports = class DddsDao extends Dao {
  constructor() {
    super();
    this.table = 'ddds';
    this.attributes = ['ddd', 'regiao', 'uf',];
  }
}