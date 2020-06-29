'use strict'

class StoreRequest {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      preco: 'required|number',
      ddd_origem: 'required|exists:ddds,numero',
      ddd_destino: 'required|exists:ddds,numero',
    }
  }
}

module.exports = StoreRequest
