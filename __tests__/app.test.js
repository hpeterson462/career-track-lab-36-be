const request = require('supertest');
const app = require('../lib/app');
const Recipe = require('../lib/models/recipe');
require('../data/data-helper');

describe('recipe routes', () => {
  it('creates a recipe VIA POST', () => {
    return request(app)
      .post('/api/v1/recipes')
      .send({
        name: 'chocolate mug cake',
        ingredients: ['2 Tbsp almond flour', '2 Tbsp protein powder', '2 Tbsp sugar', '1 Tbsp coconut oil', '1 Tbsp cocoa powder', '1 egg', '1/4 tsp baking soda'],
        directions: 'Mix dry ingredients. Add beaten egg and melted oil. Grease ramekin/mug and fill with an inch of empty space to rise. Microwave on high for 2 minutes.'
      })
      .then(res => {
        expect(res.body).toEqual({
          id: expect.any(String),
          name: 'chocolate mug cake',
          ingredients: ['2 Tbsp almond flour', '2 Tbsp protein powder', '2 Tbsp sugar', '1 Tbsp coconut oil', '1 Tbsp cocoa powder', '1 egg', '1/4 tsp baking soda'],
          directions: 'Mix dry ingredients. Add beaten egg and melted oil. Grease ramekin/mug and fill with an inch of empty space to rise. Microwave on high for 2 minutes.'
        });
      });
  });


});
