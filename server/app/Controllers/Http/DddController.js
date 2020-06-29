'use strict'

const Ddd = use('App/Models/Ddd')
const Database = use('Database')
const ResponsePattern = use('App/Helpers/ResponsePattern')

class DddController {
  async index({request, response}) {
    const ddds = await Database
      .table(Ddd.table)
      .orderBy(Ddd.primaryKey)
    return ResponsePattern.data(ddds)
  }

  async store({request, response}) {
    const trx = await Database.beginTransaction()
    const body = request.all()
    const ddd = new Ddd()

    Ddd.visible.forEach((field) => {
      ddd[field] = body[field]
    })
    await ddd.save(trx)
    trx.commit()

    return ResponsePattern.success({
      message: 'DDD registrado com sucesso!',
      data: ddd,
    })
  }

  async show({request, response}) {
    const params = request.params
    const ddd = await Ddd.find(params.id)
    await ddd.loadMany(['uf', 'tarifas_origem', 'tarifas_destino'])

    return ResponsePattern.data(ddd)
  }

  async update({request, response}) {
    const body = request.all()
    const params = request.params

    await Database
      .table(Ddd.table)
      .where(Ddd.primaryKey, params.id)
      .update(body)

    const id = Object.keys(body).includes('numero') ? body.numero : params.id
    const ddd = await Ddd.find(id)

    return ResponsePattern.success({
      message: 'DDD atualizado com sucesso.',
      data: ddd
    })
  }

  async destroy({request, response}) {
    const params = request.params
    const ddd = await Ddd.find(params.id)
    const destroy = await ddd.delete()

    if (destroy) {
      return ResponsePattern.success({
        message: `DDD ${params.id} apagado com sucesso.`
      })
    }
    return ResponsePattern.error({
      message: `Ocorreu um erro durante a remoção do DDD ${params.id}.`,
      error: {}
    })
  }
}

module.exports = DddController
