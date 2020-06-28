'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TarifasSchema extends Schema {
  up() {
    this.create('tarifas', (table) => {
      table.increments()
      table.float('preco', 5, 2)
        .notNullable();
      table.string('ddd_origem', 2)
        .unsigned()
        .references('numero')
        .inTable('ddds')
        .onDelete('cascade')
        .onUpdate('no action');
      table.string('ddd_destino', 2)
        .unsigned()
        .references('numero')
        .inTable('ddds')
        .onDelete('cascade')
        .onUpdate('no action');
      table.timestamps();
    })
  }

  down() {
    this.drop('tarifas')
  }
}

module.exports = TarifasSchema
