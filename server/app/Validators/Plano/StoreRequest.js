'use strict'

class StoreRequest {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      nome: 'required|string|min:1|max:50|unique:planos,nome',
      minutos: 'required|integer',
      taxa: 'required|number',
      grupo: 'string|max:50',
    }
  }
}

module.exports = StoreRequest
