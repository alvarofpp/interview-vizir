'use strict'

const Ddd = use('App/Models/Ddd')

class DddController {
  index({request, response}) {
    return Ddd.all()
  }
}

module.exports = DddController
