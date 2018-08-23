
exports.up = function(knex, Promise) {
  return knex.schema.table('byow', table => {
      table.integer('corkage')
      table.string('size')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('byow', table => {
        table.dropColumn('corkage')
        table.dropColumn('size')
    })
};
