/*!
 * is-generator-function-name <https://github.com/tunnckoCore/is-generator-function-name>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

module.exports = function isGeneratorFunctionName (co) {
  if (!co || !co.constructor) {
    return false
  }

  var constr = co.constructor
  var name = 'GeneratorFunction'

  return constr.name === name || constr.displayName === name
}
