'use strict'

var data = require('./data/data.json')
var names = []
var imports = []

data.forEach(function (item) {
  names.push(item.name)
  item.imports.forEach(function (imp) {
    if (imports.indexOf(imp) === -1) {
      imports.push(imp)
    }
  })
})

imports.forEach(function (imported) {
  if (names.indexOf(imported) === -1) {
    console.log('Missing: ' + imported)
  }
})