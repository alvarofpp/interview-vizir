'use strict'

class Intersection {
  static dict(dict1, dict2) {
    const array1 = Object.keys(dict1)
    const array2 = Object.keys(dict2)

    return Intersection.array(array1, array2)
  }

  static array(array1, array2) {
    return array1.filter(value => array2.includes(value))
  }
}

module.exports = Intersection
