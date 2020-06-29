'use strict'

const Plano = use('App/Models/Plano')
const Database = use('Database')
const ResponsePattern = use('App/Helpers/ResponsePattern')

class PlanoController {
  async index({request, response}) {
    const params = request.get()
    var group = null

    if ('group' in params) {
      group = params.group
    }
    const planos = await Plano.query()
      .where('grupo', group)
      .orderBy('minutos')
      .setVisible([...['id', 'created_at', 'updated_at'], ...Plano.visible])
      .orderBy('id')
      .fetch()

    return ResponsePattern.data(planos)
  }

  async store({request, response}) {
    const trx = await Database.beginTransaction()
    const body = request.all()
    const plano = new Plano()

    Plano.visible.forEach((field) => {
      plano[field] = body[field]
    })
    await plano.save(trx)
    trx.commit()

    return ResponsePattern.success({
      message: 'Plano registrado com sucesso!',
      data: plano,
    })
  }

  async show({request, response}) {
    const params = request.params
    const plano = await Plano.find(params.id)

    return ResponsePattern.data(plano)
  }

  async update({request, response}) {
    const body = request.all()
    const params = request.params
    const plano = await Plano.find(params.id)
    const Intersection = use('App/Helpers/Intersection')

    Intersection.array(Object.keys(body), Plano.visible)
      .forEach((field) => {
        plano[field] = body[field]
      })
    await plano.save()

    return ResponsePattern.success({
      message: `Plano ${plano.nome} atualizado com sucesso.`,
      data: plano
    })
  }

  async destroy({request, response}) {
    const params = request.params
    const plano = await Plano.find(params.id)
    await plano.delete()

    return ResponsePattern.success({
      message: `Plano ${plano.nome} apagado com sucesso.`
    })
  }
}

module.exports = PlanoController
