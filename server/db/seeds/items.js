exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    { id: 1, item_name: "Phu's chilli oil", contributor_name: 'Phu' },
    { id: 2, item_name: 'Crew board game', contributor_name: 'Phu' },
    { id: 3, item_name: 'Air Fryer', contributor_name: 'Tony' },
    { id: 4, item_name: 'Hot Pot', contributor_name: 'JingJing' },
  ])
}
