/**
 * forEach in reverse to walk backward through an array
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
  };