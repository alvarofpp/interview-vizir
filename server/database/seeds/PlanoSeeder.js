'use strict'

/*
|--------------------------------------------------------------------------
| PlanSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const Plano = use('App/Models/Plano');

class PlanoSeeder {
  async run () {
    await Plano.createMany([
      {nome: 'FaleMais 30', minutos: 30, taxa: 1.1, grupo: 'FaleMais',},
      {nome: 'FaleMais 60', minutos: 60, taxa: 1.1, grupo: 'FaleMais',},
      {nome: 'FaleMais 120', minutos: 120, taxa: 1.1, grupo: 'FaleMais',},
    ]);
  }
}

module.exports = PlanoSeeder
