exports.up = function (knex) {
  return knex.schema.alterTable("users", function (table) {
    table.string("status", 1).defaultTo("A"); //A=Ativo, I-Inativo, D- Deletado
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("users", function (table) {
    table.dropColumn("status");
  });
};
