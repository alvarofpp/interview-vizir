var db = require('../../databases/database');


module.exports = {
  index: (req, res) => {
    var sql = "select * from ddds ORDER BY ddd"
    var params = []
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      res.json({
        "message": "success",
        "data": rows
      })
    });
  },
};