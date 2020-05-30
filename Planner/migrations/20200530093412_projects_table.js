
exports.up = function(knex) {
  return knex.schema
    .createTable('Resources', tbl => {
        tbl.increments('id');
        tbl.string('resource', 128)
            .notNullable();
        tbl.string('description', 128);
    })
    .createTable('Tasks', tbl => {
        tbl.increments('id');
        tbl.string('task',128)
            .notNullable();
        tbl.boolean('completed')
            .defaultTo(false);
        tbl.string('description', 255);
        tbl.string('notes', 255);
    })
    .createTable('Projects', tbl => {
        tbl.integer('project_id'); 
        tbl.string('project',128)
            .notNullable();
        tbl.string('description', 255)
        tbl.boolean('completed')
            .defaultTo(false);
        tbl.integer('resource_id')
            .unsigned()
            .references('Resources.id');
        tbl.integer('task_id')
            .notNullable()
            .unsigned()
            .references('Tasks.id');
        tbl.primary(['task_id','resource_id']);
    })
};

exports.down = function(knex) {
  return knex.schema
            .dropTableIfExists('Projects')
            .dropTableIfExists('Tasks')
            .dropTableIfExists('Resources');
};
