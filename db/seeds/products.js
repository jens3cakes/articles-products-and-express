
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'dog toy', price: '2.00', inventory: 10},
        {id: 2, name: 'cat toy', price: '2.00', inventory: 10},
        {id: 3, name: 'shirt', price: '15.00', inventory: 5}
      ]);
    });
};
