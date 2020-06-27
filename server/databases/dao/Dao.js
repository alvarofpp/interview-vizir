module.exports = class Dao {
  constructor() {
    this.table = null;
    this.attributes = null;
  }

  insert() {
    const fields = this.attributes.join(',');
    const binds = this.attributes.reduce((binds) => binds + '?,', '').slice(0, -1);

    return `INSERT INTO ${this.table} (${fields}) VALUES (${binds})`;
  }

  select(fields = '*') {
    if (Array.isArray(fields)) {
      fields = fields.join(',');
    }

    return `SELECT ${fields} FROM ${this.table}`;
  }

  update() {
    throw new Error('The update method must be implemented.');
  }

  delete() {
    throw new Error('The delete method must be implemented.');
  }
}