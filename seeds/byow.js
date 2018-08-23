
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('byow').del()
    .then(function () {
      // Inserts seed entries
      return knex('byow').insert([
        {id: 1, restaurant: 'rowValue1', category: 'rowValue1', price: 'rowValue1', phone: 'rowValue1'},
        {id: 2, restaurant: 'rowValue1', category: 'rowValue1', price: 'rowValue1', phone: 'rowValue1'},
        {id: 3, restaurant: 'rowValue1', category: 'rowValue1', price: 'rowValue1', phone: 'rowValue1'}
      ]);
    });
};
