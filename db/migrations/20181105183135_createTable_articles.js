
exports.up = function(knex, Promise) {
  return knex.schema.createTable('articles', table =>{
    table.increments('id').notNullable();
    table.string('title').notNullable();
    table.string('author').notNullable();
    table.string('urlTitle')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('articles')
};
