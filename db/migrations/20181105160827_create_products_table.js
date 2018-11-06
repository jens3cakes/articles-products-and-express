
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', table =>{
    table.increments('id').notNullable();
    table.string('name').notNullable();
    table.decimal('price')
    table.string('inventory')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products')
};
