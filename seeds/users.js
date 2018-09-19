
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('byow').del()
    .then(function () {
      // Inserts seed entries
      return knex('byow').insert([
        { id: 1, username: 'test', hash: 'test' }
      ]);
    });
};
