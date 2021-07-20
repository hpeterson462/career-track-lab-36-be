const Recipe = require('../lib/models/recipe');
const chance = require('chance').Chance();

const seed = async ({ count = 3 } = {}) => {
  const recipesToCreate = [...Array(count)]
    .map(() => ({
      name: chance.word(),
      ingredients: [chance.animal()],
      directions: chance.paragraph()
    }));

  await Promise.all(recipesToCreate.map(recipe => Recipe.insert(recipe)
  ));
};

module.exports = { seed };
