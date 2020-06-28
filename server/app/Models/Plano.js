'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Plano extends Model {
  static get table () {
    return 'planos'
  }

  static get visible() {
    return ['id', 'nome', 'minutos', 'taxa', 'grupo',]
  }
}

module.exports = Plano
