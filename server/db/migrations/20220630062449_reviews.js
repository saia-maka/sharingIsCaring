exports.up = function (knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments('id').primary()
    table.integer('item_id').references('items.id')
    table.string('reviewer_name')
    table.string('review')
    table.string('profile_image')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('reviews')
}
