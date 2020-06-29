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

  store({request, response}) {
    const body = request.all()
    const ddd = new Ddd()

    Ddd.visible.forEach((field) => {
      ddd[field] = body[field]
    })

    return ddd.save()
  }

  show({request, response}) {
    const params = request.params
    return Ddd.find(params.id)
  }

  async update({request, response}) {
    const body = request.all()
    const params = request.params
    const ddd = await Ddd.find(params.id)
    const Intersection = use('App/Helpers/Intersection')

    Intersection.array(Object.keys(body), Ddd.visible)
      .forEach((field) => {
        ddd[field] = body[field]
      })

    return ddd.save()
  }

  destroy({request, response}) {
    return Ddd.all()
  }
}

module.exports = PlanoController
