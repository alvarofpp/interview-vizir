'use strict'

class StoreRequest {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      numero: 'required|string|min:3|max:3|unique:ddds',
      regiao: 'required|string|min:1|max:50',
      uf_sigla: 'required|string|min:2|max:2|exists:ufs,sigla',
    }
  }
}

module.exports = StoreRequest
