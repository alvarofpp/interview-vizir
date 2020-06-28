'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Uf extends Model {
  static boot() {
    super.boot()
    this.addTrait('NoTimestamp')
  }

  static get table () {
    return 'ufs'
  }

  static get primaryKey() {
    return 'sigla'
  }

  static get incrementing() {
    return false
  }

  static get visible() {
    return ['codigo', 'sigla', 'nome',]
  }

  ddds() {
    return this.hasMany('App/Models/Ddd', 'sigla', 'uf_sigla')
  }
}

module.exports = Uf
