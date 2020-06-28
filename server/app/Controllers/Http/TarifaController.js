'use strict'

const Tarifa = use('App/Models/Tarifa')

class TarifaController {
  index({request, response}) {
    return Tarifa.all()
  }

  getDdds({request, response}) {
    const params = request.get()
    const where = JSON.parse(params.where)

    var query = Tarifa.query()
      .select(params.field)
      .distinct(params.field)
      .orderBy(params.field);

    if (Object.keys(where).length > 0) {
      query = query.where(where.field, where.value)
    }

    return query.fetch()
  }
}

module.exports = TarifaController
