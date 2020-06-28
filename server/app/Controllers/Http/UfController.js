'use strict'

const Uf = use('App/Models/Uf')

class UfController {
  index({request, response}) {
    return Uf.all()
  }
}

module.exports = UfController
