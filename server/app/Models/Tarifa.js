'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tarifa extends Model {
  static get table () {
    return 'tarifas'
  }

  static get visible() {
    return ['preco', 'ddd_origem', 'ddd_destino',]
  }

  origem () {
    return this.belongsTo('App/Models/Ddd', 'numero', 'ddd_origem')
  }

  destino () {
    return this.belongsTo('App/Models/Ddd', 'numero', 'ddd_destino')
  }
}

module.exports = Tarifa
