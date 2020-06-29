'use strict'

class DestroyRequest {
  get rules () {
    return {
      id: 'required|exists:tarifas,id',
    }
  }

  get data() {
    const requestBody = this.ctx.request.all()
    const id = this.ctx.params.id

    return Object.assign({}, requestBody, {id})
  }
}

module.exports = DestroyRequest
