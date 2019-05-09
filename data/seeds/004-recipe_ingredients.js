// ./seeds/004-recipe_ingredients.js
exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1 }, // 1
    { recipe_id: 1, ingredient_id: 2 }, // 2
    { recipe_id: 2, ingredient_id: 2 }, // 3
    { recipe_id: 2, ingredient_id: 3 }, // 4
    { recipe_id: 2, ingredient_id: 4 }, // 5
    { recipe_id: 3, ingredient_id: 1 }, // 6
    { recipe_id: 3, ingredient_id: 2 }, // 7
    { recipe_id: 4, ingredient_id: 1 }, // 8
    { recipe_id: 4, ingredient_id: 4 }, // 9
  ]);
};