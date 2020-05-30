
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {project_id: 1,
         project: "Build Shelf",
         description: 'new tool shelf',
         resource_id: 2,
         task_id: 2},
        {project_id: 1,
         project: "Build Shelf",
         resource_id: 4,
         task_id: 3},
        {project_id: 2,
         project: "Clean Basement",
         description: 'Clean yo mess',
         resource_id: 1,
         task_id: 1}
      ]);
    });
};
