
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('Resources').insert([
        {resource: "broom"},
        {resource: "drill", description: 'impact will do'},
        {resource: "screws", description: 'hex head'},
        {resource: "wood"}
      ]);
    });
};
