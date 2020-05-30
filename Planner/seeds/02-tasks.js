
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        {task: "Sweep Floor", description: 'Clear the basement floor'},
        {task: "Predrill", description: 'predrill boards', notes: 'miss this and boards may split.'},
        {task: "screw boards together", description: 'assemble shelf', notes: 'make sure to measure'}
      ]);
    });
};
