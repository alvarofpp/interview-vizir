'use strict'

class ShowRequest {
  get rules() {
    return {
      id: 'required|exists:ddds,numero',
    }
  }

  get data() {
    const requestBody = this.ctx.request.all()
    const id = this.ctx.params.id

    return Object.assign({}, requestBody, {id})
  }
}

module.exports = ShowRequest
