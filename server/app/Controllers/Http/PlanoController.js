'use strict'

const Plano = use('App/Models/Plano')

class PlanoController {
  index({request, response}) {
    const params = request.get()
    var group = null

    if ('group' in params) {
      group = params.group
    }

    return Plano.query()
      .where('grupo', group)
      .orderBy('minutos')
      .fetch()
  }
}

module.exports = PlanoController
