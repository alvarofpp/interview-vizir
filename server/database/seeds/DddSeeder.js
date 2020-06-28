'use strict'

/*
|--------------------------------------------------------------------------
| DddSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const Ddd = use('App/Models/Ddd');

class DddSeeder {
  async run() {
    await Ddd.createMany([
      {numero: '011', regiao: 'São Paulo', uf_sigla: 'SP',},
      {numero: '016', regiao: 'Ribeirão Preto', uf_sigla: 'SP',},
      {numero: '017', regiao: 'São José do Rio Preto', uf_sigla: 'SP',},
      {numero: '018', regiao: 'Presidente Prudente', uf_sigla: 'SP',}
    ]);
  }
}

module.exports = DddSeeder;
