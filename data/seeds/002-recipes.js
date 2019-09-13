// ./seeds/002-cohorts.js
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { name: 'Pesto Linguini', dish_id: 1 }, // 1
    { name: 'Spaghetti Meatballs', dish_id: 1 }, // 2
    { name: 'Ceaser Salad', dish_id: 1 }, // 3
    { name: 'Fiesta dip', dish_id: 2 }, // 4
    { name: 'Traditional dip', dish_id: 2 }, // 5
    { name: 'Spicy dip', dish_id: 2 }, // 6
    { name: 'Grill Cheese', dish_id: 3 }, // 7
    { name: 'Soup and Salad', dish_id: 3 }, // 8
    { name: 'Tacos', dish_id: 3 }, // 9
    { name: 'French Toast', dish_id: 4 }, // 10
    { name: 'Corn Beef Hash', dish_id: 4 }, // 11
    { name: 'Cottage Cheese', dish_id: 4 }, // 12
  ]);
};