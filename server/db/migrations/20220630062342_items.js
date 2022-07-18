exports.up = function (knex) {
  return knex.schema.createTable('items', (table) => {
    table.increments('id').primary()
    table.string('item_name')
    table.string('contributor_name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('items')
}
