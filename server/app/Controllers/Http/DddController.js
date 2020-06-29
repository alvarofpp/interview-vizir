'use strict'

const Ddd = use('App/Models/Ddd')
const Database = use('Database')
const ResponsePattern = use('App/Helpers/ResponsePattern')

class DddController {
  async index({request, response}) {
    const ddds = await Ddd.all()
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
      message: 'DDD salvo com sucesso!',
      data: ddd,
    })
  }

  show({request, response}) {
    const params = request.params
    return ResponsePattern.data(Ddd.find(params.id))
  }

  async update({request, response}) {
    const body = request.all()
    const params = request.params

    const update = await Database
      .table(Ddd.table)
      .where(Ddd.primaryKey, params.id)
      .update(body)

    if (update) {
      const id = 'numero' in Object.keys(body) ? body.numero : params.id
      return ResponsePattern.success({
        message: 'DDD atualizado com sucesso.',
        data: Ddd.find(id)
      })
    }

    return ResponsePattern.error({
      message: `Ocorreu um erro durante a atualização do DDD ${params.id}.`,
      error: {}
    })
  }

  async destroy({request, response}) {
    const params = request.params
    const destroy = await Ddd.find(params.id).delete()

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
