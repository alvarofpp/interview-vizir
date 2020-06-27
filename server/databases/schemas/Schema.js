module.exports = class Schema {
  constructor() {
    this.dao = null;
  }

  schema() {
    throw new Error('The schema method must be implemented.');
  }

  seeders() {
    return null;
  }
}