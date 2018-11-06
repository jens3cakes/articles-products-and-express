
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        {id: 1, title:'My travels', author:'Jennifer', urlTitle:'Come see where I have been'},
        {id: 2, title:'Cuteness', author:'Hello Kitty', urlTitle:'How to be a cutie pie'},
        {id: 3, title:'Engineering 101', author:'Bert', urlTitle:'How to be a smart engineer'}
      ]);
    });
};
