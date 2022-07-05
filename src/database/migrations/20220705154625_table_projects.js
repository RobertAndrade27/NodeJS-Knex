
exports.up = knex =>  knex.schema.createTable("projects", table => {

    table.increments("id");
    table.string("title", 25);

    //Relacionamento 1 usuario -> N projetos
    
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("users.id");


    table.timestamps(true, true)
  });


exports.down = knex => knex.schema.dropTable("projects");

