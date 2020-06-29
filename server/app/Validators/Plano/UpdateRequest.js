'use strict'

class UpdateRequest {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      id: 'required|exists:planos,id',
      nome: 'string|min:1|max:50|unique:planos,nome',
      minutos: 'integer',
      taxa: 'number',
      grupo: 'string|max:50',
    }
  }

  get data() {
    const requestBody = this.ctx.request.all()
    const id = this.ctx.params.id

    return Object.assign({}, requestBody, {id})
  }
}

module.exports = UpdateRequest
