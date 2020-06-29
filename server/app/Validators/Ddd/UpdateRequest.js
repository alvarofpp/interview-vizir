'use strict'

class UpdateRequest {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      id: 'required|exists:ddds,numero',
      numero: 'string|min:2|max:3|unique:ddds',
      regiao: 'string|min:1|max:50',
      uf_sigla: 'string|min:2|max:2|exists:ufs,sigla',
    }
  }

  get data() {
    const requestBody = this.ctx.request.all()
    const id = this.ctx.params.id

    return Object.assign({}, requestBody, {id})
  }
}

module.exports = UpdateRequest
