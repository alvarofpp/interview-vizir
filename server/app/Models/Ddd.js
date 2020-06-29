'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ddd extends Model {
  static boot() {
    super.boot()
    this.addTrait('NoTimestamp')
  }

  static get table () {
    return 'ddds'
  }

  static get primaryKey() {
    return 'numero'
  }

  static get incrementing() {
    return false
  }

  static get visible() {
    return ['numero', 'regiao', 'uf_sigla',]
  }

  uf () {
    return this.belongsTo('App/Models/Uf', 'uf_sigla', 'sigla')
  }

  tarifas_origem () {
    return this.hasMany('App/Models/Tarifa', 'numero', 'ddd_origem')
  }

  tarifas_destino () {
    return this.hasMany('App/Models/Tarifa', 'numero', 'ddd_destino')
  }
}

module.exports = Ddd
