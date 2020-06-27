var schemas = require('./schemas');
var sqlite3 = require('sqlite3').verbose();
const DBSOURCE = "db.sqlite";


let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to the SQLite database.');
    schemas.map((schema) => {
      db.run(schema.schema(),
        (err) => {
          const seeders = schema.seeders();
          if (err) {
            // Table already created
          } else if(Array.isArray(seeders)) {
            // Table just created, creating some rows
            var insert = schema.dao.insert();
            seeders.map((seed) => {
              db.run(insert, seed);
            });
          }
        }
      );
    });
  }
});


module.exports = db;