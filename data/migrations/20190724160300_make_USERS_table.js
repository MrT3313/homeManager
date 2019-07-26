exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        // ID 
        tbl.increments()

        tbl.string('firstName')
        tbl.string('lastName')
        tbl.string('userName').unique()
        tbl.string('pw').notNullable()
        tbl.integer('adminCat').notNullable()
        tbl.integer('jobCat').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
