'use strict'

class SimularRequest {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      minutos: 'required|integer',
      codigo_origem: 'required|exists:ddds,numero',
      codigo_destino: 'required|exists:ddds,numero',
      plano_id: 'required|exists:planos,id',
    }
  }
}

module.exports = SimularRequest
