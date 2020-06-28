'use strict'

/*
|--------------------------------------------------------------------------
| TarifaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const Tarifa = use('App/Models/Tarifa');

class TarifaSeeder {
  async run() {
    await Tarifa.createMany([
      {ddd_origem: '011', ddd_destino: '016', preco: 1.9,},
      {ddd_origem: '016', ddd_destino: '011', preco: 2.9,},
      {ddd_origem: '011', ddd_destino: '017', preco: 1.7,},
      {ddd_origem: '017', ddd_destino: '011', preco: 2.7,},
      {ddd_origem: '011', ddd_destino: '018', preco: 0.9,},
      {ddd_origem: '018', ddd_destino: '011', preco: 1.9,},
    ]);
  }
}

module.exports = TarifaSeeder;
