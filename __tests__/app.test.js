const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');

describe('recipe routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'))
  });

  it('creates a recipe VIA POST', () => {
    return request(app)
      .post('/api/v1/recipes')
      .send({
        name: 'chocolate mug cake',
        ingredients: ''
      })
  })
});
