var DddsSchema = require('./DddsSchema');
var TarifasSchema = require('./TarifasSchema');


module.exports = [
  new DddsSchema(),
  new TarifasSchema(),
];