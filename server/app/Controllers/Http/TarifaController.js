'use strict'

const Tarifa = use('App/Models/Tarifa')

class TarifaController {
  index({request, response}) {
    return Tarifa.all()
  }
}

module.exports = TarifaController
