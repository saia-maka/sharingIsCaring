const connection = require('./connection')

function getItems(db = connection) {
  return db('items').select()
}

function addItem(item, db = connection) {
  return db('items').insert(item)
}

module.exports = {
  getItems,
  addItem,
}
