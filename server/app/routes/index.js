var dddController = require('../controllers/DddController');

module.exports = function (app) {
  // Root endpoint
  app.route('/')
    .get((req, res, next) => {
      res.json({"message": "Online"})
    });
  // DDD
  app.route('/ddds')
    .get(dddController.index);
  /*
  app.route('/negociacoes/semana')
      .get(api.listaSemana);

  app.route('/negociacoes/anterior')
      .get(api.listaAnterior);

  app.route('/negociacoes/retrasada')
      .get(api.listaRetrasada);

  app.route('/negociacoes')
      .post(api.cadastraNegociacao);
   */
};