/**
 * forEach in reverse to walk backward through an array
 * `array.forEachRev(element => ())`
 */
Object.defineProperty(Array.prototype, 'forEachRev', {
  value: function (callback) {
    for (let i = this.length - 1; i >= 0; i--) {
      element = this[i]
      callback(element, i)
    }
  }
})

/**
 * Get the maximum value of an array of integers
 * @param {*} array 
 * @returns 
 */
Array.max = function (array) {
  return Math.max.apply(Math, array)
}

/**
* 
* @param {array} array of objects with a key holding a numerical value
* @param {string} key of value to find maximum of
* @returns max value of objects
*/
Array.maxObject = function (array, key) {
  return Math.max.apply(Math, array.map(function (o) { return o[key]; }))
}

/**
* 
* @param {array} array of objects with a key holding a numerical value
* @param {string} key of value to find maximum of
* @returns object that contains max value
*/
Array.maxObjectValue = function (array, key) {
  let max = Array.maxObject(array, key)
  return array.find(o => o[key] === max)
}

/**
 * Creates a filtered copy of an object
 * @param {object} object 
 * @param {array} allowed list of allowed keys
 * @returns 
 */
 Object.prototype.filter = function (object, allowed) {
  return Object.keys(object)
      .filter(key => allowed.includes(key))
      .reduce((obj, key) => {
          return {
              ...obj,
              [key]: object[key]
          }
      }, {})
}