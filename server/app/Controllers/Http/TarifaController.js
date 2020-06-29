'use strict'

const Tarifa = use('App/Models/Tarifa')
const Database = use('Database')
const ResponsePattern = use('App/Helpers/ResponsePattern')

class TarifaController {
  async index({request, response}) {
    const tarifas = await Database
      .table(Tarifa.table)
      .orderBy('ddd_origem')
    return ResponsePattern.data(tarifas)
  }

  async store({request, response}) {
    const trx = await Database.beginTransaction()
    const body = request.all()
    const tarifa = new Tarifa()

    Tarifa.visible.forEach((field) => {
      tarifa[field] = body[field]
    })
    await tarifa.save(trx)
    trx.commit()

    return ResponsePattern.success({
      message: 'Tarifa registrada com sucesso!',
      data: tarifa,
    })
  }

  async show({request, response}) {
    const params = request.params
    const tarifa = await Tarifa.find(params.id)
    await tarifa.loadMany(['origem', 'destino'])

    return ResponsePattern.data(tarifa)
  }

  async update({request, response}) {
    const body = request.all()
    const params = request.params
    const tarifa = await Tarifa.find(params.id)
    const Intersection = use('App/Helpers/Intersection')

    Intersection.array(Object.keys(body), Tarifa.visible)
      .forEach((field) => {
        tarifa[field] = body[field]
      })
    await tarifa.save()

    return ResponsePattern.success({
      message: `Tarifa de ${tarifa.ddd_origem} para ${tarifa.ddd_destino} atualizada com sucesso.`,
      data: tarifa
    })
  }

  async destroy({request, response}) {
    const params = request.params
    const tarifa = await Tarifa.find(params.id)
    await tarifa.delete()

    return ResponsePattern.success({
      message: `Tarifa de ${tarifa.ddd_origem} para ${tarifa.ddd_destino} apagado com sucesso.`
    })
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
