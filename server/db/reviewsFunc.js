const connection = require('./connection')

function getReviews(db = connection) {
  return db('reviews').select()
}

function getReviewsByItemId(id, db = connection) {
  return db('reviews').where('item_id', id).select()
}

function addReview(review, db = connection) {
  // const newPerson = {
  //   name: person.name,
  //   drink_id: Number(person.drinkId)
  // }
  return db('reviews').insert(review)
}

module.exports = {
  getReviews,
  getReviewsByItemId,
  addReview,
}
