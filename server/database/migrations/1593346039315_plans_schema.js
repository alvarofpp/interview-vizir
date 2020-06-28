'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlansSchema extends Schema {
  up () {
    this.create('planos', (table) => {
      table.increments()
      table.string('nome', 50)
        .notNullable()
        .unique();
      table.integer('minutos')
        .notNullable();
      table.float('taxa', 5, 2)
        .notNullable();
      table.string('grupo', 50);
      table.timestamps();
    })
  }

  down () {
    this.drop('planos')
  }
}

module.exports = PlansSchema
