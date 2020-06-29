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
    return this.belongsTo('App/Models/Ddd', 'ddd_origem', 'numero')
  }

  destino () {
    return this.belongsTo('App/Models/Ddd', 'ddd_destino', 'numero')
  }
}

module.exports = Tarifa
