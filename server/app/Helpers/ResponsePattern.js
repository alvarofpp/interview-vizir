'use strict'

class ResponsePattern {
  static success({message = '', data = {}}) {
    return {
      message: message,
      data: data,
      error: {},
    }
  }

  static error({message = '', error = {}}) {
    return {
      message: message,
      data: {},
      error: error,
    }
  }

  static data(data = {}) {
    return {
      message: '',
      data: data,
      error: {},
    }
  }
}

module.exports = ResponsePattern
