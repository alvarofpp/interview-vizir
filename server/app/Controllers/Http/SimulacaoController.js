'use strict'

const Tarifa = use('App/Models/Tarifa')
const Plano = use('App/Models/Plano')

class SimulacaoController {
  async simular({request, response}) {
    const body = request.post()

    // Models
    const tarifa = await Tarifa.query()
      .where({
        ddd_origem: body.codigo_origem,
        ddd_destino: body.codigo_destino,
      }).first()
    const plano = await Plano.find(body.plano_id)

    if (!tarifa || !plano) {
      return {
        sem_plano: '-',
        com_plano: '-',
      }
    }

    // Calculo
    var valorComPlano = 0
    if (body.minutos > plano.minutos) {
      valorComPlano = (body.minutos - plano.minutos) * (tarifa.preco * plano.taxa)
    }

    return {
      sem_plano: (body.minutos * tarifa.preco).toFixed(2),
      com_plano: valorComPlano.toFixed(2),
    }
  }
}

module.exports = SimulacaoController
