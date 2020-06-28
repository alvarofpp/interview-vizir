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
Route.get('/ufs', 'UfController.index');

// Ddds
Route.get('/ddds', 'DddController.index');

// Tarifas
Route.get('/tarifas', 'TarifaController.index');
Route.get('/tarifas/ddds', 'TarifaController.getDdds');

// Planos
Route.get('/planos', 'PlanoController.index');

// Simulação
Route.post('/simulacao', 'SimulacaoController.simular')
