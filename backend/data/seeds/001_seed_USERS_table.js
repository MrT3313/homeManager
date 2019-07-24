exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('USERS').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('USERS').insert([
        {
          firstName: "Reed",
          lastName: "Turgeon",
          userName: "MrT",
          pw: "test1",
          adminCat: 1,
          jobCat: 1,
        }
      ]);
    });
};
