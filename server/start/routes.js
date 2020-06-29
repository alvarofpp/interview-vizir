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
Route.get('ufs', 'UfController.index');

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
  .except(['show']);
Route.get('/tarifas/ddds', 'TarifaController.getDdds');

// Planos
Route.resource('planos', 'PlanoController')
  .apiOnly()
  .except(['show']);

// Simulação
Route.post('/simulacao', 'SimulacaoController.simular')
