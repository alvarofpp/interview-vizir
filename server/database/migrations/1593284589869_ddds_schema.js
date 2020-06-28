'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DddsSchema extends Schema {
  up () {
    this.create('ddds', (table) => {
      table.string('numero', 3)
        .notNullable();
      table.string('regiao', 50)
        .notNullable();
      table.string('uf_sigla', 2)
        .unsigned()
        .references('sigla')
        .inTable('ufs')
        .onDelete('cascade')
        .onUpdate('no action');
      table.primary(['numero',]);
    })
  }

  down () {
    this.drop('ddds')
  }
}

module.exports = DddsSchema
