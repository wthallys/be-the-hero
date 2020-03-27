exports.up = function(knex) { //metodo up => criacao de tabelas
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();

    });
};

exports.down = function(knex) { //se de algum problema e precisar desfazer algo, deleta a tabela
    return knex.schema.dropTable('ongs');
};
