'use strict'

const Plano = use('App/Models/Plano')

class PlanoController {
  index({request, response}) {
    return Plano.all()
  }
}

module.exports = PlanoController
