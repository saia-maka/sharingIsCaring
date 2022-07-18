exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('reviews').del()
  await knex('reviews').insert([
    {
      id: 1,
      item_id: 1,
      reviewer_name: 'Liam',
      review: 'More pls',
      profile_image: '/images/profile.png',
    },
    {
      id: 2,
      item_id: 1,
      reviewer_name: 'Tony',
      review: 'More pls',
      profile_image: '/images/profile.png',
    },
    {
      id: 3,
      item_id: 3,
      reviewer_name: 'Saia',
      review: 'Your air fryer smells',
      profile_image: '/images/profile.png',
    },
    {
      id: 4,
      item_id: 2,
      reviewer_name: 'Tony',
      review: 'This game gives me so much anxiety ',
      profile_image: '/images/profile.png',
    },
  ])
}
