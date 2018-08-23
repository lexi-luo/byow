
exports.up = function(knex, Promise) {
    return knex.schema.createTable('byow', table => {
    table.increments('id').primary()
    table.string('restaurant')
    table.string('category')
    table.string('location')
    table.string('price')
    table.string('phone')
    table.string('size')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('byow')
};
