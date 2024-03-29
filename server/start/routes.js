'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome');

// Ufs
Route.get('ufs', 'UfController.index')
  .validator('Uf/IndexRequest');

// Ddds
Route.resource('ddds', 'DddController')
  .apiOnly()
  .validator(new Map([
    [['ddds.index'], ['Ddd/IndexRequest']],
    [['ddds.store'], ['Ddd/StoreRequest']],
    [['ddds.show'], ['Ddd/ShowRequest']],
    [['ddds.update'], ['Ddd/UpdateRequest']],
    [['ddds.destroy'], ['Ddd/DestroyRequest']],
  ]));

// Tarifas
Route.resource('tarifas', 'TarifaController')
  .apiOnly()
  .validator(new Map([
    [['tarifas.index'], ['Tarifa/IndexRequest']],
    [['tarifas.store'], ['Tarifa/StoreRequest']],
    [['tarifas.show'], ['Tarifa/ShowRequest']],
    [['tarifas.update'], ['Tarifa/UpdateRequest']],
    [['tarifas.destroy'], ['Tarifa/DestroyRequest']],
  ]));
Route.get('/tarifas_ddds', 'TarifaController.getDdds');

// Planos
Route.resource('planos', 'PlanoController')
  .apiOnly()
  .validator(new Map([
    [['planos.index'], ['Plano/IndexRequest']],
    [['planos.store'], ['Plano/StoreRequest']],
    [['planos.show'], ['Plano/ShowRequest']],
    [['planos.update'], ['Plano/UpdateRequest']],
    [['planos.destroy'], ['Plano/DestroyRequest']],
  ]));

// Simulação
Route.post('/simulacao', 'SimulacaoController.simular')
  .validator('Simulacao/SimularRequest');
