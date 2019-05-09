// ./seeds/001-dishes.js
exports.seed = function(knex, Promise) {
  return knex('dishes').insert([
    { name: 'Dinner' }, // 1
    { name: 'Snack' }, // 2
    { name: 'Lunch' }, // 3
    { name: 'Breakfast' }, // 4
  ]);
};
