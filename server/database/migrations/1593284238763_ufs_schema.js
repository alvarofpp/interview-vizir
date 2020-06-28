'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UfsSchema extends Schema {
  up() {
    this.create('ufs', (table) => {
      table.string('sigla', 2).notNullable();
      table.integer('codigo').notNullable().unique();
      table.string('nome', 50).notNullable().unique();
      table.primary(['sigla',]);
    })
  }

  down() {
    this.drop('ufs');
  }
}

module.exports = UfsSchema;
