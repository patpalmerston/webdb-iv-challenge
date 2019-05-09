exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { name: 'Pesto' }, // 1
    { name: 'Spaghetti' }, // 2
    { name: 'Ground Beef' }, // 3
    { name: 'Egg' }, // 4
    { name: 'Butter' },
    { name: 'Mayo' },
    { name: 'Cream Cheese' },
    { name: 'Lettuce' },
    { name: 'Croutons' },
    { name: 'Tortilla' },
    { name: 'Syrup' },
    { name: 'Potatoes' },
    { name: 'Jam' },
    { name: 'Cottage Cheese' },
  ]);
};

