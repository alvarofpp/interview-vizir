'use strict'

class UpdateRequest {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      id: 'required|exists:tarifas,id',
      preco: 'number',
      ddd_origem: 'exists:ddds,numero',
      ddd_destino: 'exists:ddds,numero',
    }
  }

  get data() {
    const requestBody = this.ctx.request.all()
    const id = this.ctx.params.id

    return Object.assign({}, requestBody, {id})
  }
}

module.exports = UpdateRequest
